import React, { FC, useRef } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'
import LazyLoad from 'react-lazyload'
import MarkDown from 'markdown-to-jsx'
import { DiscussionEmbed } from 'disqus-react'
import MetaHead from 'src/components/Head/Head'
import { useEnableWebp } from 'src/hooks/useEnableWebp'
import { WEBP_SUFFIX, DISCUSSION_KEY } from 'src/shared/constants'
import PostMeta from '../components/PostMeta/PostMeta'
import YellowSVG from '../components/YellowSVG/YellowSVG'
import SharePanel from '../components/SharePanel/SharePanel'
import PrevAndNext from '../components/PrevAndNext/PrevAndNext'
import BlogDetailSkeleton from '../components/PostDetailSkeleton/PostDetailSkeleton'
import { GET_POST_BY_ID, UPDATE_PV, UPDATE_LIKE } from '../typeDefs'
import { GetPostByIdQuery, GetPostByIdVar } from '../types'
import {
  setupHighlight,
  removeEmbededTag,
  setupTocbot,
  generateShareUrl,
} from './tools'
import {
  PostDetailWrapper,
  Poster,
  Title,
  Summary,
  Content,
  Menu,
} from './styled'

const PostDetail: FC = () => {
  const {
    query: { id },
  } = useRouter()

  const { enableWebp } = useEnableWebp()

  const markdownWrapperEl = useRef<HTMLDivElement>(null)

  const [updatePV] = useMutation(UPDATE_PV, {
    variables: { id },
    onError() {},
  })

  const [updateLike] = useMutation(UPDATE_LIKE, {
    variables: { id },
    onError() {},
  })

  const MarkdownImg = ({
    src,
    alt,
    ...props
  }: {
    src: string
    alt: string
    props: any
  }) => (
    <span className="postImgGroup" {...props}>
      <LazyLoad height={200}>
        <picture>
          <source srcSet={`${src}${WEBP_SUFFIX}`} type="image/webp" />
          <img src={src} alt={alt} />
        </picture>
      </LazyLoad>
      <span className="postImgAlt">{alt}</span>
    </span>
  )

  const { data: post } = useQuery<GetPostByIdQuery, GetPostByIdVar>(
    GET_POST_BY_ID,
    {
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
      variables: { id: id as string },

      onCompleted() {
        updatePV()
        setupHighlight(markdownWrapperEl)
        setupTocbot()
      },
    },
  )

  if (!post) return <BlogDetailSkeleton />

  const {
    getPostById: {
      title,
      posterUrl,
      summary,
      tags,
      content,
      createdAt,
      lastModifiedDate,
      pv,
      like,
      prev,
      next,
    },
  } = post

  return (
    <PostDetailWrapper>
      <MetaHead
        useTwitterCard
        postTitle={title}
        postSummary={summary}
        postPosterUrl={posterUrl}
        postUrl={generateShareUrl(id as string)}
      />

      <YellowSVG />

      <SharePanel
        title={title}
        like={like}
        updateLike={updateLike}
        postUrl={generateShareUrl(id as string)}
      />
      <Menu className="postMenu" />

      <Content>
        <Poster
          imageUrl={enableWebp ? `${posterUrl}${WEBP_SUFFIX}` : posterUrl}
        />
        <Title>{title}</Title>
        <PostMeta
          tags={tags}
          createdAt={createdAt}
          lastModifiedDate={lastModifiedDate}
          pv={pv}
          like={like}
        />
        <div ref={markdownWrapperEl}>
          <Summary>{summary}</Summary>
          <MarkDown
            options={{
              slugify: (str) => str,
              overrides: {
                img: {
                  component: MarkdownImg,
                },
              },
            }}
            className="postDetailContent"
          >
            {removeEmbededTag(content)}
          </MarkDown>
        </div>

        <PrevAndNext prev={prev} next={next} />

        <DiscussionEmbed
          shortname={DISCUSSION_KEY}
          config={{
            url: generateShareUrl(id as string),
            identifier: id as string,
            title,
          }}
        />
      </Content>
    </PostDetailWrapper>
  )
}

export default PostDetail

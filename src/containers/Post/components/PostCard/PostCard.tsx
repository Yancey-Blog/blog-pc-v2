import React, { FC } from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import { SVG_SPRITE, ALI_OSS_SUFFIX } from 'src/shared/constants'
import { formatDate, generateAliOSSSuffix } from 'src/shared/utils'
import svgIcons from 'src/static/images/svg-sprite.svg'
import {
  PostCardWrapper,
  PosterAnchor,
  Poster,
  SummaryWrapper,
  ReleasedAt,
  SVG,
  Title,
  Meta,
  MetaItem,
  Summary,
  ReadMoreSVG,
} from './styled'
import { IPostItem } from '../../types'

interface Props {
  post: IPostItem
}

const PostCard: FC<Props> = ({ post }) => {
  const { _id, createdAt, posterUrl, title, pv, like, tags, summary } = post
  return (
    <PostCardWrapper>
      <Link href="/post/[id]" as={`/post/${_id}`}>
        <PosterAnchor>
          <LazyLoad height={200}>
            <Poster>
              <source
                srcSet={`${posterUrl}${generateAliOSSSuffix(
                  ALI_OSS_SUFFIX.WEBP_SUFFIX,
                )}`}
                type="image/webp"
              />
              <img src={posterUrl} alt={title} />
            </Poster>
          </LazyLoad>
        </PosterAnchor>
      </Link>
      <SummaryWrapper>
        <ReleasedAt>
          <SVG className="timesvg">
            <use xlinkHref={`${svgIcons}${SVG_SPRITE.time}`} />
          </SVG>
          Released At {formatDate(createdAt)}
        </ReleasedAt>

        <Link href="/post/[id]" as={`/post/${_id}`}>
          <a>
            <Title>{title}</Title>
          </a>
        </Link>

        <Meta>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.eye}`} />
            </SVG>
            {pv} PV
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.comments1}`} />
            </SVG>
            {like} Likes
          </MetaItem>
          <MetaItem>
            <SVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.closeFolder}`} />
            </SVG>
            <Link href={`/post?tag=${tags[0]}`}>
              <a>{tags[0]}</a>
            </Link>
          </MetaItem>
        </Meta>

        <Summary>{summary}</Summary>

        <Link href={`/post/${_id}`}>
          <a>
            <ReadMoreSVG>
              <use xlinkHref={`${svgIcons}${SVG_SPRITE.more}`} />
            </ReadMoreSVG>
          </a>
        </Link>
      </SummaryWrapper>
    </PostCardWrapper>
  )
}

export default PostCard

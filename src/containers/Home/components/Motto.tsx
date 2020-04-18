import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { SOCIAL_MEDIA, ALI_OSS_URL } from 'src/shared/constants'
import { flexMixin } from 'src/styled/mixins'
import { IMotto } from '../types'
import svgIcons from '../../../../static/yancey-official-blog-svg-icons.svg'

const MottoBar = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.halfOpcityBlack};
  padding: 1.4rem 1.8rem;
  border-radius: 0.7rem;
`

const MottoContent = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const UpTriangle = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.halfOpcityBlack};
  top: -2rem;
  left: 5rem;
`

const SocialMediaIconWrapper = styled.div`
  ${flexMixin()}
`

const Svg = styled.svg`
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 1rem;
  cursor: pointer;
`

const QRCode = css`
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 16px, 0);
    transition: 700ms all ease;
  }

  &::after {
    width: 8rem;
    height: 8rem;
    padding: 0.6666666666666666rem;
    border-radius: 0.8rem;
    top: 4.133333333333334rem;
    left: -3.8666666666666667rem;
  }

  &::before {
    width: 0;
    height: 0;
    border: 1.0666666666666667rem solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    top: 2rem;
    left: -0.26666666666666666rem;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: 700ms all ease;
  }
`

const TwitterQRCodeLink = styled.a`
  ${QRCode}
  &::after {
    background: rgba(0, 0, 0, 0.5)
      url(${ALI_OSS_URL}/blog-fe-static/twitter-qr-code.jpg) no-repeat center
      top;
    background-size: cover;
    background-origin: content-box;
  }
`

const WeChatQRCodeLink = styled.a`
  ${QRCode}
  &::after {
    background: rgba(0, 0, 0, 0.5)
      url(${ALI_OSS_URL}/blog-fe-static/official-account-qr-code.jpg) no-repeat
      center top;
    background-size: cover;
    background-origin: content-box;
  }
`

interface Props {
  mottos: IMotto[]
}

const Motto: FC<Props> = ({ mottos }) => {
  return (
    <MottoBar>
      <UpTriangle />
      <MottoContent>{mottos[0]?.content}</MottoContent>

      <SocialMediaIconWrapper>
        {Object.keys(SOCIAL_MEDIA).map((key) => {
          if (key === 'twitter') {
            return (
              <TwitterQRCodeLink
                key={key}
                href={SOCIAL_MEDIA[key].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg>
                  <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
                </Svg>
              </TwitterQRCodeLink>
            )
          }

          if (key === 'wechat') {
            return (
              <WeChatQRCodeLink
                key={key}
                href={SOCIAL_MEDIA[key].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Svg>
                  <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
                </Svg>
              </WeChatQRCodeLink>
            )
          }

          return (
            <a
              key={key}
              href={SOCIAL_MEDIA[key].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Svg>
                <use xlinkHref={`${svgIcons}${SOCIAL_MEDIA[key].icon}`} />
              </Svg>
            </a>
          )
        })}
      </SocialMediaIconWrapper>
    </MottoBar>
  )
}

export default Motto

import { FC } from 'react'
import styled, { css } from 'styled-components'
import { SOCIAL_MEDIA, ALI_OSS_FE_STATIC_PATH } from 'src/shared/constants'
import { flexMixin, transitionMixin, backgroundMixin } from 'src/styled/mixins'
import { IMotto } from '../types'

const TWITTER_QRCODE = `${process.env.NEXT_PUBLIC_STATIC_FILE_URL}/${ALI_OSS_FE_STATIC_PATH}/twitter-qr-code.jpg`
const WECHAT_QRCODE = `${process.env.NEXT_PUBLIC_STATIC_FILE_URL}/${ALI_OSS_FE_STATIC_PATH}/official-account-qr-code.jpg`

const MottoBar = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.fiveOpcityBlack};
  padding: 1.4rem 1.8rem;
  border-radius: 0.7rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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
  top: -2rem;
  left: 5rem;
  width: 0;
  height: 0;
  border: 1rem solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.fiveOpcityBlack};
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
    ${transitionMixin('all', 700, 'ease')}
  }

  &::after {
    width: 8rem;
    height: 8rem;
    padding: 0.65rem;
    border-radius: 0.8rem;
    top: 4.1rem;
    left: -3.2rem;
  }

  &::before {
    width: 0;
    height: 0;
    top: 2rem;
    left: 0.4rem;
    border: 1.06rem solid transparent;
    border-bottom-color: ${({ theme }) => theme.colors.fiveOpcityBlack};
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
    ${transitionMixin('all', 700, 'ease')}
  }
`

const TwitterQRCodeLink = styled.a`
  ${QRCode}
  &::after {
    background-color: ${({ theme }) => theme.colors.fiveOpcityBlack};
    background-image: url(${TWITTER_QRCODE});
    background-origin: content-box;
    ${backgroundMixin()}
  }
`

const WeChatQRCodeLink = styled.a`
  ${QRCode}
  &::after {
    background-color: ${({ theme }) => theme.colors.fiveOpcityBlack};
    background-image: url(${WECHAT_QRCODE});
    background-origin: content-box;
    ${backgroundMixin()}
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
                  <use xlinkHref={SOCIAL_MEDIA[key].icon} />
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
                  <use xlinkHref={SOCIAL_MEDIA[key].icon} />
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
                <use xlinkHref={SOCIAL_MEDIA[key].icon} />
              </Svg>
            </a>
          )
        })}
      </SocialMediaIconWrapper>
    </MottoBar>
  )
}

export default Motto

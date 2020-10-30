import { FC } from 'react'
import styled from 'styled-components'
import dot from 'src/static/images/dot.png'
import { backgroundMixin } from 'src/styled/mixins'
import { AliOSSSuffix } from 'src/shared/constants'
import { generateAliOSSSuffix } from 'src/shared/utils'
import { PosterProps } from 'src/shared/types'

import { ICover } from '../types'

const Covers = styled.figure<PosterProps>`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-attachment: fixed;
  ${backgroundMixin()};

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${dot});
    background-repeat: repeat;
    background-attachment: scroll;
    opacity: 0.5;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

interface Props {
  isSupportWebp: boolean
  covers: ICover[]
}

const Cover: FC<Props> = ({ isSupportWebp, covers }) => {
  return (
    <Covers
      imageUrl={
        isSupportWebp
          ? `${covers[0]?.coverUrl}${generateAliOSSSuffix(
              AliOSSSuffix.WEBP_SUFFIX,
            )}`
          : covers[0]?.coverUrl
      }
    />
  )
}

export default Cover

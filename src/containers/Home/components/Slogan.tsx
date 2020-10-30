import { FC } from 'react'
import styled from 'styled-components'
import { noUserSelectMixin } from 'src/styled/mixins'
import { glitchLoop1, glitchLoop2 } from 'src/styled/animations'

const Slogans = styled.h2`
  margin-bottom: 2.4rem;
  font-family: 'Ubuntu', sans-serif;
  font-size: 5.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ${noUserSelectMixin()}

  &::before,
  &::after {
    position: absolute;
    content: attr(data-slogan);
    top: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
  }

  &::before {
    left: -1px;
    text-shadow: ${({ theme }) => `1px 0 ${theme.colors.sloganRed}`};
  }

  &::after {
    left: 1px;
    text-shadow: ${({ theme }) => `-1px 0 ${theme.colors.sloganBlue}`};
  }

  &:hover::before {
    text-shadow: ${({ theme }) => `4px 0 ${theme.colors.sloganRed}`};
    animation: ${glitchLoop1} 0.8s infinite ease-in-out alternate-reverse;
  }

  &:hover::after {
    text-shadow: ${({ theme }) => `-5px 0 ${theme.colors.sloganBlue}`};
    animation: ${glitchLoop2} 0.8s infinite ease-in-out alternate-reverse;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Slogan: FC = () => {
  return <Slogans data-slogan="HI, YANCEY!">HI, YANCEY!</Slogans>
}

export default Slogan

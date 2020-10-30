import { FC } from 'react'
import styled from 'styled-components'
import { flexMixin, transitionMixin } from 'src/styled/mixins'
import { SVG_SPRITE } from 'src/shared/constants'

interface Props {
  theme: string
  onToggle: Function
}

interface ButtonProps {
  readonly lightTheme: boolean
}

const ToggleContainer = styled.button`
  position: fixed;
  top: 0.75rem;
  right: 2.4rem;
  ${flexMixin('space-between')}
  width: 8rem;
  height: 3rem;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 3rem;
  cursor: pointer;
  overflow: hidden;
  z-index: 200;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const SVG = styled.svg<ButtonProps>`
  width: 2rem;
  ${transitionMixin('all', 300, 'linear')}

  &:first-child {
    transform: ${({ lightTheme }) =>
      !lightTheme ? 'translateY(-55px)' : 'translateY(0)'};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) =>
      !lightTheme ? 'translateY(0)' : 'translateY(-55px)'};
  }
`

const ToggleTheme: FC<Props> = ({ theme, onToggle }) => {
  return (
    <ToggleContainer onClick={() => onToggle()}>
      <SVG lightTheme={theme === 'light'}>
        <use xlinkHref={SVG_SPRITE.sun} />
      </SVG>
      <SVG lightTheme={theme === 'light'}>
        <use xlinkHref={SVG_SPRITE.moon} />
      </SVG>
    </ToggleContainer>
  )
}

export default ToggleTheme

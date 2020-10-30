import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

export const FooterWrapper = styled.footer`
  margin: 4.8rem auto 2.4rem;
  width: 60rem;
  font-family: 'Ubuntu', sans-serif;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const CopyRight = styled.p`
  font-size: 0.87rem;
`

export const TechStacks = styled.p`
  ${flexMixin('flex-start')}
  font-size: 1rem;
  font-weight: 600;

  svg {
    margin: 0 0.27rem;
    width: 1.33rem;
    height: 1.33rem;
    fill: ${({ theme }) => theme.colors.heartRed};
  }
`

export const Divider = styled.hr`
  box-sizing: content-box;
  margin: 0.47rem 0 0.94rem;
  padding: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, #666666 50%, rgba(255, 255, 255, 0) 40%)
    repeat-x top;
  background-size: 3px 1px;
  border: 0;
`

export const InnerLink = styled.span`
  font-size: 0.87rem;
  margin-right: 1.1rem;
`

export const Email = styled.a`
  font-size: 0.87rem;
`

export const FooterBottom = styled.div`
  ${flexMixin('space-between')}
`

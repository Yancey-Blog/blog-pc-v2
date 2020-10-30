import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'

export const PostCardWrapper = styled.section`
  display: flex;
  margin-bottom: 3rem;
  height: 22rem;
  font-family: 'Ubuntu', sans-serif;
  text-align: right;
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.background.postCard};
  border-radius: 0.5rem;
  box-shadow: 0 1px 20px -8px ${({ theme }) => theme.colors.fiveOpcityBlack};
  text-shadow: 0 0 1px ${({ theme }) => theme.colors.oneOpcityBlack};
  overflow: hidden;

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
    margin: 0 1.4rem 1.4rem;
    height: 100%;
  }
`

export const PosterAnchor = styled.a`
  width: 33rem;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.1);
    transition: transform 500ms ease;
  }
`

export const SVG = styled.svg`
  width: 1rem;
  height: 1rem;
  margin-right: 0.8rem;
  fill: ${({ theme }) => theme.text.secondary};

  &.timesvg {
    position: relative;
    top: 2px;
  }
`

export const SummaryWrapper = styled.div`
  box-sizing: border-box;
  padding: 1.8rem 2.4rem;
  width: 26rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`

export const ReleasedAt = styled.p`
  font-size: 0.9rem;
`

export const Title = styled.h2`
  margin: 1.4rem 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.header};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Meta = styled.div`
  ${flexMixin('space-between')}
`

export const MetaItem = styled.div`
  ${flexMixin()}
  font-size: 0.9rem;
`

export const Summary = styled.p`
  margin: 1.4rem 0 1rem;
  min-height: 8rem;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text.header};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    -webkit-line-clamp: 3;
    min-height: auto;
  }
`

export const ReadMoreSVG = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.text.header};
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.colors.orange};
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

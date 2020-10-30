import styled from 'styled-components'

export const SearchBoxWrapper = styled.div`
  .ais-SearchBox {
    position: fixed;
    top: 0.9rem;
    right: 12.4rem;
    z-index: 201;
  }

  .ais-SearchBox-input {
    padding: 0.8rem;
    padding-left: 1.8rem;
    width: 16.8rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text.primary};
    background: transparent;
    border: 1px solid ${({ theme }) => theme.text.primary};
    border-radius: 0.3rem;
    outline: none;
  }

  .ais-SearchBox-input::placeholder {
    color: ${({ theme }) => theme.text.primary};
  }

  .ais-SearchBox-input::-webkit-search-cancel-button,
  .ais-SearchBox-input::-webkit-search-decoration,
  .ais-SearchBox-input::-webkit-search-results-button,
  .ais-SearchBox-input::-webkit-search-results-decoration {
    display: none;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    padding: 0;
    overflow: visible;
    font: inherit;
    line-height: normal;
    color: inherit;
    background: none;
    border: 0;
    cursor: pointer;
    user-select: none;
  }

  .ais-SearchBox-submitIcon {
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.text.header};
  }

  .ais-SearchBox-resetIcon {
    fill: ${({ theme }) => theme.text.header};
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    position: absolute;
    top: 0.9rem;
    right: 0.3rem;
    width: 1.3rem;
  }

  .ais-SearchBox-submit {
    left: 0.3rem;
  }

  .ais-SearchBox-reset {
    top: 0.76rem;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Result = styled.div`
  position: fixed;
  top: 4.5rem;
  right: 0;
  width: 29.4rem;
  height: calc(100vh - 4.5rem);
  background: ${({ theme }) => theme.background.primary};
  box-shadow: 0 0.13333rem 4.2rem 0
    ${({ theme }) => theme.colors.oneOpcityBlack};
  z-index: 201;
  overflow-y: scroll;
  transform: translateX(30rem);
  transition: transform 250ms ease;

  &.showSearchResultDrawer {
    transform: translateX(0);
    transition: transform 250ms ease;
  }

  .ais-Hits-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ais-Highlight {
    margin-right: 0.4rem;
    line-height: 1.8;
  }

  .ais-Snippet-nonHighlighted {
    line-height: 1.8;
  }

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    border-bottom: 1px solid ${({ theme }) => theme.colors.postTagColor};
    line-height: 1.8;
    font-style: normal;
    padding-bottom: 0.1rem;
  }

  .ais-Hits-item {
    padding: 1.6rem 2.1rem;
    transition: background-color 0.2s ease-out;
  }

  .ais-Hits-item:hover {
    background-color: ${({ theme }) => theme.background.bestAlbumCard};
    transition: background-color 0.2s ease-out;
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: center;
    margin: 1.6rem 0;
  }

  .ais-PoweredBy-logo {
    display: block;
    height: 1.2em;
    width: auto;
    margin-left: 0.3rem;
  }

  .ais-PoweredBy-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`

export const HitName = styled.div`
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.colors.postTagColor};
  font-weight: 600;
`

export const HitDescription = styled.div`
  color: ${({ theme }) => theme.text.post};
  word-break: break-all;
`

export const HitContent = styled.div`
  color: ${({ theme }) => theme.text.secondary};
`

export const HitTag = styled.div`
  display: inline-block;
  margin-right: 0.4rem;
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.postTag};
  background: ${({ theme }) => theme.colors.postTagBg};
  border-radius: 0.3rem;
`

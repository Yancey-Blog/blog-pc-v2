import React, { FC } from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom'
import Hit from './Hit'
import { SearchBoxContainer, Result } from './styled'

const ALGOLIA_SEARCH_APP_ID = '5Y6Y04WE04'
const ALGOLIA_SEARCH_API_KEY = '46f32897c2a83b6495111a68bd1cd8c7'
const ALGOLIA_SEARCH_INDEX_NAME = 'prod_YANCEY_BLOG'

const searchClient = algoliasearch(
  ALGOLIA_SEARCH_APP_ID,
  ALGOLIA_SEARCH_API_KEY,
  {},
)

const AlgoliaSearchBox: FC = () => {
  return (
    <SearchBoxContainer>
      <div className="ais-InstantSearch">
        <InstantSearch
          indexName={ALGOLIA_SEARCH_INDEX_NAME}
          searchClient={searchClient}
        >
          <Configure
            attributesToSnippet={['content:80']}
            snippetEllipsisText="..."
            // highlightPreTag='<em class="search-highlight">'
            // highlightPostTag="</em>"
          />
          <div className="right-panel">
            <SearchBox />
            <Result>
              <Hits hitComponent={Hit} />
            </Result>
          </div>
        </InstantSearch>
      </div>
    </SearchBoxContainer>
  )
}

export default AlgoliaSearchBox
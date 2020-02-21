import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import { ApolloClient } from 'apollo-client'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import withApollo from '../lib/withApollo'
import theme from '../lib/theme'

interface IProps {
  apollo: ApolloClient<{}>
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default withApollo(MyApp, { getDataFromTree })

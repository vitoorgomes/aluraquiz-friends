import React from 'react'
import { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

export interface IThemeProps {
  theme: {
    colors: {
      primary: string
      secondary: string
      mainBg: string
      contrastText: string
      wrong: string
      success: string
    }
    borderRadius: string
  }
}

const GlobalStyle = createGlobalStyle<IThemeProps>`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const { theme } = db

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Friends Quiz" />
        <meta property="og:type" content="Quiz" />
        <meta
          property="og:url"
          content="https://aluraquiz-friends.vitoorgomes.vercel.app"
        />
        <meta property="og:image" content={db.bg} />
        <meta
          property="og:description"
          content="Um Quiz para testar seus conhecimentos em Friends"
        />
        <meta name="theme-color" content={theme.colors.primary}></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

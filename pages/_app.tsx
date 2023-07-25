import React from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components'

import { PostProvider } from '@context/PostProvider'
import SocketProvider from '@utils/socket'
import { theme } from '@themes'
import Layout from './_layout'
import '@styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <>
        <SocketProvider />
        <ThemeProvider theme={theme}>
          <Layout>
            <PostProvider>
              <Component {...pageProps} />
            </PostProvider>
          </Layout>
        </ThemeProvider>
      </>
    </SessionProvider>
  )
}

import Head from 'next/head'
import 'focus-visible'
import { AppProps } from 'next/app'
import GlobalStyle from '~lib/globalStyle'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Password generator</title>
        <meta name="description" content="Generate your password like there is no tomorrow!" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

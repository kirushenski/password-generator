import Head from 'next/head'
import 'focus-visible'
import { AppProps } from 'next/app'
import localFont from '@next/font/local'
import GlobalStyle from '~lib/globalStyle'

const JetBrainsMonoBold = localFont({
  src: '../assets/fonts/JetBrainsMono-Bold.woff2',
  weight: '700',
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${JetBrainsMonoBold.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Head>
        <title>Password generator</title>
        <meta name="description" content="Generate your password like there is no tomorrow!" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#18171f" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

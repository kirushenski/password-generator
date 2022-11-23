import Head from 'next/head'
import { AppPropsWithLayout } from '~types/index'
import 'focus-visible'
import 'modern-normalize/modern-normalize.css'
import '~styles/theme.css'
import '~styles/helpers.css'
import '~styles/global.css'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Opinionated setup of Next.js-based project" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

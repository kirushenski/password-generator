import { ReactNode } from 'react'
import { Layout } from '~components/Layout'
import { NextPageWithLayout } from '~types/index'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Next Starter</h1>
    </div>
  )
}

HomePage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default HomePage

import { AppProps } from 'next/app'

import 'styles/globals.css'

import Layout from 'components/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App

import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import install from '@twind/with-next/app'
import config from '../../twind.config'
import Layout from '@/layouts/Layout'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx }
}

export default install(config, MyApp);
import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({
  Component,
  pageProps: { ...pageProps },
}) {

  return (
   <>
   <Layout>
   
        <Head>
            <meta name="description" content="cat"/>
            <meta name="keywords" content="catt"/>
            <meta name="author" content="cat"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
   
    </>
    
  )
}

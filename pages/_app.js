import '../styles/components.css'
import '../styles/bootstrap-grid.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp

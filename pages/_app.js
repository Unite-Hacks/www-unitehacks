import Later from '../components/Later'
import Meta from '../components/Meta'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Meta />
  <Later />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp

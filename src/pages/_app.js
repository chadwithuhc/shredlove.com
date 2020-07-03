import 'src/styles/app.sass'
import datastore from '../data/store'

// preload all data
datastore.fetch()

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
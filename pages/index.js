import datastore from '../stores/datastore'
import Layout from '../components/Layout'

export default function Home() {
  const { media } = datastore

  return (
    <Layout pageTitle="the archives">
      <ul>
        {media.map(entry => <li key={entry.id}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

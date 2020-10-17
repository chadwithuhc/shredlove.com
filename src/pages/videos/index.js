import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Videos() {
  const { media } = datastore

  const videos = media.filter(entry => entry.type === 'video')

  return (
    <Layout pageTitle="videos">
      <h1 className="title">Videos</h1>
      <p className="subtitle">VX1000, miniDV, hi-8?</p>

      <ul>
        {videos.map(entry => <li key={entry.slug}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

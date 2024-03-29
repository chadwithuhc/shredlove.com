import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Videos() {
  const { media } = datastore

  const videos = media.filter(entry => entry.source.mediaType === 'video')

  return (
    <Layout pageTitle="videos">
      <h1 className="title">Videos</h1>
      <p className="subtitle">VX1000, miniDV, hi-8?</p>

      <ul className="standard-link-list">
        {videos.map(entry => <li key={entry.slug}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

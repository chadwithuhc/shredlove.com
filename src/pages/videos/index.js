import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Videos() {
  const { media } = datastore

  const videos = media.filter(entry => entry.type === 'video')

  return (
    <Layout pageTitle="videos">
      <h1 className="title">Videos</h1>
      <p className="subtitle">video from the streets</p>

      <ul>
        {videos.map(entry => <li key={entry.id}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

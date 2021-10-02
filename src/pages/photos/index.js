import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Photos() {
  const { media } = datastore

  const photos = media.filter(entry => entry.source.mediaType === 'photo')

  return (
    <Layout pageTitle="photos">
      <h1 className="title">Photos</h1>
      <p className="subtitle">film, scans, powershot sd750</p>

      <ul className="standard-link-list">
        {photos.map(entry => <li key={entry.slug}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

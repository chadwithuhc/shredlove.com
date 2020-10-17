import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Timeline() {
  const { media } = datastore

  // content with dates
  const content = media.filter(entry => entry.date)

  return (
    <Layout pageTitle="timeline">
      <h1 className="title">Timeline</h1>
      {/* <p className="subtitle">a date-driven view of content</p> */}
      
      <ul>
        {content.map(entry => <li key={entry.slug}>{entry.Link}</li>)}
      </ul>
    </Layout>
  )
}

import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Timeline() {
  const { media } = datastore

  // content with dates && shown in timeline
  const content = media.filter(entry => entry.date && entry.showInTimeline).sort((a,b) => new Date(b.date) - new Date(a.date))

  return (
    <Layout pageTitle="timeline">
      <h1 className="title">Timeline</h1>
      <p className="subtitle">a date-driven view of the archives</p>
      
      <ul>
        {content.map(entry => {
          const date = new Date(entry.date)
          return (
            <li key={entry.slug}>{date.getFullYear()} - {entry.Link}</li>
          )
        })}
      </ul>
    </Layout>
  )
}

import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function SDZine() {
  const { media } = datastore

  // content with dates && shown in timeline
  const content = media.filter(entry => entry.date && entry.categories?.includes('sdzine')).sort((a,b) => new Date(b.date) - new Date(a.date))

  return (
    <Layout pageTitle="timeline">
      <h1 className="title">SDZine</h1>
      <p className="subtitle">Videos from the SDZine issues</p>
      
      <ul className="standard-link-list">
        {content.map(entry => {
          const date = new Date(entry.date)
          return (
            <li key={entry.slug}>
              <span>{entry.Link}</span>
              <span>{date.getFullYear()}</span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Home() {
  const { media } = datastore

  return (
    <Layout pageTitle="the archives">
      <section className="homepage-hero">
        <p>shredlove.com launched in 2005</p>
        <p>a skateboard crew from the streets of southern california</p>
        <p className="homepage-standout">born and bred to rip and shred</p>
      </section>

      {/* <h2>Recent Archives</h2>
      <ul>
        {media.map(entry => <li key={entry.slug}>{entry.Link}</li>)}
      </ul> */}
    </Layout>
  )
}

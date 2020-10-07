import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Crew() {
  const { people } = datastore

  return (
    <Layout pageTitle="crew">
      <h1 className="title">Crew</h1>
      <p className="subtitle">shredlove.com, shred dogz, and friends</p>

      <ul>
        {people.map(person => <li key={person.id}>{person.Link}</li>)}
      </ul>
    </Layout>
  )
}
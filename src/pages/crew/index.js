import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Crew() {
  const { people } = datastore

  return (
    <Layout pageTitle="crew">
      <h1 className="title">Crew</h1>
      <p className="subtitle">shredlove, shred dogz, and friends</p>

      <ul className="standard-link-list">
        {people.map(person => <li key={person.uid}>{person.Link}</li>)}
      </ul>
    </Layout>
  )
}
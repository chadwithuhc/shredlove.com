import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Crew() {
  const { people } = datastore

  return (
    <Layout pageTitle="Crew">
      <ul>
        {people.map(person => <li key={person.id}>{person.Link}</li>)}
      </ul>
    </Layout>
  )
}
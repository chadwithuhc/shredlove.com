import datastore from '../../stores/datastore'
import Layout from '../../components/Layout'

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
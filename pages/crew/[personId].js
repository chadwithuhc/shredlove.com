import datastore from '../../stores/datastore'
import Layout from '../../components/Layout'

export default function Person({ personId }) {
  const { people } = datastore
  const person = people.find(p => p.id === personId)

  return (
    <Layout pageTitle={person.displayName} breadcrumbs={[
      { href: '/crew', label: 'Crew' },
      { href: person.url, label: person.id }
    ]}>
      <h1>{person.displayName}</h1>
      <pre>{JSON.stringify(person, null, ' ')}</pre>

      <h2>Media:</h2>
      {person.media.map(media => (
        <dl key={media.id}>
          <dt>{media.type}</dt>
          <dd>{media.Link}</dd>
        </dl>
      ))}

      <h2>Credits:</h2>
      {person.credits.map(credit => (
        <dl key={credit.id}>
          <dt>{credit.type}</dt>
          {/* <dd>{credit.person.Link}</dd> */}
        </dl>
      ))}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      personId: params.personId,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: datastore.raw.people.map(person => ({
      params: { personId: person.id }
    })),
    fallback: false
  }
}
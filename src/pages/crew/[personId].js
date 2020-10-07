import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Person({ personId }) {
  const { people } = datastore
  const person = people.find(p => p.id === personId)

  return (
    <Layout pageTitle={person.displayName} breadcrumbs={[
      { href: '/crew', label: 'Crew' },
      { href: person.url, label: person.id }
    ]}>
      <h1 className="title">{person.displayName}</h1>
      <dl className="meta-list">
        <dt>Media</dt>
        <dd className="meta-sublist-group">
          <dl className="meta-sublist is-reverse">
          {person.media.map(entry => (
            <React.Fragment key={entry.id}>
              <dt>{entry.Link}</dt>
              <dd>{entry.mediaType.label}</dd>
            </React.Fragment>
          ))}
          </dl>
        </dd>

        <dt>Credits</dt>
        <dd>
          <dl className="meta-sublist">
          {person.credits.map(credit => (
            <React.Fragment key={credit.id}>
              <dt>{credit.type}</dt>
              {/* <dd>{credit.person.Link}</dd> */}
            </React.Fragment>
          ))}
          </dl>
        </dd>
      </dl>

      {/* <pre>{JSON.stringify(person, null, ' ')}</pre> */}
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
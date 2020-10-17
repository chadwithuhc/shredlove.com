import utils from 'utils'
import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Person({ personId }) {
  const { people } = datastore
  const person = people.find(p => p.uid === personId)
  utils.log('person', person)

  return (
    <Layout pageTitle={`crew: ${person.displayName}`} breadcrumbs={[
      { href: '/crew', label: 'Crew' },
      { href: person.url, label: person.uid }
    ]}>
      <h1 className="title">{person.displayName}</h1>
      <dl className="meta-list">
        <dt>Media</dt>
        <dd className="meta-sublist-group">
          {person.media.length === 0 && <em className="info-text">None Yet</em>}
          <dl className="meta-sublist is-reverse">
          {person.media.map(entry => (
            <React.Fragment key={entry.slug}>
              <dt>{entry.Link}</dt>
              <dd>{entry.mediaType.label}</dd>
            </React.Fragment>
          ))}
          </dl>
        </dd>

        <dt>Credits</dt>
        <dd className="meta-sublist-group">
          {person.credits.length === 0 && <em className="info-text">None Yet</em>}
          <dl className="meta-sublist">
          {person.credits.map(credit => (
            <React.Fragment key={credit.uid}>
              <dt>{credit.type}</dt>
              <dd>{credit.media.Link}</dd>
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
      params: { personId: person.uid }
    })),
    fallback: false
  }
}
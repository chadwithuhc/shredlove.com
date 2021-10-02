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
      { href: person.url, label: person.uid.replace(/-/, ' ') }
    ]}>
      <h1 className="title"><abbr className="aka" title="also known as">a.k.a.</abbr> {person.displayName}</h1>
      <dl className="meta-list">
        {/* <dt>Media</dt>
        <dd className="meta-sublist-group">
          {person.media.length === 0 && <em className="info-text">None Yet</em>}
          <dl className="meta-sublist is-reverse">
          {person.mediaWithCredits.map(entry => (
            <React.Fragment key={entry.media.slug}>
              <dt>{entry.media.Link}</dt>
              <dd>{entry.creditsLabel}</dd>
            </React.Fragment>
          ))}
          </dl>
        </dd> */}

        <dt>Credits</dt>
        <dd className="meta-sublist-group">
          {person.credits.length === 0 && <em className="info-text">None Yet</em>}
          <dl className="meta-sublist meta-sublist-aggregated">
          {person.sortedCredits.map(credit => (
            <React.Fragment key={credit.type}>
              <dt>{credit.displayName}</dt>
              {credit.values.map(mediaCredit => (
                <dd key={mediaCredit.uid}>{mediaCredit.media.Link}</dd>
              ))}
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
import datastore from '../../stores/datastore'
import Layout from '../../components/Layout'

export default function Media({ mediaId }) {
  const { media } = datastore
  const entry = media.find(m => m.id === mediaId)

  return (
    <Layout pageTitle={entry.titleFull} breadcrumbs={[
      { href: entry.mediaType.url, label: entry.mediaType.labelPlural },
      { href: entry.url, label: entry.title }
    ]}>
      <dl className="meta-list">
        <dt>Title</dt>
        <dd>{entry.title}</dd>

        <dt>Description</dt>
        <dd>{entry.description}</dd>

        <dt>Credits</dt>
        <dd className="meta-sublist-group">
          <dl className="meta-sublist">
          {entry.credits.map(credit => (
            <React.Fragment key={credit.id}>
              <dt>{credit.type}</dt>
              <dd>{credit.person.Link}</dd>
            </React.Fragment>
          ))}
          </dl>
        </dd>
      </dl>

      {/* <pre>{JSON.stringify(entry, null, ' ')}</pre> */}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      mediaId: params.mediaId,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: datastore.raw.media.map(media => ({
      params: { mediaId: media.id }
    })),
    fallback: false
  }
}
import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Media({ mediaId }) {
  const { media } = datastore
  const entry = media.find(m => m.slug === mediaId)
  console.log('entry', entry)

  return (
    <Layout pageTitle={entry.titleFull} breadcrumbs={[
      { href: entry.mediaType.url, label: entry.mediaType.labelPlural },
      { href: entry.url, label: entry.title }
    ]}>
      {entry.Media}
      
      <dl className="meta-list">
        <dt>Title</dt>
        <dd>{entry.title}</dd>

        <dt>Description</dt>
        <dd>{entry.description}</dd>

        <dt>Credits</dt>
        <dd className="meta-sublist-group">
          <dl className="meta-sublist">
          {entry.credits.map(credit => (
            <React.Fragment key={credit.uid}>
              <dt>{credit.type}</dt>
              <dd>{credit.person.Link}</dd>
            </React.Fragment>
          ))}
          </dl>
        </dd>

        {entry.mediaFields.map(field => (
          <React.Fragment key={field.prop}>
            <dt>{field.label}</dt>
            <dd>{field.value}</dd>
          </React.Fragment>
        ))}
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
      params: { mediaId: media.slug }
    })),
    fallback: false
  }
}
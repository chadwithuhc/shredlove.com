import utils from 'utils'
import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

export default function Media({ mediaId }) {
  const { media } = datastore
  const entry = media.find(m => m.slug === mediaId)
  utils.log('entry', entry)

  return (
    <Layout pageTitle={entry.titleFull} breadcrumbs={[
      { href: entry.mediaType.url, label: entry.mediaType.labelPlural },
      { href: entry.url, label: entry.title }
    ]}>
      <div className={`media-wrapper ${entry.source.mediaType}-wrapper`}>
        {entry.Media}
      </div>
      
      <dl className="meta-list">
        <dt>Title</dt>
        <dd>{entry.title}</dd>

        {entry.description && (
          <>
          <dt>Description</dt>
          <dd>{entry.description}</dd>
          </>
        )}

        {entry.dateFormatted && (
          <>
          <dt>Release Date</dt>
          <dd>{entry.dateFormatted}</dd>
          </>
        )}

        <dt>Credits</dt>
        <dd className="meta-sublist-group">
          <dl className="meta-sublist meta-sublist-aggregated">
          {entry.sortedCredits.map(credit => (
            <React.Fragment key={credit.type}>
              <dt>{credit.displayName}</dt>
              {credit.values.map(mediaCredit => (
                <dd key={mediaCredit.uid}>{mediaCredit.person.Link}</dd>
              ))}
            </React.Fragment>
          ))}
          </dl>
        </dd>

        {entry.mediaFields.map(field => (
          <React.Fragment key={field.name}>
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
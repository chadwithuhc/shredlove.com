/* global window */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import config from 'admin-config'

// Custom Widgets
import CreditsWidget from 'src/components/widgets/credits'
import SourceWidget from 'src/components/widgets/source'

const CMSComponent = dynamic(async () => {
  window.CMS_MANUAL_INIT = true
  const CMS = await import('netlify-cms-app')
  const cloudinary = await import('netlify-cms-media-library-cloudinary')

  CMS.registerMediaLibrary(cloudinary.default)

  CMS.registerWidget('credits', CreditsWidget.Control, CreditsWidget.Preview, CreditsWidget.schema)
  CMS.registerWidget('source', SourceWidget.Control, SourceWidget.Preview, SourceWidget.schema)

  CMS.init({ config })

  console.log('Netlify CMS init', config)
}, { ssr: false })

export default function Manager() {
  return (
    <div>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <CMSComponent />
    </div>
  )
}
/* global window */
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Custom Widgets
import CreditsWidget from 'src/components/widgets/credits'

const CMSComponent = dynamic(async () => {
  window.CMS_MANUAL_INIT = true
  const CMS = await import('netlify-cms-app')
  const cloudinary = await import('netlify-cms-media-library-cloudinary')

  CMS.registerMediaLibrary(cloudinary.default)

  CMS.registerWidget('credits', CreditsWidget.Control, CreditsWidget.Preview, CreditsWidget.schema)

  CMS.init()
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
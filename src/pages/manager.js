/* global window */
import Head from 'next/head'
// import CMS from 'netlify-cms-app'
import dynamic from 'next/dynamic'

const CMSComponent = dynamic(() =>
  import('netlify-cms-app').then((CMS) => {
    CMS.init()
  })
, { ssr: false })

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
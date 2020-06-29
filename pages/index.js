import Head from 'next/head'

export default function Home() {
  return (
    <main className="shredlove-v4">
      <Head>
        <title>shredlove.com / the archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="main-nav">
        <a href="/" className="logo-link folder-style">
          <img className="logo" src="/images/shredlove-logo.svg" />
          <span className="archives"><small>The</small> Archives</span>
        </a>
        <ul className="link-list">
          <li><a href="/timeline">Timeline</a></li>
          <li><a href="/photos">Photos</a></li>
          <li><a href="/photos">Videos</a></li>
          <li><a href="/photos">Articles</a></li>
          <li><a href="/crew">Crew</a></li>
        </ul>
      </nav>
    </main>
  )
}

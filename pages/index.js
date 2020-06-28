import Head from 'next/head'

export default function Home() {
  return (
    <main className="shredlove-v4">
      <Head>
        <title>shredlove.com / the archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="main-nav">
        <a href="/" className="logo-link">
          <img className="logo" src="/images/shredlove-logo.svg" />
        </a>
        <ul className="link-list">
          <li><a href="/photos">Photos</a></li>
          <li><a href="/photos">Videos</a></li>
          <li><a href="/photos">Articles</a></li>
          <li><a href="/photos">Crew</a></li>
        </ul>
      </nav>
    </main>
  )
}

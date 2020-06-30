import Link from 'next/link'

export default function MainNav() {
  return (
    <nav className="main-nav">
      <Link href="/">
        <a className="logo-link folder-style">
          <img className="logo" src="/images/shredlove-logo.svg" />
          <span className="archives"><small>The</small> Archives</span>
        </a>
      </Link>
      <ul className="link-list">
        <li><a href="/timeline">Timeline</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/videos">Videos</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/crew">Crew</a></li>
      </ul>
    </nav>
  )
}
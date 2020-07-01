import Link from 'next/link'
import MediaTypes from 'src/models/MediaTypes'

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
        {Object.values(MediaTypes).map(mediaType => (
          <li key={mediaType.label}><Link href={mediaType.url}><a>{mediaType.labelPlural}</a></Link></li>
        ))}
        <li><a href="/crew">Crew</a></li>
      </ul>
    </nav>
  )
}
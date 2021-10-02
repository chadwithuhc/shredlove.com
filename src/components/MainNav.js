import Link from 'next/link'
import MediaTypes from 'media-type-config'

export default function MainNav() {
  return (
    <nav className="main-nav no-underlined-links">
      <Link href="/">
        <a className="logo-link folder-style">
          <img className="logo" src="/images/shredlove-logo.svg" />
          <span className="archives"><small>The</small> Archives</span>
        </a>
      </Link>
      <ul className="link-list">
        <li><a href="/crew">Crew</a></li>
        <li><Link href="/timeline"><a>Timeline</a></Link></li>
        {Object.values(MediaTypes).map(mediaType => (
          <li key={mediaType.label}><Link href={mediaType.url}><a>{mediaType.labelPlural}</a></Link></li>
        ))}
      </ul>

      <div className="social-links">
        <span className="social-links-title">FOLLOW<br/>@shredlove</span>
        <ul className="social-links-icons">
          <li><a href="https://twitter.com/shredlove" target="_blank" rel="noopener nofollow"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://instagram.com/shredlove" target="_blank" rel="noopener nofollow"><i className="fa fa-instagram" /></a></li>
        </ul>
      </div>
    </nav>
  )
}
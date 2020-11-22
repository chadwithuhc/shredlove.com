import Head from 'next/head'
import Link from 'next/link'
import MainNav from './MainNav'

export default function Layout({ pageTitle = '', breadcrumbs = [], children }) {
  return (
    <main className="shredlove-v4">
      <Head>
        <title>{pageTitle ? pageTitle + ' // ' : '' }shredlove.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Head>

      <MainNav />

      <section className="content-container">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              {breadcrumbs.map((breadcrumb, i) => (
                i === breadcrumbs.length - 1 ?
                <li key={i} className="is-active"><Link href={breadcrumb.href}><a aria-current="page">{breadcrumb.label}</a></Link></li>
                : <li key={i}><Link href={breadcrumb.href}><a>{breadcrumb.label}</a></Link></li>
              ))}
            </ul>
          </nav>
        )}
        {children}
      </section>

      <footer className="main-footer">
        &copy; shredlove.com 2005 - now
      </footer>
    </main>
  )
}

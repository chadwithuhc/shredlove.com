import Head from 'next/head'
import Link from 'next/link'
import datastore from '../../stores/datastore'

export default function Crew() {
  const { people } = datastore

  return (
    <main className="shredlove-v4">
      <Head>
        <title>shredlove.com / crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {people.map(person => <li key={person.id}><Link {...person.linkProps}>{person.displayName}</Link></li>)}
    </main>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       people: datastore.raw.people
//     }
//   }
// }
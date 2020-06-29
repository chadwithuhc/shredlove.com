import Head from 'next/head'
import Link from 'next/link'
import datastore from '../../stores/datastore'

export default function Crew({ people }) {
  return (
    <main className="shredlove-v4">
      <Head>
        <title>shredlove.com / crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {people.map(person => <li key={person.id}><Link href="/crew/[person]" as={`/crew/${person.id}`}>{person.displayName}</Link></li>)}
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      people: datastore.people
    }
  }
}
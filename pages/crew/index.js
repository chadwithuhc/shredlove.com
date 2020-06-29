import Head from 'next/head'
import Link from 'next/link'
import datastore from '../../stores/datastore'
import PeopleModel from '../../stores/PeopleModel'

export default function Crew({ people }) {
  const superPeople = people.map(p => new PeopleModel(p))

  return (
    <main className="shredlove-v4">
      <Head>
        <title>shredlove.com / crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {superPeople.map(person => <li key={person.id}><Link {...person.linkProps}>{person.displayName}</Link></li>)}
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
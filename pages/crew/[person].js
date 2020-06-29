import Head from 'next/head'
import datastore from '../../stores/datastore'

export default function Person({ people, person }) {
  return (
    <main className="shredlove-v4">
      <Head>
        <title>{person.displayName} // shredlove.com / crew</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Crew: {person.displayName}</h1>
      <pre>{JSON.stringify(person, null, ' ')}</pre>
    </main>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      people: datastore.people,
      person: datastore.people.find(p => p.id === params.person)
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: datastore.people.map(person => ({
      params: { person: person.id }
    })),
    fallback: false
  }
}
import Head from 'next/head'
import datastore from '../../stores/datastore'

export default function Person({ personId }) {
  const { people } = datastore
  const person = people.find(p => p.id === personId)

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
      personId: params.personId,
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: datastore.raw.people.map(person => ({
      params: { personId: person.id }
    })),
    fallback: false
  }
}
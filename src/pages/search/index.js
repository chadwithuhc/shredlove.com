import { useState } from 'react'
import datastore from 'src/data/store'
import Layout from 'src/components/Layout'

function createSearchResults(data) {
  return [
    { title: "Crew", results: data.people || [] },
    { title: "Media", results: data.media || [] },
    // { title: "Credits", results: data.credits || [] },
  ]
}

export default function Search() {
  const { people, media, credits } = datastore
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState(createSearchResults({}))

  const updateSearchTerm = React.useCallback((e) => {
    const searchText = e.target.value.trim()
    setSearchTerm(searchText.toLowerCase())
  }, [])

  // filter results
  React.useEffect(() => {
    const matchingPeople = people.filter(p => (
      p.uid.toLowerCase().includes(searchTerm) || 
      p.displayName.toLowerCase().includes(searchTerm)
    ))
    const matchingMedia = media.filter(m => (
      m.slug.toLowerCase().includes(searchTerm) || 
      m.title.toLowerCase().includes(searchTerm) || false
      // m.description.toLowerCase().includes(searchTerm)
    ))
    const matchingCredits = credits.filter(c => (
      c.type.toLowerCase().includes(searchTerm)
    ))

    setSearchResults(createSearchResults({
      people: matchingPeople,
      media: matchingMedia,
      credits: matchingCredits,
    }))
  }, [people, media, credits, searchTerm])

  console.log("searchResults", searchResults)

  return (
    <Layout pageTitle="search">
      <h1 className="title">Search</h1>
      <p className="subtitle">dig through the crates</p>

      <input type="text" placeholder="type names, titles, etc." onChange={updateSearchTerm} className="search-input input is-large" autoFocus={true} />

      {searchTerm && searchResults.map(result => (
        <section key={[result.title, searchTerm].join('-')}>
          <dl className="meta-list">
            <dt>{result.title}</dt>
            <dd className="meta-sublist-group">
              {result.results.length > 0 ? (
                <dl className="meta-sublist">
                  {result.results.map((r, i) => <dd key={[r.uid || r.slug || r.type, searchTerm, i].join('-')}>{r.Link}</dd>)}
                </dl>
              ) : (
                <em className="info-text">No matches</em>
              )}
            </dd>
          </dl>
        </section>
      ))}
    </Layout>
  )
}
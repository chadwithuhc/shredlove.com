import React from 'react'

export default function Preview({ value }) {
  return (
    <section>
      <strong>Source:</strong>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </section>
  )
}
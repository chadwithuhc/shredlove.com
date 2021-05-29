import React from 'react'

export default function Preview({ value }) {
  const credits = value;
  const styles = {
    'display': 'grid',
    'gridTemplateColumns': 'auto 1fr',
    'justifyItems': 'left',
    'gap': '0.2rem'
  }

  return (
    <dl style={styles}>
      {credits.map((credit, i) => (
        <React.Fragment key={i}>
          <dt>{credit.type}</dt>
          <dd>{credit.person}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
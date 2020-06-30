import Link from 'next/link'
import datastore from './datastore'

class PeopleModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  id = null // string: 'cheddar'
  displayName = null // string: 'chadwithuhc'

  get media() { // get all their media through credits
    const creditIds = this.credits.map(c => c.id)
    return datastore.media.filter(m => m.credits.some(c => creditIds.includes(c.id)))
  }

  get credits() {
    return datastore.credits.filter(c => c.personId === this.id)
  }

  get Link() {
    return <Link {...this.linkProps}><a>{this.displayName}</a></Link>
  }

  get linkProps() {
    return {
      href: this.urlTemplate,
      as: this.url
    }
  }

  get urlTemplate() {
    return `/crew/[person]`
  }

  get url() {
    return `/crew/${this.id}`
  }
}

export default PeopleModel
import Link from 'next/link'
import datastore from 'src/data/store'
import CreditModel from './CreditModel'

class PeopleModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  uid = null // string: 'cheddar'
  displayName = null // string: 'chadwithuhc'

  get media() {
    return datastore.media.filter(m => m.credits?.some(c => c.person.uid === this.uid))
  }

  get credits() {
    return datastore.credits.filter(c => c.person.uid === this.uid).map(credit => new CreditModel(credit))
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
    return `/crew/${this.uid}`
  }
}

export default PeopleModel
import datastore from 'src/data/store'

class CreditModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  id = null // string: '1'
  type = null // string: 'photographer'

  get person() {
    return datastore.people.find(p => p.id === this.personId)
  }

  get linkProps() {
    return {
      href: this.urlTemplate,
      as: this.url
    }
  }

  get urlTemplate() {
    return `/credits/[creditType]`
  }

  get url() {
    return `/credits/${this.type}`
  }
}

export default CreditModel
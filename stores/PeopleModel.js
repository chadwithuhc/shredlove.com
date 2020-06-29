class PeopleModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  id = null // string: 'cheddar'
  displayName = null // string: 'chadwithuhc'

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
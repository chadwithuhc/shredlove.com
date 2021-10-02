import Link from 'next/link'
import datastore from 'src/data/store'
import CreditModel from './CreditModel'
import { sortBy, groupBy, pick } from 'lodash'

class PeopleModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  uid = null // string: 'chad'
  displayName = null // string: 'chadwithuhc'

  get media() {
    return datastore.media.filter(m => m.credits?.some(c => c.person.uid === this.uid))
  }

  get mediaWithCredits() {
    return this.media.map(media => {
      const credits = media.credits.filter(c => c.person.uid === this.uid)
      const creditsLabel = sortBy(credits, "displayName").map(c => c.displayName).join(", ")
      return ({
        media,
        credits,
        creditsLabel
      })
    })
  }

  get credits() {
    return datastore.credits.filter(c => c.person.uid === this.uid).map(credit => new CreditModel(credit))
  }

  /**
   * array = [
   *   { type: credit.type, displayName: credit.displayName, values: credits }
   * ]
   */
  get sortedCredits() {
    const groupedCredits = groupBy(this.credits, "displayName")
    return sortBy(Object.keys(groupedCredits).map(displayName => ({
      ...pick(groupedCredits[displayName][0], ["type","displayName"]),
      values: groupedCredits[displayName]
    })), "displayName")
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
// import datastore from 'src/data/store'
import people from 'public/data/people'
import PeopleModel from './PeopleModel'

class CreditModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  type = null // string: 'photographer'
  // person = null // string: 'don' -> people.uid
  // media = null // obj: MediaModel

  get uid() {
    return `${this.type}-${this.person.uid}-${this.media?.slug}`
  }

  get person() {
    return this._person
  }

  set person(personUid) {
    this._person = new PeopleModel(people.find(p => p.uid === personUid))
  }

  get media() {
    return this._media
  }

  set media(media) {
    this._media = media
  }

}

export default CreditModel
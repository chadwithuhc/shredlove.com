// import fs from 'fs'
// import path from 'path'
// import peopleDecorator from './peopleDecorator'
import fetch from 'node-fetch'
import PeopleModel from 'src/models/PeopleModel'
import MediaModel from 'src/models/MediaModel'
import CreditModel from 'src/models/CreditModel'

import people from 'public/data/people.json'
import media from 'public/data/media.json'
// import credits from './credits.json'
const credits = media.reduce((creds, item) => {
  return creds.concat(...(item.credits || []).map(credit => new CreditModel({ ...credit, media: new MediaModel(item) })))
}, [])
// console.log('credits', credits)

const DataModels = {
  people: PeopleModel,
  media: MediaModel,
  credits: CreditModel
}

export default {

  // TODO: not connected
  async fetch() {
    if (this.loaded) {
      console.log('data cache loaded')
      return this.data
    }

    const url = `${process.env.NODE_CLIENT_URL || ''}/api/data`
    console.log('fetching url:', url)
    const resp = await fetch(url)
    const data = await resp.json()
    console.log('data', data)
    this.data = data
    this.loaded = true

    // hack
    this.raw = {
      ...this.raw,
      ...data
    }

    Object.keys(this.raw).map(model => {
      this[model] = this.raw[model].map(item => new DataModels[model](item))
    })
  },

  // raw data is JSON serializable
  raw: {
    people,
    media,
    credits
  },

  // model populated versions
  people: people.map(p => new PeopleModel(p)),
  media: media.map(p => new MediaModel(p)),
  credits: credits.map(p => new CreditModel(p))
}
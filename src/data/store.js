// import fs from 'fs'
// import path from 'path'
// import peopleDecorator from './peopleDecorator'
import fetch from 'node-fetch'
import PeopleModel from 'src/models/PeopleModel'
import MediaModel from 'src/models/MediaModel'
import CreditModel from 'src/models/CreditModel'

import people from './people.json'
import media from './media.json'
import credits from './credits.json'

const DataModels = {
  people: PeopleModel,
  media: MediaModel,
  credits: CreditModel
}

export default {

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




// Pulls data from each file

// export async function getStore(name) {
//   const postsDirectory = path.join(process.cwd(), name)
//   const filenames = fs.readdirSync(postsDirectory)

//   const posts = filenames.map((filename) => {
//     const filePath = path.join(postsDirectory, filename)
//     const fileContents = fs.readFileSync(filePath, 'utf8')

//     // Generally you would parse/transform the contents
//     // For example you can transform markdown to HTML here

//     return {
//       filename,
//       content: fileContents,
//     }
//   })
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }
// import fs from 'fs'
// import path from 'path'
// import peopleDecorator from './peopleDecorator'
import PeopleModel from 'src/models/PeopleModel'
import MediaModel from 'src/models/MediaModel'
import CreditModel from 'src/models/CreditModel'

import people from './people.json'
import media from './media.json'
import credits from './credits.json'

export default {

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
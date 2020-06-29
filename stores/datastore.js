import fs from 'fs'
import path from 'path'
import peopleDecorator from './peopleDecorator'

import people from '../data/people.json'

export default {
  people//: people.map(peopleDecorator)
}

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
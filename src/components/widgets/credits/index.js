import Control from './CreditsControl'
import Preview from './CreditsPreview'
//import './credits.css'

// if (typeof window !== 'undefined') {
//   window.Control = Control
//   window.Preview = Preview
// }

// a JSON Schema to validate field config
const schema = {
  // properties: {
  //   separator: { type: 'string' },
  // },
}

export default { Control, Preview, schema }
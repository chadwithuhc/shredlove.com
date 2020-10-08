import Control from './CreditsControl'
import Preview from './CreditsPreview'
//import './credits.css'

// if (typeof window !== 'undefined') {
//   window.Control = Control
//   window.Preview = Preview
// }

const schema = {
  properties: {
    separator: { type: 'string' },
  },
}

export default { Control, Preview, schema }
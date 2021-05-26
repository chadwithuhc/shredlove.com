import Control from './SourceControl'
import Preview from './SourcePreview'
//import './source.css'

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
// models with computed props
import PeopleModel from 'src/models/PeopleModel'
import MediaModel from 'src/models/MediaModel'
import CreditModel from 'src/models/CreditModel'
// raw data
import people from 'public/data/people.json'
import media from 'public/data/media.json'
import credit from 'public/data/credit.json'
const credits = media.reduce((creds, item) => {
  return creds.concat(...(item.credits || []).map(credit => new CreditModel({ ...credit, media: new MediaModel(item) })))
}, [])

export default {

  // raw data is JSON serializable
  raw: {
    people,
    media,
    // credit are the options for credit field
    credit,
    // credits are the loaded relation version
    credits
  },

  // model populated versions
  people: people.map(p => new PeopleModel(p)),
  media: media.map(p => new MediaModel(p)),
  credits: credits.map(p => new CreditModel(p))
}
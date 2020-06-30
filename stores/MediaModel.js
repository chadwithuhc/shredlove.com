import Link from 'next/link'
import datastore from './datastore'

const MediaTypes = {
  photo: { label: 'Photo', labelPlural: 'Photos', url: '/photos' },
  video: { label: 'Video', labelPlural: 'Videos', url: '/videos' },
  article: { label: 'Article', labelPlural: 'Articles', url: '/articles' },
}

class MediaModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  id = null // string: '1'
  date = null // timestamp: 123456789
  type = null // enum: ['photo','video']
  config = {} // object: { ..anyData }
  title = null // string: 'Working Title'
  description = null // string: 'Text Description'
  creditIds = [] // array: ['1', '2']

  get mediaType() {
    return MediaTypes[this.type]
  }

  get titleFull() {
    return `${this.mediaType.label}: ${this.title}`
  }

  get credits() {
    return datastore.credits.filter(c => this.creditIds.includes(c.id))
  }

  get Link() {
    return <Link {...this.linkProps}><a>{this.title}</a></Link>
  }

  get linkProps() {
    return {
      href: this.urlTemplate,
      as: this.url
    }
  }

  get urlTemplate() {
    return `/media/[mediaId]`
  }

  get url() {
    return `/media/${this.id}`
  }
}

export default MediaModel
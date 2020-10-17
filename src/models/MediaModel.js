import Link from 'next/link'
// import datastore from 'src/data/store'
import MediaTypes from './MediaTypes'
import CreditModel from './CreditModel'

class MediaModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  // database props
  slug = null // string: 'video-name'
  date = null // timestamp: 123456789
  type = null // enum: ['photo','video'] matching MediaTypes
  config = {} // object: { ..anyData }
  title = null // string: 'Working Title'
  description = null // string: 'Text Description'
  //credits = [] // array: [ { type, person } ]

  get mediaType() {
    return MediaTypes[this.type]
  }

  // additional data fields provided by `config.fields[]`
  get mediaFields() {
    return this.mediaType.fields?.map(field => {
      if (this.config?.fields?.hasOwnProperty(field.prop)) {
        return {
          prop: field.prop,
          label: field.label,
          value: renderMediaField(this, field, this.config.fields[field.prop])
        }
      }
    }).filter(Boolean) || []
  }

  get titleFull() {
    return `${this.mediaType.label}: ${this.title}`
  }

  get credits() {
    return this._credits
  }

  set credits(credits) {
    this._credits = credits.map(credit => new CreditModel(credit))
  }

  get Link() {
    return <Link {...this.linkProps}><a>{this.title}</a></Link>
  }

  get Media() {
    return renderMediaType(this.type, this.config)
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
    return `/media/${this.slug}`
  }
}

function renderMediaType(type, config) {
  if (type === 'video') {
    if (config.sourceType === 'vimeo') {
      return <iframe src={`https://player.vimeo.com/video/${config.vimeoId}`} width="640" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
    }

    if (config.sourceType === 'youtube') {
      return <iframe width="640" height="480" src={`https://www.youtube.com/embed/${config.youtubeId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    }
    if (config.sourceType === 'youtubePlaylist') {
      return <iframe width="640" height="480" src={`https://www.youtube.com/embed/videoseries?list=${config.youtubeId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    }
  }

  if (type === 'photo') {
    if (config.sourceType === 'url') {
      return <img src={config.url} />
    }
  }

  return <em className="info-text">Could not load media player for {type}.{config.sourceType}</em>
}

function renderMediaField(media, field, value) {
  if (field.renderAs === 'text') {
    return value
  }

  if (field.renderAs === 'link') {
    return <a href={value} rel="noopener noreferer" target="_blank">{value}</a>
  }

  if (field.renderAs === 'vimeo') {
    return <>
      <a href={`https://vimeo.com/${value}`} rel="noopener noreferer" target="_blank" title={`Watch "${media.title}" on Vimeo`}>Watch on Vimeo</a>
      <details>
        <summary title={`Watch "${media.title}" here`}>Watch here</summary>
        <iframe src={`https://player.vimeo.com/video/${value}`} width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </details>
    </>
  }

  // just plain text
  return value
}

export default MediaModel
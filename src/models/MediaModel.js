import Link from 'next/link'
import MediaTypes from 'media-type-config'
import CreditModel from './CreditModel'

class MediaModel {

  constructor(props) {
    Object.assign(this, props)
    return this
  }

  // database props
  slug = null // string: 'video-name'
  date = null // timestamp: 123456789
  source = {
    mediaType: 'unknown'
    // mediaType: photo | video | article
    // type: vimeoVideo | vimeoPlaylist ...
    // parameters: object { ... key/values }
  }
  title = null // string: 'Working Title'
  description = null // string: 'Text Description'
  //credits = [] // array: [ { type, person } ]

  get mediaType() {
    return MediaTypes[this.source.mediaType]
  }

  get mediaSource() {
    return this.mediaType.sources.find(source => source.type === this.source.type)
  }

  // additional data fields provided by `source.fields[]`
  get mediaFields() {
    return this.mediaSource?.fields?.map(field => {
      if (this.source?.parameters?.hasOwnProperty(field.prop)) {
        return {
          prop: field.prop,
          label: field.label,
          value: renderMediaField(this, field, this.source.parameters[field.prop])
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
    return renderMediaType(this.source)
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

function renderMediaType(source) {
  const { mediaType } = source

  if (mediaType === 'video') {
    if (source.type === 'vimeoVideo') {
      return <iframe src={`https://player.vimeo.com/video/${source.parameters.vimeoId}`} width="640" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
    }

    if (source.type === 'youtubeVideo') {
      return <iframe width="640" height="480" src={`https://www.youtube.com/embed/${source.parameters.youtubeId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    }
    if (source.type === 'youtubePlaylist') {
      return <iframe width="640" height="480" src={`https://www.youtube.com/embed/videoseries?list=${source.parameters.youtubeId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    }
  }

  if (mediaType === 'photo') {
    if (source.type === 'url') {
      return <img src={source.parameters.url} />
    }
  }

  return <em className="info-text">Could not load media player for source {mediaType}.{source.type}</em>
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
        <iframe src={`https://player.vimeo.com/video/${value}`} width="640" height="480" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </details>
    </>
  }

  // just plain text
  return value
}

export default MediaModel
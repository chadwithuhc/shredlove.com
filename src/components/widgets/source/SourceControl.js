import React, { useState } from 'react'
import MediaTypes from 'media-type-config'

const defaultValue = {} || {
  "mediaType": "video",
  "type": "vimeoVideo",
  "parameters": {
    "vimeoId": "11661446",
    "length": "4:13"
  }
}

export default function Control({ forID, classNameWrapper, value, onChange }) {
  const getMediaType = (name) => {
    return MediaTypes[name] || null
  }
  const getMediaSource = (name) => {
    return mediaType && mediaType.sources.find(s => s.type === name) || null
  }

  const sourceValue = JSON.parse(JSON.stringify(value || defaultValue));
  const [mediaType, setMediaType] = useState(getMediaType(sourceValue.mediaType));
  const [mediaSource, setMediaSource] = useState(getMediaSource(sourceValue.type));

  const onInputChange = () => {
    const formData = new FormData(document.getElementById('source-form'))

    const value = {
      mediaType: mediaType.mediaType,
      type: mediaSource.type,
      parameters: mediaSource.fields.reduce((params, field) => ({
        ...params,
        [field.name]: formData.get(field.name)
      }), {})
    }
    console.log('value', value)
    onChange(value)
  }

  const onMediaTypeChange = (e) => {
    const mediaType = e.target.options[e.target.selectedIndex].value

    const MediaType = getMediaType(mediaType)

    if (!MediaType) {
      return
    }

    setMediaType({
      ...MediaType,
      mediaType,
    })
  }

  const onMediaSourceChange = (e) => {
    const mediaSource = e.target.options[e.target.selectedIndex].value

    const MediaSource = getMediaSource(mediaSource)

    if (!MediaSource) {
      return
    }

    setMediaSource(MediaSource)
  }

  return (
    <div
      id={forID}
      className={classNameWrapper}
    >
      <div className="source-inputs">
        {/* step 1: pick a media type (photo, video, article) */}
        <fieldset>
          <label>Media Type:</label>
          <select onChange={onMediaTypeChange} defaultValue={sourceValue.mediaType}>
            <option></option>
            {Object.entries(MediaTypes).map(([mediaType, mediaTypeInfo]) => {
              return (
                <option value={mediaType}>
                  {mediaTypeInfo.label}
                </option>
              )
            })}
          </select>
        </fieldset>
        {/* step 2: pick a media source (vimeoVideo, vimeoPlaylist) */}
        {mediaType && (
          <fieldset>
            <label>Source Type:</label>
            <select onChange={onMediaSourceChange} defaultValue={sourceValue.type}>
              <option></option>
              {mediaType.sources.map((source) => {
                return (
                  <option value={source.type}>
                    {source.label}
                  </option>
                )
              })}
            </select>
          </fieldset>
        )}
        {/* step 3: fill out the fields */}
        {mediaSource && (
          <form id="source-form">
            {mediaSource.fields.map(field => {
              return (
                <fieldset>
                  <label>{field.label}</label>
                  <input type="text" name={field.name} onChange={onInputChange} defaultValue={sourceValue.parameters?.[field.name]} />
                </fieldset>
              )
            })}
          </form>
        )}
      </div>
    </div>
  )
}
// powers main nav links and labels sitewide
const MediaTypes = {
  photo: {
    label: 'Photo', labelPlural: 'Photos', url: '/photos', fields: [
      { label: '' }
    ]
  },
  video: {
    label: 'Video', labelPlural: 'Videos', url: '/videos', fields: [
      { label: 'Playlist', prop: 'playlistUrl', renderAs: 'link' },
      { label: 'Length', prop: 'length', renderAs: 'text' },
      // { label: 'Vimeo', prop: 'vimeoId', renderAs: 'vimeo' },
      // { label: 'Youtube', prop: 'youtubeId', renderAs: 'youtube' }
    ]
  },
  // article: { label: 'Article', labelPlural: 'Articles', url: '/articles' },
}

export default MediaTypes
// powers main nav links, labels sitewide, and admin form fields
module.exports = {
  // photo: {
  //   label: 'Photo', labelPlural: 'Photos', url: '/photos', fields: [
  //     { label: '' }
  //   ]
  // },
  video: {
    label: 'Video', labelPlural: 'Videos', url: '/videos',
    sources: [
      {
        label: 'Vimeo Video',
        type: 'vimeoVideo',
        fields: [
          { label: 'Vimeo ID', name: 'vimeoId', renderAs: 'vimeo' },
          { label: 'Length', name: 'length', renderAs: 'text' },
        ]
      },
      {
        label: 'Vimeo Playlist',
        type: 'vimeoPlaylist',
        fields: [
          { label: 'Playlist URL', name: 'playlistUrl', renderAs: 'link' },
          { label: 'Length', name: 'length', renderAs: 'text' },
        ]
      },
      {
        label: 'YouTube Video',
        type: 'youtubeVideo',
        fields: [
          { label: 'YouTube ID', name: 'youtubeId', renderAs: 'youtube' },
          { label: 'Length', name: 'length', renderAs: 'text' },
        ]
      },
      {
        label: 'YouTube Playlist',
        type: 'youtubePlaylist',
        fields: [
          { label: 'Playlist URL', name: 'playlistUrl', renderAs: 'link' },
          { label: 'Length', name: 'length', renderAs: 'text' },
        ]
      }
    ],
  },
  // article: { label: 'Article', labelPlural: 'Articles', url: '/articles' },
}
const MediaTypes = require('./media-type-config')
const isLocalhost = typeof window !== 'undefined' && window.location.host === 'localhost:3000'

module.exports = {
  backend: isLocalhost
    ? { name: 'test-repo' }
    : {
        name: 'git-gateway',
        branch: 'master',
      },
  load_config_file: false,
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: 'cheddar',
      api_key: 585212835591167,
    },
  },
  collections: [
    {
      name: 'credit',
      label: 'Credit',
      folder: 'public/data/credit',
      extension: 'json',
      create: true,
      slug: '{{uid}}',
      identifier_field: 'uid',
      sort_by: 'displayName',
      fields: [
        { label: 'ID', name: 'uid', widget: 'string' },
        { label: 'Display Name', name: 'displayName', widget: 'string' },
      ],
    },
    {
      name: 'people',
      label: 'People',
      folder: 'public/data/people',
      extension: 'json',
      create: true,
      slug: '{{uid}}',
      identifier_field: 'uid',
      sort_by: 'displayName',
      fields: [
        { label: 'ID', name: 'uid', widget: 'string' },
        { label: 'Display Name', name: 'displayName', widget: 'string' },
      ],
    },
    {
      name: 'media',
      label: 'Media',
      folder: 'public/data/media',
      extension: 'json',
      create: true,
      slug: '{{fields.slug}}',
      identifier_field: 'slug',
      sort_by: 'date',
      fields: [
        { label: 'Credits', name: 'credits', widget: 'credits' },
        { label: 'Source', name: 'source', widget: 'source' },
        { label: 'Slug', name: 'slug', widget: 'string' },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Date', name: 'date', widget: 'datetime' },
        { label: 'Show In Timeline', name: 'showInTimeline', widget: 'boolean' },
        // { label: 'Credits', name: 'credits', widget: 'credits' },
        // { label: 'Featured Image', name: 'thumbnail', widget: 'image', required: false }
      ],
    }
  ],
}
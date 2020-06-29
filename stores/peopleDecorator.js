const props = [
  'id',
  'displayName',
]

const computedProps = [
  { prop: 'urlTemplate', fn: () => `/crew/[person]` },
  { prop: 'url', fn: (props) => `/crew/${props.id}` },
  { prop: 'linkProps', fn: (props) => ({ href: props.urlTemplate, as: props.url }) },
]

export default function peopleDecorator(initialData = {}) {
  const data = {}

  // copy over initial data
  props.map(prop => data[prop] = initialData[prop])
  // now assign our computed props
  // they must be in order of dependency
  computedProps.map(computed => data[computed.prop] = computed.fn(data))

  return data
}
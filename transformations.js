const remark = require('remark')
const html = require('remark-html')

module.exports = {
  transform: async (data) => {
    if (data.body) {
      data.bodyHtml = (await remark().use(html).process(data.body)).toString()
    }
    if (data.date) {
      data.dateFormatted = (new Date(data.date)).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
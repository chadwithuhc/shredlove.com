const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const fetch = require('node-fetch');

const app = feathers();

// Connect to a different URL
const restClient = rest(process.env.REST_CLIENT_URL || 'http://localhost:3030') // http://feathers-api.com

// Configure an AJAX library (see below) with that client 
app.configure(restClient.fetch(fetch));

// Connect to the `http://feathers-api.com/messages` service
const people = app.service('people');
// const media = app.service('media');
const credits = app.service('credits');

export default async (req, res) => {
  const data = await Promise.all([
    people.find(),
    Promise.resolve(),// media.find(),
    credits.find()
  ]).then(result => ({
    people: result[0].data,
    // media: result[1].data,
    credits: result[2].data
  }))

  res.statusCode = 200
  res.json(data)
}
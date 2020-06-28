const request = require('request')

const forecast = (latitute, longitute, callback) => {
  const url =
    'https://api.darksky.net/forecast/a811bd53978f8e4177bfad4e5ff21c2f/' +
    latitute +
    ',' +
    longitute

  request({ url, json: true }, (error, { body }) => {
    if (error)
      return callback('Unable to connect to weather service!', undefined)
    if (body.error) return callback('Unable to find location', undefined)
    return callback(
      undefined,
      body.daily.data[0].summary +
        ' It is currently ' +
        body.currently.temperature +
        ' degree out. This high today is ' +
        body.daily.data[0].temperatureHigh +
        ' with a low of ' +
        body.daily.data[0].temperatureLow +
        '. There is a ' +
        body.currently.precipProbability +
        '% chance of rain.'
    )
  })
}

module.exports = forecast

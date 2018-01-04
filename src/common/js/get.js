import jsonp from 'jsonp'
export const getData = function (url) {
  return new Promise((resolve, reject) => {
    jsonp(url, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

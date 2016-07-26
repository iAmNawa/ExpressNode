const h = require('hyperscript')
const http = require('http')
const title = 'My first hyperscript document'
const nawa = require('./nawa.js')

var li = function(item) {
  return h('li', item)
}

var indexHtml = h('html', { lang: 'en'}, [
  h('head', [
    h('title', title),
    h('style', '.title { color: green;}')
  ]),
  h('body', [
    h('header', [
      h('h1.title', title)
    ]),
    h('ul', ['one', 'two', 'three'].map(li)),
    nawa()
  ])
])

http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(indexHtml.outerHTML)
}).listen(3000)
console.log('running on 3000')

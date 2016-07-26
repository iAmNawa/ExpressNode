const h = require('hyperscript')
const http = require('http')
const title = 'My first hyperscript document'

var indexHtml = h('html', { lang: 'en'}, [
  h('head', [
    h('title', title)
  ]),
  h('body', [
    h('header', [
      h('h1', title)
    ])
  ])
])

http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(indexHtml.outerHTML)
}).listen(3000)
console.log('running on 3000')

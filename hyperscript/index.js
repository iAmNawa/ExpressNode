const h = require('hyperscript')
const http = require('http')

var indexHtml = h('html', { lang: 'en'}, [
  h('head', [
    h('title', 'Hyperscript test')
  ]),
  h('body', [
    h('header', [
      h('h1', 'Hello World')
    ])
  ])
])

http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(indexHtml.outerHTML)
}).listen(3000)
console.log('running on 3000')

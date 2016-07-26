const h = require('hyperscript');


var indexHtml = h('html', { lang: 'en'}, [
  h('head', [
    h('title', 'Hyperscript test')
  ]),
  h('body', [
    h('header', [
      h('h1', 'Hello World')
    ])
  ])
]);

console.log(indexHtml.outerHTML);

const http = require('http')
const port = 8080

var username= 'paul',
 password = 'paul',
 realm = 'Express Node'

http.createServer(function (req, res) {
  var auth, login

  if (!req.headers.authorization) {
    authenticate(res)
    return
  }

  auth = req.headers.authorization.replace(/^Basic /, '')
  auth = (new Buffer(auth, 'base64').toString('utf8'))

  login = auth.split(':')

  if (login[0] === username && login[1] === password) {
    res.end('Authenticated!')
    return
  }

  authenticate(res)

}).listen(port)
console.log('the server is running on port', port)

function authenticate(res) {
  res.writeHead(401,
    {'WWW-Authenticate' : 'Basic realm="' + realm + '"'})
  res.end('authorization required')
}

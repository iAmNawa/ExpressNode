const http = require('http')

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

}).listen(8080)

function authenticate(res) {
  res.writeHead(401,
    {'WWW-Authenticate' : 'Basic realm="' + realm + '"'})
  res.end('authorization required')
}

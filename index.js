require('dotenv').config();
const app = require('express')()
const port = process.env.PORT ?? 8000

app.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send('User-agent: *\nDisallow: /')
})

app.get('/', (req, res) => {
  res.send(
    `Hello World!<br>This is the landing page of ${process.env.INFRA} infrastructure.<br>` +
    'If you see this message, the server is up.'
  )
})

app.listen(port, () => console.log(`Open in port ${port}`))

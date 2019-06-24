const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

 


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/list', function(req, res) {



   res.render('pages/list')
  })
  .get('/create', (req, res) => res.render('pages/create'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

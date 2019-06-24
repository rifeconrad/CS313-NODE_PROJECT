const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
 


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: false }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/list', function(req, res) {
   console.log(req.body);

   res.render('pages/list')
  })
  .get('/create', (req, res) => res.render('pages/create'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
 
var Pool = require('pg-pool')
const connectionString = process.env.DATABASE_URL || 'postgres://yironekfbpmahc:ae09277254f5e43817b7b8672dd253d2221aad218a26e7191c741da11d15de70@ec2-174-129-242-183.compute-1.amazonaws.com:5432/deilk6ur1bg4m5?ssl=true'
const pool = new Pool({connectionString: connectionString});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: false }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/list', function(req, res) {
   const uname = req.body.uname;
   const pwrd = req.body.pwrd;

	var sql = "SELECT * FROM USERS";

	pool.query(sql, function(err, result) {
	    // If an error occurred...
	    if (err) {
	        console.log("Error in query: ")
	        console.log(err);
	    }

	    // Log this to the console for debugging purposes.
	    console.log("Back from DB with result:");
	    console.log(result.rows);
	});  


   res.render('pages/list')
  })
  .get('/create', (req, res) => res.render('pages/create'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

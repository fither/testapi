const app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
	res.json({
		firstname: 'BESTCLOUDFORME',
		lastname: 'BESTCLOUDFORME'
	})
})

app.get('/whoami', (req, res) => {
	res.json({
		firstname: (req.query.firstname) ? req.query.firstname : null,
		lastname: (req.query.lastname) ? req.query.lastname : null,
	})
})

app.post('/whoami', (req, res) => {
	res.json({
		firstname: (req.body.firstname) ? req.body.firstname : null,
		lastname: (req.body.lastname) ? req.body.lastname : null,
	})
})

app.listen(80)

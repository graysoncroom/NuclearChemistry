const bodyParser = require('body-parser'),
         express = require('express'),
             app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const pageArray = ['types', 'bibliography', 'materials', 'about'];

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/:page', (req, res) => {

	var pageRequest  = req.params.page.toLowerCase(),
	    validRequest = false;

	pageArray.forEach(e => {
		if(e === pageRequest) {
			validRequest = true;
		}
	});
	
	res.render(validRequest ? pageRequest : 'error');
});


app.listen(8080, 'localhost', () => {
	console.log('The server has started on ' + 'localhost' + ':' + 8080);
});

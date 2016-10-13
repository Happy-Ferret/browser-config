var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');


var app = express();

app.set('port', (process.env.PORT || 7770));

app.use(express.static('dist'));
app.use(favicon(__dirname + '/dist/images/favicon.ico'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

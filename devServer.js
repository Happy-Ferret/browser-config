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


app.listen(app.get('port'), 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at ' + app.get('port'));
});

var app;
module.exports = app = require('./app').createServer();

app.listen(app.get('port'), function() {

  if (app.settings.env !== 'test') {
    console.log('Accepting incoming requests: ' + app.settings.env);
  }
});

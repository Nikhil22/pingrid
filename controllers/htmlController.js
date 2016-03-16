module.exports = function(app, dir) {
  app.get('/', function(req, res) {
      res.sendFile(dir + '/public/views/index.html');
  });
}

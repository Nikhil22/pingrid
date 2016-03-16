var data = require('../data');

module.exports = function(app, dir) {

  app.get('/data', function(req, res) {
      var dataArray = data.data['data'];
      res.send(dataArray);
  });

}

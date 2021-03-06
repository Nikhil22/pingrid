var Fetch = require('whatwg-fetch');
var baseUrl = 'http://pingrid.herokuapp.com';

var service = {
    get: function(endpoint) {
        return fetch(baseUrl + endpoint)
        .then(function(response) {
            return response.json();
        });
    }
};

module.exports = service;

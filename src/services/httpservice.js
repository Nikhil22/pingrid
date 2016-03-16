var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8000';

var service = {
    get: function(endpoint) {
        return fetch(baseUrl + endpoint)
        .then(function(response) {
            return response.json();
        });
    }
};

module.exports = service;

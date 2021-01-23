'use strict';

module.exports = {
  queryString: queryString
};

var qs = require('querystring');
var url = require('url');
var debug = require('debug')('swagger');

// side-effect: stores in query property on req
function queryString(req) {
  if (!req.query) {
    var _url = url.parse(req.url);
    req.query = (_url.query) ? qs.parse(_url.query) : {};
  }
  return req.query;
}

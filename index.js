/*
 * hooks
 * Copyright(c) 2015 James Garner
 * MIT Licensed
*/

var request = require('request');

module.exports = {

  hook: function(options, callback) {

    if (!options) {
      if (callback) callback("No options were provided");
      return;
    }

    if (
      !options.hasOwnProperty("apiKey") ||
      !options.hasOwnProperty("title") ||
      !options.hasOwnProperty("message")
    ) {
      if (callback) callback("Options must contain keys 'apiKey', 'title' and 'message'");
      return;
    }

    request.post(
      {
        url: "http://hooks.events/hooks/post.php",
        form: {
          "hooksApi": options.apiKey,
          "hooksTitle": options.title,
          "hooksMessage": options.message
        }
      },
      function(err, response, body) {
        if (response && response.hasOwnProperty("statusCode") && response.statusCode != 200) {
          if (callback) callback("Server didn't return HTTP OK status");
          return;
        }
        if (err) {
          if (callback) callback(err);
          return;
        }
        if (callback) callback(null, body);
      }
    );

  }

}
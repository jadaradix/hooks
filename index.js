"use strict";

const request = require("request");

const hook = (options, callback) => {

  const url = "http://hooks.events/hooks/post.php";

  if (!callback) callback = (err, response) => {  };
  if (!options) {
    return callback("No options were provided");
  }

  if (
    !options.hasOwnProperty("apiKey") ||
    !options.hasOwnProperty("title") ||
    !options.hasOwnProperty("message")
  ) {
    return callback("Options must contain keys 'apiKey', 'title' and 'message'");
  }

  return request.post(
    {
      "url": url,
      "form": {
        "hooksApi": options.apiKey,
        "hooksTitle": options.title,
        "hooksMessage": options.message
      }
    },
    (err, response, body) => {
      if (err) return callback(err);
      if (body === "not found") {
        return callback("Body was 'not found'");
      }
      if (response.hasOwnProperty("statusCode") && response.statusCode != 200) {
        return callback("Server didn't return HTTP OK status");
      }
      return callback(null, body);
    }
  );

};

module.exports = {
  hook
};
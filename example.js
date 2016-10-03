"use strict";

const hooks = require("./index.js");

hooks.hook(
  {
    "apiKey": "...",
    "title": "Example Hook Title",
    "message": "Example Hook Message"
  },
  (err, response) => {
    if (err) {
      return console.log("Failure (%s)", err);
    }
    return console.log("Success (%s)", response);
  }
);
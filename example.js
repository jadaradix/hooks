var hooks = require("./index.js");

hooks.hook(
  {
    "apiKey": "...",
    "title": "Example Hook Title",
    "message": "Example Hook Message"
  },
  function(err, response) {
    if (!err) {
      console.log("Success (" + response + ")");
    } else {
      console.log("Failure (" + err + ")");
    }
  }
);
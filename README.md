hooks
=========================================

Wrapper for http://hooks.events/

Install
-------
This code isn't on NPM, so you'll need to store it locally. You can do that via `git clone`. Now you just need to `require` it:

    var hooks = require("./hooks");

Try now
-------
An example, `example.js` is included to get you going. All you need to do is fill in your API key. Run it like this:

	node example.js

This example includes `./index.js` where the code resides - see "Install" above for how you should do it in external projects.

Use
---
The module contains just one method, `hook`. It takes some `options` and an optional `callback` function, which returns the standard `err, response` arguments. It's as easy as this:

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

Be sure to fill in your API key!
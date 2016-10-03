hooks
=========================================

Wrapper for http://hooks.events/

Install
-------

	npm install jadaradix/hooks --save
	
And then `require` it like this:

	const hooks = require("hooks");

Easy!

If you want it store it locally (e.g. via `git clone`), `require` it like this:

    const hooks = require("./hooks");

Try now
-------
An example, `example.js` is included to get you going. All you need to do is fill in your API key. Run it like this:

	node example.js

This example includes `./index.js` which contains the code.

Use
---
The module exposes just one method, `hook`. It takes some `options` and an optional `callback` function, which returns the standard node.js `err, response` arguments. It's as easy as this:

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

Be sure to fill in your API key.
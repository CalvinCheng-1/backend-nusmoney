// import the express 
	const express = require("express");
	const mathrouter = require("./math");
	const userrouter = require("./user");    

    let server = express();
    server.use(express.json());
    server.use(mathrouter.router);
    server.use(userrouter.router);

	server.listen(3000, (errors) => {
        if (errors) {
            console.log ("Could not start the server. Error: " + errors)
        } else {
            console.log ("Server start at port 3000");
        }
    });

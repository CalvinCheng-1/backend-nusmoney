const express = require("express");
let server = express();
let router = express.Router();

router.get("/", (request, resp) => {

resp.send('Hello');
});

router.get("/sum", (request, response) => {
    let n1 = parseInt(request.query.n1);
    let n2 = parseInt(request.query.n2);

    let sum = n1 + n2;

    response.send('Sum is : ' + sum);
    });

router.get("/minus", (request, response) => {
    let n1 = parseInt(request.query.n1);
    let n2 = parseInt(request.query.n2);

    let sum = n1 - n2;

    response.send('Minus is : ' + sum);
    });

router.get("/multiple", (req, response) => {
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);

    let sum = n1 * n2;

    response.send('Multiple is : ' + sum);
    });


    router.post("/add-new-user", (request, response) => {
        let first_name = request.body.fname;
        let last_name = request.body.lname;
        let age = request.body.age;
        let email = request.body.email;
        let userid = request.body.userid;
        let phone = request.body.phone;
      
        response.send(`Hello, ${first_name} ${last_name} ${age} ${phone} ${email} ${userid}`);
      });


module.exports = { router };
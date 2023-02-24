const express = require("express");
const db = require("./database");
const mockdb = require("./mock_data");

let router = express.Router();

router.get("/users/get-all", (request, response) => {
    let users = mockdb.get_all_users();
    response.send(users);
  });
  
  router.get("/users/get-by-userid", (request, response) => {
    let user = mockdb.get_user_by_user_id(request.query.user_id);
    response.send(user);
  });

  router.post("/users/add-new", (request, response) => {

    let user = {
      "first_name": request.body.fname,
      "last_name": request.body.lname,
      "user_id": request.body.userid,
      "email": request.body.email,
      "phone": request.body.phone
    };


    mockdb.add_user(user);

    response.send("User added to the DB!");
  });

  router.get('/user/db-all', (request, response) => {
    
   db.mysqlConnection.query(`SELECT * from customers`, (err, results) => {
      if (err) {
      console.log(err);
      } else {
      console.log(results);
      response.status(200).send(results);
      }
      });
  });


  router.get("/users/get-db-userid", (request, response) => {
    let id = request.query.user_id;

    db.mysqlConnection.query(`Select * from customers where id = ${id}`, (err, results) => {
      if (err) {
          console.log(err);
          } else {
          console.log(results);
          response.status(200).send(results);
          }
      });
  });


  router.get("/users/get-db-email", (request, response) => {
    let email = request.query.email;

    db.mysqlConnection.query(`Select * from customers where email = ${email}`, (err, results) => {
      if (err) {
          console.log(err);
          } else {
          console.log(results);
          response.status(200).send(results);
          }
      });
  });

  router.post("/users/add-db-new", (request, response) => {

    db.mysqlConnection.query(
      `insert into customers(first_name,last_name,email)
      values ('${request.body.fname}','${request.body.lname}','${request.body.email}')`,
      (err, results) => {
          if (err) {
              console.log(err);
          } else {
              if (results["affectedRows"] != 0) {
                  console.log(results);
                  console.log("Added");
                  response.status(200).send("User added to the DB!");
                  }
          }
      }
  );
  });

  router.post("/users/update-db-email", (request, response) => {

    db.mysqlConnection.query(
      `update customers
      SET first_name = '${request.body.fname}', last_name = '${request.body.lname}'
      WHERE email = '${request.body.email}'`,
      (err, results) => {
          if (err) {
              console.log(err);
          } else {
              if (results["affectedRows"] != 0) {
                  console.log(results);
                  console.log("Updated");
                  response.status(200).send("User updated in the DB!");
                  }
                  else {
                    console.log(results);
                    console.log("Nothing updated");
                    response.status(200).send("No User email found in the DB!");
                  }
          }
      }
  );
  });

module.exports = {router};
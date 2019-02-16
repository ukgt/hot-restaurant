// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 3000;
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  customers (DATA)
// =============================================================
var customers = [
  {
    
    id: 123456,
    name: "Sam Smith",
    email: "sam@gmail.com",
    phone: "404-789-9999"
    
  }
  
];
var waitList = [
  {
    
    id: 12858585,
    name: "Mary Smith",
    email: "Mary@gmail.com",
    phone: "404-789-9900"
    
  }
  
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.get("/api/viewtable", function(req, res) {
//      res.sendFile(path.join(__dirname, "view.html"));
//    });

// app.get("/api/viewwaitlist", function(req, res) {
//   res.sendFile(path.join(__dirname, "make.html"));
// });

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all customers
app.get("/api/viewtable", function(req, res) {
  return res.json(customers);
});
// Displays all waitList
app.get("/api/viewwaitlist", function(req, res) {
  return res.json(waitList);
});



// Create New customers - takes in JSON input
app.post("/api/viewtable", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcustomer = req.body;

  // Using a RegEx Pattern to remove spaces from newcustomer
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);

  customers.push(newcustomer);

  res.json(newcustomer);
});
// for the wait list:
app.post("/api/viewwaitlist", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcustomer = req.body;

  // Using a RegEx Pattern to remove spaces from newcustomer
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);

  customers.push(newcustomer);

  res.json(newcustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

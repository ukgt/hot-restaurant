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
    routeName: "customer",
    UID: 123456,
    name: "Sam Smith",
    Email: "sam@gmail.com",
    phoneNumber: "404-789-9999"
    
  }
  
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/viewtable", function(req, res) {
     res.sendFile(path.join(__dirname, "view.html"));
   });

app.get("/api/viewwaitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all customers
app.get("/api/customers", function(req, res) {
  return res.json(customers);
});

// Displays a single character, or returns false
app.get("/api/customers/:customer", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < customers.length; i++) {
    if (chosen === customers[i].routeName) {
      return res.json(customers[i]);
    }
  }

  return res.json(false);
});

// Create New customers - takes in JSON input
app.post("/api/customers", function(req, res) {
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

//Start the express
var express = require('express');
var app = express();
var cons = require('consolidate');
//If a port is defined && if not 3000 can be used
var port = process.env.PORT || 4000;

//Mongoose

/*
var mongoose = require('mongoose');
mongoose.connect("mongodb://employeeportal:!3mpl0y33@ds051585.mlab.com:51585/employee-portal");

//Declare the Schema of the Database
var schema = mongoose.Schema;
var detailsSchema = new schema({ firstName: String,
                                surname: String,
                                age: Number,
                                gender: Number,
                                race: Number,
                                province: String,
                                department: String
                                }),

contactsSchema = new schema({cellNumber: String,
                            emailAddress: String,
                            address: Number
                            }),

salariesSchema = new schema({employeeNo: String,
                            hoursWorked: Number,
                            days: Number,
                            grossIncome: Number,
                            hourlyRate: Number
                            });

var employeeDetails = mongoose.model('details', detailsSchema),
    employeeContacts = mongoose.model('contacts', contactsSchema),
    employeeSalaries = mongoose.model('salaries', salariesSchema);
*/


/* POST to Add User Service */

/*app.post('/adduser', function (req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('detailSchema'),
        collection = db.get('contactSchema'),
        collection = db.get('salariesSchema');

    // Submit to the DB
    collection.insert({
        "firstName": firstName,
        "surname": surname
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});
*/


app.engine('html', cons.swig);

// set .html as the default extension 
app.set('view engine', 'html');
//app.set('views', __dirname + '/views');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/models', express.static(__dirname + '/models'));
app.use('/controllers', express.static(__dirname + '/controllers'));

app.listen(port);
console.log("The server is running...");

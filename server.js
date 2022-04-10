// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");
// Use MongoDB
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
// The database variable
var database;

//sha1
var sha1 = require('sha1');

//cors
var cors = require('cors');

//mail
var nodemailer = require('nodemailer');
const { async } = require("rxjs/internal/scheduler/async");
const { getMaxListeners } = require("process");

// The products collection
var PRODUCTS_COLLECTION = "products";

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Create link to Angular build directory
// The ng build command will save the result
// under the dist folder.
var distDir = __dirname + "/dist/node-express-angular/";
app.use(express.static(distDir));

// Local database URI.
const LOCAL_DATABASE = "mongodb+srv://sisi:Sitraka1@cluster0.1phmo.mongodb.net/E-kaly?retryWrites=true&w=majority";

// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function(error, client) {

    // Check if there are any problems with the connection to MongoDB database.
    if (error) {
        console.log(error);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    database = client.db('E-kaly');
    console.log("Database connection done.");

    //const db = client.db('star-wars-result2')
    //const resultCollection = db.collection('result')

    // Initialize the app.
    var server = app.listen(process.env.PORT || LOCAL_PORT, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});


app.get('', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/login/:email', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/plat/nouveau', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/restaurant', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/inscription', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/client', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));
app.get('/commande/:id', (req, res) => res.sendFile(path.join(__dirname, '/dist/node-express-angular/index.html')));

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function(req, res) {
    res.status(200).json({ status: "UP" });
});

/*  "/api/products"
 *  GET: finds all products
 */
app.get("/api/products", function(req, res) {
    database.collection('products').find({}).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});

/*  "/api/products"
 *   POST: creates a new product
 */
app.post("/api/products", function(req, res) {
    var product = req.body;

    if (!product.name) {
        manageError(res, "Invalid product input", "Name is mandatory.", 400);
    } else if (!product.brand) {
        manageError(res, "Invalid product input", "Brand is mandatory.", 400);
    } else {
        database.collection('products').insertOne(product, function(err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new product.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});

/*  "/api/products/:id"
 *   DELETE: deletes product by id
 */
app.delete("/api/products/:id", function(req, res) {
    if (req.params.id.length > 24 || req.params.id.length < 24) {
        manageError(res, "Invalid product id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
    } else {
        database.collection(PRODUCTS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete product.");
            } else {
                res.status(200).json(req.params.id);
            }
        });
    }
});


//Get all resto ekaly
app.get("/api/user/restos-ekaly", function(req, res) {
    database.collection('user').find({ profil: "resto", ekaly: "oui" }).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});
//Get all resto 
app.get("/api/user/resto", function(req, res) {
    database.collection('user').find({ profil: "resto" }).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});

//nouveaux plats
app.post("/api/plat", function(req, res) {
    var plat = req.body;
    database.collection('plat').insertOne(plat, function(err, doc) {
        if (err) {
            manageError(res, err.message, "Failed to create new plat.");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
});

//Get all plat by resto 
app.get("/api/plat/:idResto", function(req, res) {
    var id = req.params.idResto;
    var ObjectId = require('mongodb').ObjectID;
    database.collection('plat').find({ idResto: id }, { visible: true }).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});




//Get all user
app.get("/api/user", function(req, res) {
    database.collection('user').find({}).toArray(function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(data);
        }
    });
});

//Delete user
app.delete("/api/user/:id", function(req, res) {
    if (req.params.id.length > 24 || req.params.id.length < 24) {
        manageError(res, "Invalid product id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
    } else {
        database.collection('user').deleteOne({ _id: new ObjectID(req.params.id) }, function(err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete product.");
            } else {
                res.status(200).json(req.params.id);
            }
        });
    }
});


//creer token
function createToken(mail) {
    var salted = mail + Date.now();
    var token = sha1(salted);
    return token;

}

//delete token
app.delete("/api/user/token/:id", function(req, res) {
    if (req.params.id.length > 24 || req.params.id.length < 24) {
        manageError(res, "Invalid product id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
    } else {
        database.collection("token").deleteOne({ id_user: new ObjectID(req.params.id) }, function(err, result) {
            if (err) {
                manageError(res, err.message, "Failed to delete product.");
            } else {
                res.status(200).json(req.params.id);
            }
        });
    }
});

//Login
app.post("/api/user/login", function(req, res) {
    var user = req.body;
    var mpd = sha1(user.mdp);
    console.log("email=" + user.email);
    console.log("mdp=" + user.mdp);
    database.collection('user').findOne({ email: user.email, mdp: mpd, valide: true })
        .then(result => {

            if (result != null) {
                var id_user = result["_id"];
                var noms = result["nom"] + " " + result["prenom"];
                var profil = result["profil"];
                var token = createToken(user.mail);
                var now = new Date().getTime();
                var expire = (10 * 60) * 1000;

                database.collection('token').deleteMany({ id_user: new ObjectID(id_user) }, function(err, result) {
                    if (err) {
                        manageError(res, err.message, "Failed to delete product.");
                    } else {

                    }
                });

                database.collection('token').insertOne({ id_user: id_user, token: token, expire: expire, date: now }, function(err, doc) {
                    if (err) {
                        manageError(res, err.message, "Failed to create new product.");
                    } else {
                        // res.status(201).json(doc.ops[0]);

                        res.status(200).json({ "status": "OK", "token": token, "id_user": id_user, "nom": noms, "email": user.email, "profil": profil });
                    }
                });

            } else {
                res.status(200).json({ "status": "NON", "message": "Email ou Mot de passe incorrect" });
            }


        })
});


//Inscription
app.post("/api/user", function(req, res) {
    var user = req.body;
    user.mdp = sha1(user.mdp);
    if (!user.nom) {
        manageError(res, "Nom invalide", "Name is mandatory.", 400);
    } else if (!user.email) {
        manageError(res, "Email invalide", "Email is mandatory.", 400);
    } else if (!user.mdp) {
        manageError(res, "Mot de passe invalide", "Mdp is mandatory.", 400);
    } else {
        database.collection('user').insertOne(user, function(err, doc) {
            if (err) {
                manageError(res, err.message, "Failed to create new account.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});

//send mail
app.post("/api/user/sendmail", function(req, res) {
    var user = req.body;
    sendMail(user, info => {
        console.log('mail envoyer avec succes');
        res.send(info);
    });
});

async function sendMail(user, callback) {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'ekaly.resto@gmail.com',
            pass: 'E-kaly#1'
        }
    });
    let mailOptions = {
        from: 'shajaniri@gmail.com',
        to: user.email,
        subject: "Validation compte E-kaly",
        html: '<h1><a href="http://localhost:4200/login/' + user.email + '">Valider compte</a></h1></a><br><h3>merci de nous avoir rejoint</h3>'
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);
}

//Valider compte
app.get("/api/user/valider/:email", function(req, res) {
    var mail = req.params.email;
    //var plat = req.body;
    // console.log(id);
    database.collection('user').findOneAndUpdate({ email: mail }, { $set: { valide: true } }), (function(error, data) {
        if (error) {
            manageError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json({ "message": "compte valider" });
        }
    });
});

//Check mail exist
app.get('/api/user/:email', (req, res) => {
    var mail = req.params.email;
    var ObjectId = require('mongodb').ObjectID;
    database.collection('user').findOne({ email: mail })
        .then(result => {
            res.status(200).json(result);
        });
});




// Errors handler.
function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}
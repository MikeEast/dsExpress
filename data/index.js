(function(data) {
    
    var sample = require("./sample");
    var database = require("./database");

    data.getProducts = function(next) {
        database.getDb(function(err, db) {
            if (err) {
                next(err, null);
            } else {
                db.products.find().sort({ Name: -1 }).toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    function insertSampleData() {
        database.getDb(function(err, db) {
            if (err) {
                console.log("Could not get a database connection");
            } else {
                db.products.count(function(err, count) {
                    if (err) {
                        console.log('Could not execute the count query');
                    } else {
                        if (count == 0) {
                            console.log('Inserting data');
                            sample.Products.forEach(function(product) {
                                db.products.insert(product, function(err) {
                                    if (err) {
                                        console.log('Could not insert data');
                                    }
                                });
                            });
                        } else {
                            console.log('Database already has sample data');
                        }
                    }
                });
            }
        });
    }

    insertSampleData();

})(module.exports);
(function(database) {
    var mongoDb = require('mongodb');
    var mongoUrl = 'mongodb://dbuser:dbpassword@ds049888.mongolab.com:49888/devsum';
    var dbInstance = null;

    database.getDb = function(next) {
        if (!dbInstance) {
            mongoDb.MongoClient.connect(mongoUrl, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    dbInstance = {
                        db: db,
                        products: db.collection('products')
                    };
                    next(err, dbInstance);
                }
            });
        } else {
            next(null, dbInstance);
        }
    };

})(module.exports);
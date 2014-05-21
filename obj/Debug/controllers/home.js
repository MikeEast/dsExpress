(function(home) {
    
    var data = require("../data")
    
    home.init = function(app) {
        app.get('/', function(req, res) {
            data.getProducts(function(err, results) {
                res.render("index", { title: "Hello Express!", error: err, products: results });    
            });
        });
    };
    
})(module.exports);
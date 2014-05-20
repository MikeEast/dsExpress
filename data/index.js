(function(data) {
    
    var sample = require("./sample");
    
    data.getProducts = function(next) {
        next(null, sample.Products)
    }
    
})(module.exports);
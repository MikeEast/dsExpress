(function(home) {
    
    home.init = function(app) {
        app.get('/', function(req, res) {
            //res.send('<h1>Hello express</h1>');
            res.render("index", { title: "Hello Express!" });
        });
    };
    
})(module.exports);
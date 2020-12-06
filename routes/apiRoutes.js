var db = require("../db/db.json");

module.exports = function(app) {
    app.get("/api/db", function(req, res) {
        res.json(db);
    });

    app.post("/api/db", function(req, res){
        db.push(req.body);
        res.json(true);
    });

    app.post("api/clear", function(req, res) {
        db.length = 0;
        res.json({ok: true});
    });
}
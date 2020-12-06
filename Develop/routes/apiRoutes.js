var db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");
const { time } = require("console");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        fs.readFile("./db/db.json", "utf8", function(err, data){
            console.log(data)
            res.json(JSON.parse(data));
        })
    });

    app.post("/api/notes", function(req, res){
        fs.readFile("./db/db.json", "utf8", function(err, data){
            const parsed = JSON.parse(data)
            req.body.id = uuid.v4()
            parsed.push(req.body)

        fs.writeFile("./db/db.json", JSON.stringify(parsed), function (err){
            if (err)
            throw err;
            res.json(true);
        })
    })
    });

    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile("./db/db.json", "utf8", function(err, data){
            const parsed = JSON.parse(data)
            const filter = parsed.filter(function(item){
                return item.id !== req.params.id
            })
        
        fs.writeFile("./db/db.json", JSON.stringify(filter), function (err){
            if (err)
            throw err;
            res.json(true);
        })
    })
})
}
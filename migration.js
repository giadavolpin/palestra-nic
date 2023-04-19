const migration = require("mysql-migrations")
const db = require("./db.js")
migration.init(db, `${__dirname}/migrations`, function(){
    console.log("finished running migrations")
})
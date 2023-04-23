const mysql = require("mysql2") //importato libreria mysql2
const connection = mysql.createPool({  //inizializzato var connection collegandoci al db palestra-nic
    host: "localhost",
    port: 3306,
    user: "root",
    database: "palestra-nic",
    password: "root"
}) 
module.exports = connection  // module.exports = richiama da un'altro file, e connection= comunica con il db


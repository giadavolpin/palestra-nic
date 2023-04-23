//per estrarre i dati dal db facciamo:
const db = require("../../db"); 

function index(request, response){   // request = contiene tutte le info della richiesta che mi sta arrivando, parametri ecc. response = mi fa mandare una risposta 
    db.query("SELECT * FROM `products`;", function(err, result){

        console.log(err);
        console.log(result);
        response.json(result);
    })

}
module.exports = index; //abbiamo esportato index

var sinesp = require("sinesp-api");

this.readPlate = async function (plate, callback) {
    /* var plate = req.params.plate.replace(/\W/g,"");
    sinesp.consultaPlaca(plate, function(response) {
        res.json(response);
    }); */
    //sinesp.configure("apicarros.com", "consulta", "v1", {});
    try {
        await sinesp.search(plate).then(dados => {
            console.log(dados);
            callback(dados);
        }).catch(error => {
            callback(error);
        })
    } catch (error) {
        console.log(error)
        callback(error);
    }

}
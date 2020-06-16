const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sendMail = require("./src/mailer");
const readPlate = require("./src/read-plate");

// tratamento de cors
app.use(cors());
app.use((req, res, next) => {    
    res.header("Access-Controll-Allow-Origin", "*");
    res.header(
        "Access-Controll-Allow-Header", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Controll-Allow-Methods", "PUT, POST, DELETE, PATCH, GET");
    /* if (req.method === "OPTIONS"){
        res.header("Access-Controll-Allow-Methods", "PUT, POST, DELETE, PATCH, GET");
         return res.status(200).json({})
    }; */
    
    next();
});

// body parser
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({extended: false}));
// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Access the parse results as request.body
app.post('/sendmail', function(req, res){    
    var data = req.body.data;
    console.log(res.statusCode);
    sendMail.sendMail(data.to, data.subject, data.html);
    res.send("Email Enviado");
});

app.post('/read-plate', function(req, res) {    
    var data = req.body;
    var result;
    readPlate.readPlate(data.plate, function(result){
        console.log(res.statusCode);
        console.log(result),
        res.send(result)
    })
});

app.listen(8081)

/* res.sendFile(__dirname + "caminho html") */
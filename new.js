const express= require("express");

const bodyParser= require("body-parser");

//const request= require("request");
const https=require("https");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email; 
    console.log(fname,lname,email);

    const url="https://www.google.com/";

    const request = https.request(url,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
    });
    request.end();
});

app.listen(process.env.PORT || 3000,function(){
    console.log("port running");
});


//5d36f4ca29b1615c2342901b860a148a-us21
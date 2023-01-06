const express =require('express');
const app =express();
const bodyParser= require("body-parser");
const port =3000;

app.use(bodyParser.urlencoded(
    {extended:true}
));
app.listen(port, function(){
    console.log("Your server is running on port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+ "/index.html");
})

app.post("/", function(req, res){

    let num1= Number(req.body.num1);
    let operator= req.body.operator;
    let num2= Number(req.body.num2);
    var result;
    if(operator == "+") {
        result=num1+num2;
        res.send("The sum is " + (num1+num2));
    }
    else if (operator =="-") {
        result =num1-num2;
        res.send("The difference is "+ result )

        
    } 
    else if (operator =="*") {
        result =num1*num2;
        res.send("The multiplication is "+ result )
    }
    else if(operator =="/") {
        result =num1/num2;
        res.send("The difference is "+ result )
    
    }   
    
    
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCal.html")
});

app.post("/bmicalculator", function(req, res){
    let weight= Number(req.body.weight);
    let height= Number(req.body.height);
    res.send("Your body index ratio is " + Math.floor(weight/(height*height)));
    
});


//
https://api.openweathermap.org/data/2.5/weather?q=Srinagar&appid=222ef2c6858a45d8963be8e659eb0fd7
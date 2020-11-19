const mongoose = require("mongoose");
//Connect to the db .... mongodb:// means I am connecting to a mongodb database
moongoose.connect("mongodb://100.115.92.2/pascfbdb");


//my application doesn't know when the connection is complete

//I need to listen out for when the event occurs
//.once is an event listener in mongoose once and only once
//.on is an event listener I am using it to listen to grab any error
mongoose.connection.once("open", function(){
    //notify me when the connection has been made successfully
    console.log("Connection has been made, Now Go Write Cobol Code 727225 32!");
}).on("error",function(err){
    console.log("Connection error:", err);
});
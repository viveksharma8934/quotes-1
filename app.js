const express=require("express");
const bodyParser = require("body-parser");
var ejs = require("ejs");

const app =express();

app.use(express.static("public"));
app.set('view engine','ejs');

const quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”"
];


app.get("/",function(req,res){
  var i=Math.floor(Math.random()*9)+1;
  var quote=quotes[i];
  res.render('list',{quote:quote});
})


app.post("/",function(req,res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000,function(){  //using heroku to deploy
  console.log("Server is running on port 3000")
});

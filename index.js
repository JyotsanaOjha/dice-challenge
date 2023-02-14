const express = require("express");
const app = express();
const path = require("path");


app.set('views', path.join(__dirname, 'views'));  //it is setting all of our front end to me rendered in a folder called views.
app.set('view engine', 'ejs');   // it tells our program, what will our template engine be to run our front end(in our case it is ejs)
app.use(express.static("public"));  //it is needed if we want our server to serve up our static files such as css and images.We have to keep our static files under a folder named as "public". Now we can refer to these static files by the URL relative to the public folder.

app.get("/", function (req, res) {
    res.render("index");
    // res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    // code for player 1 dice
    let randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;      //1-6

    // code for player 2 dice
    let randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;        //1-6

    // Compare both dices and declare the winner
    let result = "Draw!";

    if (randomNumber1 > randomNumber2) {

        result = "Player 1 Wins!";

    } else if (randomNumber1 < randomNumber2) {

        // result= "Player 2 Wins! 🚩";
        result = "Player 2 Wins!";

    }

    res.render("rolled", { num1: randomNumber1, num2: randomNumber2, result: result })



})


app.listen(3000, function () {
    console.log("server started on port 3000");
});















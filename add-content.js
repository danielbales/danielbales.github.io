var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow  > 11) {
  greeting = "Good afternoon!";
} else if (hourNow > 0) {
  greeting = "Good morning!";
} else {
  greeting = "Hi!";
}

document.write("<h1>" + greeting + "</h1>");

//beginning of game

//End of Game

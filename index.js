
var readLineSync = require('readline-sync');
var chalk = require('chalk');
var userName = readLineSync.question('What Is your Name? ');
console.log("Welcome To The ", chalk.green("QUIZE WORLD, "),chalk.red.underline.bold(userName));
console.log(" ");
console.log(chalk.yellow("Let,s Check Out How Much Do you Know About Me..."));
console.log(" ");

var score = 0;
function playQuiz(question, answer) {
  var userAns = readLineSync.question(question);
  if(userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(chalk.green("Right!!!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong!!!"));
  }
  console.log("Your Current Score is: ", score);
  console.log("*--***--*--***--*");
  console.log(" ");
}

var questionAns = [{
  question : "What is My Name? ",
  answer : "Abdul"
}, {
  question : "Where Do I Live? ",
  answer : "Marol"
},
{
  question : "What Is My Favourite Cartoon Character Name? ",
  answer : "Naruto"
},
{
  question : "Which Is My Favourite Movie? ",
  answer : "Iron Man"
},
{
  question : "Which College I Study? ",
  answer : "Tolani"
}];

for(i=0;i<questionAns.length;i++) {
  var funBegin = questionAns[i];
  playQuiz(funBegin.question, funBegin.answer);
}

console.log(chalk.green.underline.bold("Hurray!!!, Your Final Score Is: "), chalk.yellow.underline.bold(score));
console.log(chalk.redBright("You Did Well.. Thanks For Participating. "));
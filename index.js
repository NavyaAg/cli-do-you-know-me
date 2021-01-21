var readlineSync = require('readline-sync'); 
var chalk = require('chalk');

console.log(chalk.blue('WELCOME TO DO YOUR KNOW ME CLI APP!\n\n'))
var userName = readlineSync.question('Enter your Name: ');
console.log("Hola!",userName);
console.log("Let's Begin!");
console.log("-------------------\n");
var score=0;

//function to check user answers against the correct one 
function play(question,answer)
{
  var userAns=readlineSync.question(question);
  if(userAns===answer)
  {
    console.log("Correct!");
    score++;
  }else{
    console.log("Wrong!");
  }
  console.log("Score: "+score);
  console.log("-------------------");

}
//set of questions
var questions=[questionOne={
  quest:"Do I like Chocolates? ",
  ans:"yes"
},questionTwo={
  quest:"My favourite series?\na.Money Heist \nb.Stranger Things   \nc.The Queens Gambit ",
  ans:"b"
}]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].quest,questions[i].ans)
}
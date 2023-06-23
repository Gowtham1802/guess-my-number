// console.log(document.getElementById(''));
let again_btn = document.querySelector('.again_btn');
console.log(again_btn);

let number_box = document.querySelector('.number_box');
console.log(number_box);

let checking_btn = document.querySelector('.checking_btn');
console.log(checking_btn);

let question_mark = document.querySelector('.question_mark');
console.log(question_mark);

let game_result = document.querySelector('.game_result');
console.log(game_result);

let score_result = document.querySelector('.score_result');
console.log(score_result);

let high_score_result = document.querySelector('.high_score_result');
console.log(high_score_result);

function randomNum(){
  const checkNumbers = Math.trunc(Math.random()*100+1);
  return (checkNumbers);
}
randomNum();

function result(){
 let giveNum = number_box.value
 console.log(giveNum);
 let takeNum = randomNum()
 console.log(takeNum);

 if (giveNum > 0 && giveNum <= 100){
  if (giveNum < takeNum ){
    game_result.innerHTML = '☹️ To low'
    console.log('To low');
  }else if (giveNum > takeNum){
    game_result.innerHTML = '😁 To high'
    console.log('To high');
  }else if (giveNum == takeNum){
    game_result.innerHTML = '😊 Both are equal'
    console.log('Both are equal');
  }
 }
}
checking_btn.addEventListener("click", result);

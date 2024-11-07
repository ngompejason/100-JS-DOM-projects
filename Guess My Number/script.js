'use strict';

let secret_number = Math.trunc(Math.random()*20)+1;
let score = 20;

let highscore = document.querySelector('.highscore').textContent;
let checkBtn = document.querySelector('.check');
let AgainBtn = document.querySelector('.again');


const ifScore = (notive) => {
    if(score > 1 ){
        document.querySelector('.message').textContent = notive ;
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = "GAME OVER, You Lost" ;
        document.querySelector('.score').textContent = 0;
    }
}

checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
    document.querySelector('.message').textContent = "No number";

    //when player wins
    }else if(guess === secret_number){
        document.querySelector('.message').textContent = "Correct number";
        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secret_number;
    // When guess is to high
    }else if(guess > secret_number){
        ifScore('Too High')
    }
    // When Guess is too low
    else if(guess < secret_number){
        ifScore('Too Low')
    }
});

AgainBtn.addEventListener('click',() => {
    // location.reload();

    secret_number = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start Guessing";

    

});
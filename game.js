let numberContainer = document.querySelector('.numberContainer');
let timerValue = document.querySelector('.timerValue');
let numberValue = document.querySelector('.numberValue');
let scoreValue = document.querySelector('.scoreValue');
let timer = 10;
let score = 0;
let numberOfCircle = 60;
let interval;



function generateCircle(){
    numberContainer.innerHTML = '';
    for(let i = 1; i <= numberOfCircle;i++){
        let divElement = document.createElement('div');
        let number = Math.ceil(Math.random()*10);
        divElement.className = 'circle';
        divElement.innerHTML = number;
        numberContainer.append(divElement)
    }
}
function timerStart(){
    clearInterval(interval);
 interval = setInterval(()=>{
        if(timer<=0){
            numberContainer.innerHTML = '';
            numberContainer.innerHTML = `
               <div class="gameOver">
                    <h1>Game Over</h1>
                    <p>Your Score: ${score}</p>
                    <button class="restartBtn" onclick="restartGame()">Restart</button>
                </div>`;
           
           numberContainer.append(divElement);
           return;
            
        }
     --timer;
    timerValue.innerHTML = timer ;
    },1000)
}
function scoreUpdate(){
   scoreValue.innerHTML = score; 
   score +=10;
    scoreValue.innerHTML = score;
}
function generateTarget(){
   let target = Math.ceil(Math.random()*10)
   numberValue.innerHTML = target;
}
function timerRestart(){
    timer = 10;
    timerValue.innerHTML = timer;
}
function restartGame(){
    score = 0;
    scoreValue.innerHTML = score;
    timerRestart();
    timerStart();
    generateTarget();
    generateCircle();

}
numberContainer.addEventListener('click',(event)=>{
    if(event.target.className === 'circle'){
       let numberShoot = event.target.innerText;
        if(numberValue.innerText === numberShoot ){
            scoreUpdate();
        }
        generateTarget();
    }

})
timerStart();
generateCircle();
generateTarget();

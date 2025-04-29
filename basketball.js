let addOneToHome = document.getElementById('add1');
let scoreEl = document.getElementById('score-el');
let add2ToHome = document.getElementById('add2');
let add3ToHome = document.getElementById('add3');
let resetBtn = document.getElementById('reset-el')

let score = 0;

let guestScoreEl = document.getElementById('guest-score');
let add1Guest = document.getElementById('add1Guest');
let add2Guest = document.getElementById('add2Guest');
let add3Guest = document.getElementById('add3Guest');
let guestScore = 0;

function scoreHome(scoreToAdd){
    score = score + scoreToAdd;
    scoreEl.textContent = score;
}

function scoreGuest(scoreToAdd){
     guestScore = guestScore + scoreToAdd ;
     guestScoreEl.textContent = guestScore;
}

//function scorePlayers(scoreToAdd, isHome)
//{
    // if(isHome)
    // {
         // score = score + scoreToAdd;
          //scoreEl.textContent = score;
    // }
    // else
     //{
          //guestScore = guestScore + scoreToAdd;
         // guestScoreEl.textContent = guestScore;
     //}
//}

add1Guest.addEventListener('click', ()=>{
     scoreGuest(1);
    //scorePlayers(1, false);
})

add2Guest.addEventListener('click', ()=>{
     scoreGuest(2);
    //scorePlayers(1, false);
})

add3Guest.addEventListener('click', ()=>{
     scoreGuest(3);
    //scorePlayers(1, false);
})
addOneToHome.addEventListener('click',()=>{
     //score  += 1;
     scoreHome(1);
  // scorePlayers (1, true)

})

add2ToHome.addEventListener('click',()=>{
    //score += 2;
     scoreHome(2);
}) 

add3ToHome.addEventListener('click',()=>{
     //score+= 3;
     scoreHome(3);
}) 

resetBtn.addEventListener('click',()=>{
     console.log(resetBtn);
     score =0;
     scoreHome(0);

     guestScore = 0;
     scoreGuest(0);
})
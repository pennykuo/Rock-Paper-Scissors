// Your JavaScript goes here!
    let weap=0;
    let rand;
    let scorePlayer=0;
    let scoreComputer=0;
    let whoWin=0;
    const btn_fire =document.querySelector(".btn_fire");
    // console.log(document.querySelector(".btn_fire"));
    btn_fire.addEventListener('click', get1);

    const btn_water =document.querySelector(".btn_water");
    btn_water.addEventListener('click', get2);

    const btn_green =document.querySelector(".btn_green");
    btn_green.addEventListener('click', get3);

    const scorePlayerElement=document.querySelector("#scorePlayer");
    const scoreComputerElement=document.querySelector("#scoreComputer");
    // console.log(scorePlayerElement);
    // scorePlayerElement.textContent = "Player：";
    
    
function rand_computer(){
    return Math.floor(Math.random() * 3 + 1);//*(max - min + 1) + min)
}
function contest(weap,rand){
    if (weap == 1) {
            if (rand == 1) {
                console.log("It's a tie!")
                whoWin=0;
            } else if (rand == 2) {
                console.log("You Lose!  Water beats Fire")
                scoreComputer++;
                whoWin=2;
            } else if (rand == 3) {
                console.log("You Win! Fire beats Green")
                scorePlayer++;
                whoWin=1;
            }
        } else if (weap == 2) {
            if (rand == 1) {
                console.log("You Win! Water beats Fire")
                scorePlayer++;
                whoWin=1;
            } else if (rand == 2) {
                console.log("It's a tie!")
                whoWin=0;
            } else if (rand == 3) {
                console.log("You Lose! Green beats Water")
                scoreComputer++;
                whoWin=2;
            }
        } else if (weap == 3) {
            if (rand == 1) {
                console.log("You Lose! Fire beats Green")
                scoreComputer++;
                whoWin=2;
            } else if (rand == 2) {
                console.log("You Win! Green beats Water")
                scorePlayer++;
                whoWin=1;
            } else if (rand == 3) {
                console.log("It's a tie!")
                whoWin=0;
            }
        }
}
function currentScore(scorePlayer,scoreComputer,whoWin){

    if(whoWin==1){
        scorePlayerElement.textContent = "Player："+scorePlayer;
    }else if (whoWin==2){
        scoreComputerElement.textContent = "Computer："+scoreComputer;
    }
    
    if (scoreComputer==5){
        alert("YOU LOSE!");
    }else if(scorePlayer==5){
        alert("YOU WIN!!");
        
}
}
function get1() {
    rand =rand_computer();
    weap=1;
    console.log(weap);
    console.log(rand);
    /*比賽-----------------------*/
    contest(weap,rand);
    currentScore(scorePlayer,scoreComputer,whoWin)
    
}
function get2() {
    rand =rand_computer();
    weap=2;
    contest(weap,rand);
    currentScore(scorePlayer,scoreComputer,whoWin)
}

function get3() {
    rand =rand_computer();
    weap=3;
    contest(weap,rand);
    currentScore(scorePlayer,scoreComputer,whoWin)
}


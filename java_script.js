// Your JavaScript goes here!
    let weap=0;
    let rand;
    let scorePlayer=0;
    let scoreComputer=0;
    let whoWin=0;
    const btn_fire =document.querySelector(".btn_fire");
    btn_fire.addEventListener('click', get1);
    btn_fire.addEventListener('mouseover', () => {
        btn_fire.focus();
    });
    btn_fire.addEventListener('mouseout', () => {
        btn_fire.blur();
    });
    const btn_water =document.querySelector(".btn_water");
    btn_water.addEventListener('click', get2);
    btn_water.addEventListener('mouseover', () => {
        btn_water.focus();
    });
    btn_water.addEventListener('mouseout', () => {
        btn_water.blur();
    });
    const btn_green =document.querySelector(".btn_green");
    btn_green.addEventListener('click', get3);
    btn_green.addEventListener('mouseover', () => {
        btn_green.focus();
    });
    btn_green.addEventListener('mouseout', () => {
        btn_green.blur();
    });
    const scorePlayerElement=document.querySelector("#scorePlayer");
    const scoreComputerElement=document.querySelector("#scoreComputer");
    const winRule=document.querySelector(".win_rule");
    let infoModalLose=document.querySelector("#infoModalLose");
    let close2=document.querySelector("#close2");
    close2.addEventListener("click", function(){
        infoModalLose.close();
    })
    let infoModalWin=document.querySelector("#infoModalWin");
    let close1=document.querySelector("#close1");
    close1.addEventListener("click", function(){
        infoModalWin.close();
    })
function rand_computer(){
    return Math.floor(Math.random() * 3 + 1);//*(max - min + 1) + min)
}
function contest(weap,rand){
    if (weap == 1) {
            if (rand == 1) {
                winRule.textContent="It's a tie!";
                whoWin=0;
            } else if (rand == 2) {
                winRule.textContent="You Lose!  Water beats Fire";
                scoreComputer++;
                whoWin=2;
            } else if (rand == 3) {
                winRule.textContent="You Win! Fire beats Green";
                scorePlayer++;
                whoWin=1;
            }
        } else if (weap == 2) {
            if (rand == 1) {
                winRule.textContent="You Win! Water beats Fire";
                scorePlayer++;
                whoWin=1;
            } else if (rand == 2) {
                winRule.textContent="It's a tie!";
                whoWin=0;
            } else if (rand == 3) {
                winRule.textContent="You Lose! Green beats Water";
                scoreComputer++;
                whoWin=2;
            }
        } else if (weap == 3) {
            if (rand == 1) {
                winRule.textContent="You Lose! Fire beats Green";
                scoreComputer++;
                whoWin=2;
            } else if (rand == 2) {
                winRule.textContent="You Win! Green beats Water";
                scorePlayer++;
                whoWin=1;
            } else if (rand == 3) {
                winRule.textContent="It's a tie!";
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
        infoModalLose.showModal();
        resetGame();
        
    }else if(scorePlayer==5){  
        infoModalWin.showModal();     
        resetGame();
    }
}
function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    scorePlayerElement.textContent = "Player：0";
    scoreComputerElement.textContent = "Computer：0";
    whoWin = 0;
    winRule.textContent = "First to score 5 points wins the game";
}
function get1() {
    rand =rand_computer();
    weap=1;
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


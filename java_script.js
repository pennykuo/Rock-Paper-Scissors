// Your JavaScript goes here!
let s='';
let ans=parseInt(prompt("輸入1(剪刀),2(石頭),3(布)："))//輸入數字
let a=Math.floor(Math.random()*3+1);//*(max - min + 1) + min)
console.log(a);
if(ans==1){
    if(a==1){
        console.log("平手")
    }else if(a==2) {
        console.log("You Lose! Rock beats Scissors")
    }else if (a==3){
        console.log("You Win! Sciccors beats Paper")
    }
}else if (ans==2){
    if(a==1){
        console.log("You Win! Rock beats Paper")
    }else if(a==2) {
        console.log("平手")
    }else if (a==3){
        console.log("You Lose! Papper beats Rock")
    }
}else if(ans==3){
    if(a==1){
        console.log("You Lose! Sciccors beats Papper")
    }else if(a==2) {
        console.log("You Win! Papper beats Rock")
    }else if (a==3){
        console.log("平手")
    }
}else{
    console.log("輸入錯誤喔!");
}
window.onload = function(){
    
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function convertToWord(letter){
    console.log(letter)
    if (letter==="r") return "Piedra";
    if(letter==="p") return "Papel";
    else return "Tijera"
}
//we have store the dom, es mejor hacerlo al inicio, para no tener que estar creando la misma variable varias veces
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);//we need the number 0, 1, 2
    console.log(randomNumber)
    return choices[randomNumber]
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} gana a ${convertToWord(computerChoice)}${smallCompWord}. Tu ganas!!`
    //classlist gives an array with all the classes of that element
    userChoice_div.classList.add('orange-glow');
    setTimeout(()=>userChoice_div.classList.remove('orange-glow'), 300);
}


function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    
    result_p.innerHTML=`${convertToWord(computerChoice)}${smallCompWord} gana a ${convertToWord(userChoice)}${smallUserWord}. La computadora gana!!`
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>{userChoice_div.classList.remove('red-glow')}, 300);
}
function draw(userChoice, computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML=`${convertToWord(computerChoice)} es igual a ${convertToWord(userChoice)}. Es un empate!!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(()=>{userChoice_div.classList.remove('grey-glow')}, 300);
}

function game(userChoice){
   
    const computerChoice = getComputerChoice() ;
    //se puede usar switch en lugar de if
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click', ()=>game("r"))

paper_div.addEventListener('click', ()=>game("p"))

    scissors_div.addEventListener('click', ()=> game("s"))
}

main();

};
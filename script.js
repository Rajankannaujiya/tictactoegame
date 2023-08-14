console.log("welcome to My tic tac toe Game");
let music = new Audio("music-box-for-suspenseful-stories-158419.mp3");
let audioturn = new Audio("metal-clang-sound-81634.mp3");
let gameover = new Audio("failure-drum-sound-effect-2-7184.mp3");
let isgameover = false;
// fuction for changing the turn 
var turn = "X";
const changetheturn = () => {
    return turn === "X" ? "0" : "X";

}

// fuction for checking the win 
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 4],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// logic of the game
// music.play()
var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            turn = changetheturn();
            audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerHTML = "turn for" + turn;
            }

        }
    })
})

// Add onclck listner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
})
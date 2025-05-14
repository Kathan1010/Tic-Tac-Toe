let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")

let turnO = true;//playerX playerO here we have selected playerO as true so firse he will get a turn

// making 2D arry to store all winning possibility
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = (() => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
})

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was clicked");
        if (turnO) {
           box.innerText = "O";
           turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //this allows the box to not change the value once it is set

        checkWinner();
    });
});

const disableBoxes = (() =>{
    for(let box of boxes) {
        box.disabled = true;
        // msgContainer.classList.add("hide");
    }

})
const enableBoxes = (() =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

})
const showWinner = ((winner) => {
    msg.innerHTML = `congratulations , the Winner is ${winner}`
    msgContainer.classList.remove("hide")
})

const checkWinner = (() => {
    for(let patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerHTML;
        let pos2val = boxes[patterns[1]].innerHTML;
        let pos3val = boxes[patterns[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val == pos3val) {
                console.log("Game Over and winner is: ", pos1val);
                showWinner(pos1val);
            }
        }
    }
})

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
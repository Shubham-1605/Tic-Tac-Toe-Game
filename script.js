let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;  //playerX , player0

const  winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restgame = ()=>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){   //playerO
            box.innerText = "O";
            turnO = false;
        }else{      //playerX
            box.innerText = "X";
            turnO =  true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = ()=>{
    for (box of boxes) {
        box.disabled = true;    
    }
}
const enableboxes = ()=>{
    for (box of boxes) {
        box.disabled = false;  
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = ()=>{
    for ( pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newgame.addEventListener("click",restgame);
resetbtn.addEventListener("click",restgame);
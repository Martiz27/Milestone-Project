let round = 1
let score = 0

function aiTurn() {
    turn = Math.floor(Math.random() * 3);
    setTimeout (() => {
        if(turn === 0) {
            console.log("Rock!")
        } else if(turn === 1) {
            console.log("Scissor!")
        } else if(turn === 2) {
            console.log("Paper!")
        }
    }, 5000)

}

function timer(time, seconds){
    const timeH = document.querySelector(time);
    let timeSecond = seconds;
    timeH.innerHTML = `00:${timeSecond}`;
    const countDown = setInterval (()=>{
        timeSecond--;
        timeH.innerHTML = `00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countDown)
            timer('h3', 5)
            aiTurn()
            let rock = document.getElementById("r")
            rock.onclick = function()
            {console.log("Rock")}
            let scissor = document.getElementById("s")
            scissor.onclick = function()
            {console.log("Scissor")}
            let paper = document.getElementById("p")
            paper.onclick = function()
            {console.log("Paper")}
        }

    },1000)

}

timer('h2', 5)

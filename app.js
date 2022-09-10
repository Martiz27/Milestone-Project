function game(){
    let yourScore = 0
    let oppScore = 0

    //Win condition 
    function winCon(){
        var text = document.getElementById('game-text')
        let rock = document.getElementById("r")
        let scissor = document.getElementById("s")
        let paper = document.getElementById("p")
        if(yourScore === 6){
            text.innerHTML = "You have Won!";
            text.style.color = "green";
            rock.style.display = "none";
            paper.style.display = "none";
            scissor.style.display = "none";

        }else if(oppScore === 6){
            text.innerHTML = "Your opponent has won!";
            text.style.color = "red";
            rock.style.display = "none";
            paper.style.display = "none";
            scissor.style.display = "none";
        }
    }
    //Changes the Score
    function scoreChange(){
        yScore = document.getElementById("score")
        opScore = document.getElementById("oppScore")
        yScore.innerHTML = `Your Score: ${yourScore}`;
        opScore.innerHTML = `Enemy Score: ${oppScore}`;
    }
    //How the ai functions
    function aiTurn() {
        turn = Math.floor(Math.random() * 3);
        if(turn === 0) {
            oppChoice = "Rock"
            console.log(oppChoice)
        } else if(turn === 1) {
            oppChoice = "Scissor"
            console.log(oppChoice)
        } else if(turn === 2) {
            oppChoice = "Paper"
            console.log(oppChoice)
        }
    }
    
    //The logic behind the game
    function gameLogic(){
        var image = document.getElementById('question')
        var text = document.getElementById('game-text')
        if(yourChoice == "Rock" && oppChoice == "Scissor") {
            yourScore ++;
            image.src="./Assets/Pictures/download.jpg"
            text.innerHTML = "You have gained a point!";
            console.log(yourScore)
            console.log(oppScore)
            
        }else if(oppChoice === "Rock" && yourChoice === "Scissor") {
            oppScore ++;
            image.src="./Assets/Pictures/Rock.jpg"
            text.innerHTML = "Your opponent has gained a point!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(yourChoice === "Scissor" && oppChoice === "Paper") {
            yourScore ++;
            image.src="./Assets/Pictures/paper_111691001.jpg"
            text.innerHTML = "You have gained a point!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(oppChoice === "Scissor" && yourChoice === "Paper") {
            oppScore ++;
            image.src="./Assets/Pictures/download.jpg"
            text.innerHTML = "Your opponent has gained a point!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(yourChoice === "Paper" && oppChoice === "Rock") {
            yourScore ++;
            image.src="./Assets/Pictures/Rock.jpg"
            text.innerHTML = "You have gained a point!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(oppChoice === "Paper" && yourChoice === "Rock") {
            oppScore ++;
            image.src="./Assets/Pictures/paper_111691001.jpg"
            text.innerHTML = "Your opponent has gained a point!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(yourChoice === "Paper" && oppChoice === "Paper") {
            yourScore 
            image.src="./Assets/Pictures/paper_111691001.jpg"
            text.innerHTML = "You both tied!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(yourChoice === "Rock" && oppChoice === "Rock") {
            yourScore = yourScore
            image.src="./Assets/Pictures/Rock.jpg"
            text.innerHTML = "You both tied!";
            console.log(yourScore)
            console.log(oppScore)
        }else if(yourChoice === "Scissor" && oppChoice === "Scissor") {
            yourScore = yourScore 
            image.src="./Assets/Pictures/download.jpg"
            text.innerHTML = "You both tied!";
            console.log(yourScore)
            console.log(oppScore)
        }
        return yourScore;
    }
    //The game start timer
    function timer(time, seconds){
        const timeH = document.querySelector(time);
        let timeSecond = seconds;
        timeH.innerHTML = `00:${timeSecond}`;
        const countDown = setInterval (()=>{
            timeSecond--;
            timeH.innerHTML = `00:${timeSecond}`;
            if(timeSecond <= 0 || timeSecond < 1){
                clearInterval(countDown)
                let rock = document.getElementById("r")
                rock.onclick = function(){
                    yourChoice = "Rock"
                    aiTurn()
                    gameLogic()
                    scoreChange()
                    winCon()
                    console.log(yourChoice)
                }
                let scissor = document.getElementById("s")
                scissor.onclick = function(){
                    yourChoice = "Scissor"
                    aiTurn()
                    gameLogic()
                    scoreChange()
                    winCon()
                    console.log(yourChoice)
                }
                let paper = document.getElementById("p")
                paper.onclick = function(){
                    yourChoice = "Paper"
                    aiTurn()
                    gameLogic()
                    scoreChange()
                    winCon()
                    console.log(yourChoice)
                }
            }
        },1000)
    }
    timer('h2', 5)
}

game()

import React,{useState, useEffect} from "react";

export default function Game(props){
    const [inGameSettings, setInGameSettings] = useState({
        showPauseMenu: false,
        sound: false,
        fullscreen: false,
        userName: "player",
        userPeudoName: "you",
        aiName: "ai",
        aiPseudoName: "ai",
        gameBigtext: "...",
    })
    
    const [possibleAiChoice, setPossibleAiChoice] = useState({
        possibleChoices : ["rock", "paper", "scissors"],
        possibleTimeToMakeChoice : [0, 1, 2, 3, 4],
    })

    const [aiChoice, setAiChoice] = useState({
        choice: "I'm waiting",
        timeToMakeChoice : possibleAiChoice.possibleTimeToMakeChoice[0]
    })
    
    const [userChoice, setUserChoice] = useState("make a choice")
    
    
    const [result, setResult] = useState({
        possibleResults : ["...", "You won", "AI won", "Draw"],
        currentResult : "...",
        scoreUser: 0,
        scoreAi: 0
    })
    
    function chooseRock(){
        setUserChoice(possibleAiChoice.possibleChoices[0])
        const randNumber = Math.floor(Math.random()*3)
        const tempChoice = possibleAiChoice.possibleChoices[randNumber]
        const userNewChoice = possibleAiChoice.possibleChoices[0]
        const aiNewChoice = tempChoice
        setAiChoice((prev)=>{
            return({
                ...prev,
                choice: tempChoice
            })
        })
        setResult((prevState)=>{
            if(userNewChoice === aiNewChoice){
                return({
                    ...prevState, currentResult: result.possibleResults[3]
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else {
                return({
                    ...prevState, currentResult: result.possibleResults[0]
                })
            }
        })
    }
    function choosePaper(){
        setUserChoice(possibleAiChoice.possibleChoices[1])
        const randNumber = Math.floor(Math.random()*3)
        const tempChoice = possibleAiChoice.possibleChoices[randNumber]
        const userNewChoice = possibleAiChoice.possibleChoices[1]
        const aiNewChoice = tempChoice
        setAiChoice((prev)=>{
            return({
                ...prev,
                choice: tempChoice
            })
        })
        setResult((prevState)=>{
            if(userNewChoice === aiNewChoice){
                return({
                    ...prevState, currentResult: result.possibleResults[3]
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else {
                return({
                    ...prevState, currentResult: result.possibleResults[0]
                })
            }
        })
    }
    function chooseScissors(){
        setUserChoice(possibleAiChoice.possibleChoices[2])
        const randNumber = Math.floor(Math.random()*3)
        const tempChoice = possibleAiChoice.possibleChoices[randNumber]
        const userNewChoice = possibleAiChoice.possibleChoices[2]
        const aiNewChoice = tempChoice
        setAiChoice((prev)=>{
            return({
                ...prev,
                choice: tempChoice
            })
        })
        setResult((prevState)=>{
            if(userNewChoice === aiNewChoice){
                return({
                    ...prevState, currentResult: result.possibleResults[3]
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[2], scoreAi: prevState.scoreAi + 1
                })
            }
            else if(userNewChoice === "rock" && aiNewChoice === "scissors"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "paper" && aiNewChoice === "rock"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else if(userNewChoice === "scissors" && aiNewChoice === "paper"){
                return({
                    ...prevState, currentResult: result.possibleResults[1], scoreUser: prevState.scoreUser + 1
                })
            }
            else {
                return({
                    ...prevState, currentResult: result.possibleResults[0]
                })
            }
        })
    }

    function restartGame(){
        window.location.reload()
    }

    function resumeGame(){
        setInGameSettings((prevState)=>{
            return({
                ...prevState,
                showPauseMenu: false
            })
        })    
    }

    function pauseGame(){
        setInGameSettings((prevState)=>{
            return({
                ...prevState,
                showPauseMenu: !prevState.showPauseMenu
            })
        })
    }

    useEffect(()=>{
        document.title = `🙂 You ${result.scoreUser} - ${result.scoreAi} AI 🤖`
    })

    useEffect(()=>{
        if(result.scoreUser >= 10){
            alert(`Congrats, you managed to beat me ${result.scoreUser} - ${result.scoreAi} 😀`)
            window.location.reload()
        } else if(result.scoreAi >= 10){
            alert(`Better Luck Next Time I beat you ${result.scoreAi} - ${result.scoreUser} 😉`)
            window.location.reload()
        }
    })

    return(
        <div className={inGameSettings.showPauseMenu ? "pause game" : "game"}>
            <div style={{display: "none"}} onClick={()=>{
                setInGameSettings("null")
                setPossibleAiChoice("null")
            }}>ABCDEFG</div>
            <div className="nav-game">
                <div className="score-board">
                    {inGameSettings.userPeudoName} <span>{result.scoreUser}</span> - <span>{result.scoreAi}</span> {inGameSettings.aiPseudoName} 
                </div>
                <div className="hamburger" onClick={pauseGame}>
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
            </div>
            <div className="menu-game">
                <div className="backdrop"></div>
                <div className="content">
                    <button onClick={resumeGame}>Resume</button>
                    <button onClick={restartGame}>Restart</button>
                    <a href="https://wa.me/+2347035658853" target={"_blank"} rel={"noreferrer"}>Make a complaint</a>
                </div>
            </div>
            <div className="ai">
                <span>AI Choice :</span> {aiChoice.choice}
            </div>
            <h1>{result.currentResult}</h1>
            <div className="user">
                <span>Your Choice :</span> {userChoice}
            </div>
                <div className="choice">
                    <button onClick={chooseRock}>Rock</button>
                    <button onClick={choosePaper}>Paper</button>
                    <button onClick={chooseScissors}>Scissors</button>
                </div>
        </div>
    )
}
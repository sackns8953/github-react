function Body(props) {
    document.getElementById("myBtn")?.addEventListener("click", () => {
        let input = document.getElementById("fortnite")?.value;
        console.log(input);
        if(input == "Jamal Musiala" || input == "Musiala"){
            document.getElementById("myPara").innerHTML = "Correct!"
        } else(
            document.getElementById("myPara").innerHTML = "Incorrect :("
        )
    });
    return (
        <>
            <div className="myCard">
                <h1>Guess the player!</h1>
                <p>
                    Guess the player based on these facts!
                </p>
                <p>Club: {props.club}</p>
                <p>Position: {props.position}</p>
                <p>Nationality: {props.nationality}</p>
                <input id="fortnite" placeholder="Answer"></input>
                <button id="myBtn">Guess</button>
                <p id="myPara"></p>
                <button id="hintBtn1">Hint</button>
                <p id="Hint"></p>
            </div>
        </>
    );
    
}

export default Body;
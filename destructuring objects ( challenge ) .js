/*
    *** Challenge ***
    For this challenge destructure the following object.
*/
    const professional = {
        name: "Rajan",
        age: "10000",
        projects: {
            chessGame: "Two player chess game using JavaScript."
        }
    };


//  Solution
    const { name , age , projects: { chessGame } } = professional;
    console.log(name);
    console.log(age);
    console.log(chessGame);

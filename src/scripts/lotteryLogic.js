export const lottery = (userInput) =>{
    const lotteryInput = Math.floor(Math.random()*10) + 1;
    try {
        if (typeof(userInput) !== 'number'){
            throw new Error("The value introduced is not a number!");
            
        } else if (userInput < 1 || userInput > 10) {
            throw new Error("You must introduce a number between 1 and 10");
        }

        const answer = userInput === lotteryInput ? 'Win' : 'Lose';

        return {
            message: answer, 
            data: {
                userNumber: userInput, 
  		        randomNumber: lotteryInput 
            }
        }
        
    } catch (error) {
        return error.message
    }
    
}
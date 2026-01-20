export const playLottery = (userNum, lotteryNum) =>{
    if (typeof(userNum) !== 'number'){
        throw new Error("The value introduced is not a number!");
        
    } else if (userNum < 1 || userNum > 10) {
        throw new Error("You must introduce a number between 1 and 10");
    }
}
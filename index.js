import { lottery } from "./src/scripts/lotteryLogic.js";
import { showResult } from "./src/scripts/lotteryUI.js";

const button = document.getElementById('button');
const input = document.getElementById('userNumber');

button.addEventListener('click', () =>{
    const userNumber = Number(input.value);
    const result = lottery(userNumber);
    showResult(result)
})
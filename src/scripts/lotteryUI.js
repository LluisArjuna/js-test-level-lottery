export const showResult = (response) => {
    const results = document.getElementById("results");
    if (response.message === 'Win' || response.message === 'Lose') {
        const result = document.createElement('p')
        result.innerHTML = `Ingresado: ${response.data.userNumber} | Aleatorio: ${response.data.randomNumber} | Resultado: ${response.message}`
        results.appendChild(result)
    } else {
        alert(response)
    }
}
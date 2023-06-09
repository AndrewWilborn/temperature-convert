function convertToC(e){
    e.preventDefault()
    const degreeF = Number(e.target.temperature.value)
    const degreeC = (degreeF - 32) * 5 / 9
    document.querySelector("h2").innerText = degreeF.toFixed(1) + "°F = " + degreeC.toFixed(1) + "°C"
}

document.querySelector("form").addEventListener("submit", convertToC)
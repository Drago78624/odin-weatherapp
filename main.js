import './style.css'

// endpoint : https://api.weatherapi.com/v1/current.json?key=d4f73fff076641849fa161354220609&q=karachi

const form = document.querySelector(".form")


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userInput = form.elements['user-input'].value
    getWeatherData(userInput)
})

async function getWeatherData(countryName){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4f73fff076641849fa161354220609&q=${countryName}`)
    if(response.status === 200){
        const data = await response.json()
        const temperature = data.current.temp_f
        const condition = data.current.condition.text
        const conditionIcon = data.current.condition.icon
        const cloud = data.current.cloud
        const wind = data.current.wind_mph
        const pressure = data.current.pressure_mb
        const humidity = data.current.humidity
        const feelslike = data.current.feelslike_f
    }else {
        console.log("not found");
    }
    
}




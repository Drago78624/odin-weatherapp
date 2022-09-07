import './style.css'

// endpoint : https://api.weatherapi.com/v1/current.json?key=d4f73fff076641849fa161354220609&q=karachi

const form = document.querySelector(".form")
const conditionDisplay = document.querySelector(".condition")
const conditionIconDisplay = document.querySelector(".condition-icon")
const cityDisplay = document.querySelector(".city")
const countryDisplay = document.querySelector(".country")
const temperatureValueDisplay = document.querySelector(".temperature-value")
const feelsLikeDisplay = document.querySelector(".feelslike-value")
const cloudDisplay = document.querySelector(".cloud-value")
const windDisplay = document.querySelector(".wind-value")
const pressureDisplay = document.querySelector(".pressure-value")
const humidityDisplay = document.querySelector(".humidity-value")
const errMsg = document.querySelector(".err-msg")

const displayItemsArr = [conditionDisplay, conditionIconDisplay, cityDisplay, countryDisplay, temperatureValueDisplay, feelsLikeDisplay, cloudDisplay, windDisplay, pressureDisplay, humidityDisplay]


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userInput = form.elements['user-input'].value
    getWeatherData(userInput)
})

async function getWeatherData(countryName){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4f73fff076641849fa161354220609&q=${countryName}`)
    if(response.status === 200){
        errMsg.style.display = "none"
        const data = await response.json()
        const condition = data.current.condition.text
        const conditionIcon = data.current.condition.icon
        const city = data.location.name
        const country = data.location.country
        const temperature = data.current.temp_f
        const feelslike = data.current.feelslike_f
        const cloud = data.current.cloud
        const wind = data.current.wind_mph
        const pressure = data.current.pressure_mb
        const humidity = data.current.humidity
        const weatherDataArr = [condition, conditionIcon, city, country, temperature, feelslike, cloud, wind, pressure, humidity]
        updateDOM(weatherDataArr, displayItemsArr)
    }else {
        errMsg.style.display = "block"
    }
}

getWeatherData("karachi")

function updateDOM(weatherDataArr, displayItemsArr){
    for(let i = 0; i < displayItemsArr.length; i++){
        if(displayItemsArr[i] === conditionIconDisplay){
            displayItemsArr[i].src = weatherDataArr[i]
            console.log("icon contianer");
        }else {
            displayItemsArr[i].innerText = weatherDataArr[i]
        }
    }
}




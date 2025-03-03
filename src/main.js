const input = document.getElementById("input");
const button = document.getElementById("button");
const cityText = document.getElementById("city");
const temperatureText = document.getElementById("temperature");

const apiKey = "2d07ad824ae7e4253d9d9a33c1926489";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 400){
        cityText.innerText = "There was an error finding this city.";
    } else {
        const data = await response.json();
        console.log(data);
        cityText.innerText = data.name
        temperatureText.innerText = Math.round(data.main.temp) + "°C";
    }
}

button.addEventListener("click", () => {
    checkWeather(input.value)
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        checkWeather(input.value)
    }
})
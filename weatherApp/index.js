const formEntry = document.querySelector(".card__form");
const formInput = document.querySelector(".card__form input[type='text']");
const NameField = document.querySelector(".response__output--name");
const tempField = document.querySelector(".response__output--temp");
const humidityField = document.querySelector(".response__output--humidity");

function applyLocalStorage(){
    const cityStored = localStorage.getItem('cityName');
    fetchData(cityStored);
}

async function fetchData(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e80889dc11a33d64f19db413b3db5462`);
        if (!response.ok) {
            throw new Error("Error")
        }
        const data = await response.json();
        
        const cityName = data.name;
        const cityTemp =  `${Math.floor(data.main.temp - 273)}`;
        const cityHumidity = data.main.humidity;

        // console.log(data);
        // console.log(cityName);
        // console.log(Math.floor(cityTemp - 273));
        // console.log(cityHumidity);


        NameField.textContent = cityName;
        tempField.textContent = cityTemp;
        humidityField.textContent = cityHumidity;

        localStorage.setItem('cityName', city);

    } catch (e) {
        console.log(e);
    }
};


formEntry.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = formInput.value;
    formInput.value = "";
    console.log(cityValue);
    fetchData(cityValue);
});

applyLocalStorage();
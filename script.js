document.addEventListener('DOMContentLoaded', function () {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            document.getElementById('countryName').textContent = country.name.common;
            document.getElementById('capital').textContent = `Capital: ${country.capital}`;
            document.getElementById('region').textContent = `Region: ${country.region}`;
            document.getElementById('latlng').textContent = `Latlng: ${country.latlng.join(', ')}`;
            document.getElementById('flag').src = country.flags.svg;
        })
        .catch(error => console.error('Error fetching country data:', error));
});

function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const countryName = document.getElementById('countryName').textContent;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            alert(`Weather in ${countryName}: ${data.weather[0].description}`);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

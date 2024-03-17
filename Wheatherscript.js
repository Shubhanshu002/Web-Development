window.addEventListener('load', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`; // Example URL, replace 'London' with desired location

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

    function displayWeather(data) {
        document.getElementById('location').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('description').textContent = data.weather[0].description;
    }
});

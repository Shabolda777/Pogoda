const apiKey = "25324c8224a28a2b23fdb35ce923947e";
const baseUrl = "https://api.openweathermap.org/data/2.5";
const iconUrl = "https://openweathermap.org/img/wn/";

async function getCurrentWeather(city) {
    try {
        let responce = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);


        if (!responce.ok) {
            if (responce.status === 404) {
                alert("Город не найден. Проверьте название города.");
            }
            else {
                alert('Произошла ошибка при получении данных');
            }
            return;
        }

        let data = await responce.json();
        console.log(data);
    }
    catch(error) {
        console.log('Ошибка: ' + error);
        alert('Произошла ошибка при получении данных: ' + error);

    };
    


}
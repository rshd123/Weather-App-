
let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector("#search-bar");
let img = document.querySelector(".img");
let err = document.querySelector('.not-found'); 
let container = document.querySelector('.container');
let weatherBox = document.querySelector('.weather-box');
let weatherDet = document.querySelector('.weather-details');


async function mainCode(){

    const apiKey = 'c74a208d3c3a5c888d6b7bdda4be7e68';
    const city = searchBar.value;   
    if(city==''){
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    let response = await fetch(url);
    let response2= await response.json();

    if(response2.cod==404){
        container.style.height='400px';     
        weatherBox.classList.remove('active');
        weatherDet.classList.remove('active');
        err.classList.add('active');
        return;
    }

    container.style.height='500px';
    weatherBox.classList.add('active');
    weatherDet.classList.add('active');
    err.classList.remove('active');


    //defining Temparature
    let tempVal = document.querySelector('.temparature');
    let temp = response2.main.temp;
    tempVal.innerHTML = `<p>${Math.floor(temp-273.15)}<sup>°</sup>C</p>`;
    
    //clouds
    let cloudVal=document.querySelector('.description1');
    let cloud = response2.weather[0].description;
    cloudVal.innerHTML = `<p class="description1">${cloud}</p>`

    //image
    switch (cloud){
        case 'clear':
        img.src='./photos/clear.png';
        break;
        case 'clear sky':
        img.src='./photos/clear.png';
        break;


        case 'rain':
        img.src='./photos/rain.png';
        break;

        case 'moderate rain':
        img.src='./photos/rain.png';
        break;

        case 'light intensity shower rain':
        img.src='./photos/rain.png';
        break;

        case 'snow':
        img.src='./photos/snow.png';
        break;

        case 'clouds':
        img.src='./photos/cloud.png';
        break;

        case 'mist':
        img.src='./photos/mist.png';
        break;

        case 'haze':
        img.src='./photos/mist.png';
        break;

        default:
        img.src='./photos/cloud.png';
        break;
    }

    //humidity
    let humVal = document.querySelector(".measure-1");
    let hum = response2.main.humidity;
    humVal.innerHTML = `<p class="measure-1" >${hum}%</p>`;

    //wind speed
    let windVal = document.querySelector(".measure-2");
    let wind = response2.wind.speed;
    windVal.innerHTML=`<p class="measure-2">${wind} km/h</p>`;
}


searchBtn.addEventListener("click",async ()=>{
    mainCode();
});

let inp = document.querySelector("#search-bar");

inp.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        mainCode();
    }
})
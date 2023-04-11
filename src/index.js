// import './sass/index.scss';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import axios from 'axios';

const apiKey = "?key=62d7f1dc6fcb4c748e2115014231104";
const apiUrl = "http://api.weatherapi.com/v1/current.json";



const siteBtn = document.querySelector('.search_button')
const siteInput = document.querySelector('.search-form__input')



async function checkWeather(city){

  const response = await fetch(apiUrl+`${apiKey}`+'&q='+ city +'&aqi=yes');
  const data = await response.json();
  console.log(data);
  const siteIco = document.querySelector('.ico').src = data.current.condition.icon;
  const siteCity = document.querySelector('.city').innerHTML = data.location.name;
  const siteTemp = document.querySelector('.temperature').innerHTML = Math.round(data.current.temp_c);
}

siteBtn.addEventListener('click',  () => {
  
  checkWeather(siteInput.value)
  
  })  
  
  checkWeather()
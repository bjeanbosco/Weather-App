//dom
let locate=document.getElementById('locate')
let Time=document.getElementById('time')
let Site=document.getElementById('site')
let Desc=document.querySelector('desc')
let Temp=document.querySelector('temp')
let Wind=document.querySelector('wind')
let humid=document.querySelector('humid')
let Like=document.querySelector('like')

async function getData(cityName){
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1bb053145c7c9fc298b4da8974213aba`)
   const data =await response.json()
   

   const myData={
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      wind: data.wind.speed,

   }
   const {description,temp,feels_like,humidity,temp_max,temp_min,wind}=myData

   let time=new Date()
  document.getElementById('locate').innerHTML=cityName;
  document.getElementById('desc').innerHTML=description;
  document.getElementById('temp').innerHTML=Math.round(Number(temp)-273) +	"\u2103";
  document.getElementById('humid').innerHTML=`Humidity ${humidity}%`;
  document.getElementById('wind').innerHTML=`Wind Speed ${wind}Km/hr`;
  document.getElementById('like').innerHTML=`Feels Like ${Math.round(Number(feels_like)-273)}\u2103 `;
  document.getElementById('min').innerHTML=`Min temperature ${Math.round(Number(temp_min)-273)}\u2103`
  document.getElementById('max').innerHTML=`Max temperature ${Math.round(Number(temp_max)-273)}\u2103`
  document.getElementById('time').innerHTML=time.getDate() +'/'+Number(time.getMonth()+1)+'/'+time.getFullYear()
  +' '+time.getHours()+':'+time.getMinutes()

let ICon=document.getElementById('icon')
  if(description==='overcast clouds'){
ICon.classList.remove('fas_fa-cloud-sun')
  }
}
function setData(event){
   event.preventDefault()
   let Name=document.getElementById('Name').value;
  Name.value=''
}
getData('kigali')
document.getElementById('btn').addEventListener('click',()=>{
   let Name=document.getElementById('Name').value
   getData(Name);
})

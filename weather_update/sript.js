let loc=document.getElementById("location")
let temp_icon =document.getElementById("temp_icon")
let temp_value= document.getElementById("temp_value")
let climate = document.getElementById("climate")

window.addEventListener("load",()=>{
let long;
let lag;

if (navigator.geolocation){

    navigator.geolocation.getCurrentPosition((position)=>{

        long=position.coords.longitude;
        lag=position.coords.latitude;
        const proxy ="https://cors-anywhere.herokuapp.com/"
        const api= `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lag}&lon=${long}&appid=a6f47cd1fee180230821f01807085504`;
        fetch(api)
            .then((response)=>{
                return response.json();
            })
            .then(data=>{
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}= data.weather[0];
                loc.textContent=name;
                climate.textContent = main;
                temp_value.textContent= Math.round(feels_like-273);
                if (id<250){
                    temp_icon.src='icons/thunder.png'
                }
                if (id<350){
                    temp_icon.src='./icons/drizzle.png'
                }
                if (id<550){
                    temp_icon.src='./icons/rain.png'
                }
                if (id<650){
                    temp_icon.src='./icons/snow.png'
                }
                if (id<800){
                    temp_icon.src='./icons/atmosphere.png'
                }
                if (id===800){
                    temp_icon.src='./icons/clear.png'
                }
                if (id>800){
                    temp_icon.src='./icons/clouds.png'
                }

                console.log(data)
            })
    })
}


    }
)
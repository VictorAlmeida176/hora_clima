let data = document.querySelector(".dia");
let local= document.querySelector(".local");
let hora = document.querySelector(".hora");
let clima=document.querySelector(".clima");
let iconeClima = document.querySelector(".tempo_clima img")

function atualizaHora(){
    let now =new Date()
    let horario = now.getHours();
    let minuto= now.getMinutes();
    hora.innerHTML=`${fixMinutos(horario) }:${fixMinutos(minuto)}`
}

function fixMinutos(time){
    if(time<10){
        return "0" +time
    }else {
        return time
    }
}

setInterval(atualizaHora,1000)

async function clima_local(){

    // if('geolocation' in navigator){
    //     navigator.geolocation.getCurrentPosition(function(position){
    //         let latitude = position.coords.latitude
    //         let longitude = position.coords.longitude
    //     })
    // }else{
    //     alert("Ops, seu navegador não tem suporte para geolocalização")
    // }
    // let url = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longi}&appid=e25f522713f277aa2996371e3e9f40a3&units=metric&lang=pt_br`;
            // Aqui tentei retornar o nome da cidade pela geoLocation porém não consegui
   
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI("são paulo")}&appid=e25f522713f277aa2996371e3e9f40a3&units=metric&lang=pt_br`;
    
    let result=  await fetch(url);
    let json =  await result.json();


    local.innerHTML = ` ${json.name}`;
    clima.innerHTML = `${json.main.temp}<sup>º</sup>`  
    iconeClima.setAttribute("src",`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
  
}




function obtendoDiaMes(){
let getDiaAtual= new Date();
let dia = getDiaAtual.getDay();
let numDia = getDiaAtual.getDate();
let mes = getDiaAtual.getMonth();
// Arrumar o dia
let semana = ["Dom", "Seg", "Ter", "Quar", "Qui", "Sex", "Sab"];
let mesArray = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ];

data.innerHTML= `${semana[dia]}, ${numDia} de ${mesArray[mes]}`
};



clima_local()
obtendoDiaMes()


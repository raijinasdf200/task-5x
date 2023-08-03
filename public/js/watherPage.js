const weatherPage =document.querySelector('#weather')
window.onload=function x(){
    weatherPage.classList.add("active")
} 

let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(document.getElementById('address').value)
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecastx')
const locationM =document.getElementById('locationM')
const locat =document.getElementById('locat')
const cont =document.getElementById('cont')
const iconx =document.getElementById('icon')
const conditionx =document.getElementById('condition')
const tempx =document.getElementById('tempx')
const wind =document.getElementById('wind')
const pre =document.getElementById('pre')
const press =document.getElementById('press')
const realtime =document.getElementById('realtime')
// async --> function return promise
let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:5000/weatherx?address='+address)
        const data = await res.json()
        if(data.error){
            locationF.innerText =""
            forecastF.innerText =""
            errorF.innerText = data.error
        }
        else {
            realtime.style.display="block"
            locationM.innerText = data.location
            locat.innerText=data.forecast.location
            cont.innerText=data.forecast.countryx
            icon.setAttribute("src",data.forecast.icon)
            conditionx.innerText=data.forecast.condition
            tempx.innerText=data.forecast.temp
            wind.innerText=data.forecast.windSpead
            pre.innerText=data.forecast.precipmm
            press.innerText=data.forecast.pressuremb
            forecastF.innerText = JSON.stringify(data.forecast)
            errorF.innerText =""
           
        }
    }
    catch(e){
        console.log(e)
    }
}

// 3 
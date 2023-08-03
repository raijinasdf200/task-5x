//  ------------- static pages
// -------------------------------------------------
const express= require('express')
const app=express()
const port=process.env.PORT || 5000

const path = require('path')
const publicDirectory =path.join(__dirname,'../public')

    app.use(express.static(publicDirectory))


// app.get('/',(req,res)=>{
//     res.send("hello world")

// })
// app.get('/service',(req,res)=>{
//     res.send({
//         titele:"medo",
//         name:"rezk"
//     })

// })

// ----------------- dynamic bages
// ----------------------------------
app.set('view engine', 'hbs');

const viewDirectory= path.join(__dirname,"../temp/views")
app.set('views', viewDirectory);

const hbs=require('hbs')
const partials =path.join(__dirname,"../temp/partials")
hbs.registerPartials(partials)
///////////////////////////////////////////////////////////

app.get('/',(req,res)=>{
    res.render('index', {
        title:"welcome to our site",
        webname:"Rai weather",
        disc:"Stay ahead of the weather with our application",
        discx:"Get the latest weather updates and forecasts for your area.",
        title2:"introduction",
        desc2:"WeatherApp is a simple and reliable app that provides accurate and timely weather information for any location. You can check the current conditions, hourly forecasts, and alerts for severe weather. WeatherApp helps you plan your day and stay safe in any weather."
    })
})
app.get('/weather',(req,res)=>{
    res.render('weather', {
        
    })
})





const gecode=require('./data1/geocode')
const forecast = require('./data1/forecast')
const { error } = require('console')
app.get("/weatherx",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"you must enter an address"
        })
    }
    gecode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.longtude,data.latitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location:req.query.address
            })
        })
    })
})








app.get("*",(req,res)=>{
    res.send("error 404  page not found")
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})


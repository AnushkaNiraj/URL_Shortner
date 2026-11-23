const express=require('express')

const path=require('path')
const app=express();
const port=3000;

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

const URLroute=require('./routes/url')
const staticRoute=require('./routes/staticRouter')
const {connectToMongoDB}=require('./connect')

app.use("/url",URLroute)
app.use("/",staticRoute)
connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("DataBase Connected"))

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
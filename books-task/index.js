const express=require("express")
const app  = express()
const path =require("path")

const author=require("./rotues/rotues")
const books=require("./rotues/books")


app.use(express.static(path.join(__dirname,"public/styles")))
app.use(express.static(path.join(__dirname,"public/scripts")))
app.use(express.static(path.join(__dirname,"public/pages")))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine
app.use("/books",author)
app.use("/data",books)
app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/home.html"))
})

app.listen(4000,function(){
    console.log("server started on port number 4000")
})
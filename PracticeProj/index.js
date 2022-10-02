// import module from different file

/*
        const app = require('./app')
        const arr = [5,3,5,6,7,87,3,1];

        let result  =  arr.filter((data) =>{
            return data>5
        })

        console.log(app)
        console.log(result)

*/

        // console.log("nodemon running...")
        // console.log("path: ",__dirname)
        // console.log("file name: ",__filename)


//create file system
/*
        const fs = require('fs')
        fs.writeFileSync("NewFile","Bikash Maharana")

*/

//create server
/*
        const http = require('http');

        http.createServer((req,res)=>{
            res.write("<h1>This is first Title </h1>")
            res.end();
        }
        ).listen(4500);

*/

// expressJs code 
const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.join(__dirname,'public')


//load the static pages
// app.use(express.static(publicPath))


// app.get('',(req,res) =>{
//         res.send("This is home page")
// })

// app.get('/about',(req,res) =>{
//         res.send("This is About page")
// })


//use of middlewire

const route = express.Router();
const reqFilter = require('./middleware')
route.use(reqFilter)
app.use('/',route)

// app.use(reqFilter)

//html extension removed from the url

app.get('',(req,res) =>{
        res.sendFile(`${publicPath}/index.html`)
})

route.get('/home',(req,res) =>{
        res.sendFile(`${publicPath}/home.html`)
})


//dynamic page
app.set('view engine','ejs');

app.get('/profile',(req,res) =>{
        const user = {
                name: "Bikash Maharana",
                email: "bikashmaharana232@gmail.com",
                city: "Bhubaneswar",
                skills: ["Java","Angular","Node"]
        }
        res.render('profile',{user})
})

app.get('*',(req,res) =>{
        res.sendFile(`${publicPath}/notFound.html`)
})


app.listen(5000)
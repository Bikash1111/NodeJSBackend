
// expressJs code 
const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.join(__dirname,'public')

//mongodb connection

const dbConnect = require('./mongodb')

// promise method access
/*
dbConnect().then((res) =>{
        res.find().toArray().then((data) =>{
                console.warn(data)
        })
})
*/

const main = async () =>{
        let data = await dbConnect()
        data = await data.find().toArray();
        console.log(data)
}

main();



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
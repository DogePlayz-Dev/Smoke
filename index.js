console.clear()
const express = require('express')
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, "views"))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get("/", (req,res) => {
    res.render('index')
})

app.listen(8500, () => {
    console.log('yermom')
})
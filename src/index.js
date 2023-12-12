const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Import express-handlebars, đặt tên là exphbs

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')));

app.use(morgan('combined'));

app.engine('.hbs', exphbs.engine({
    extname: '.hbs'
})); // Sử dụng exphbs() thay vì handlebars()
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// app.set('views','./src/resources/views')
app.get('/', (req, res) => {
    res.render('home');
});


app.get('/news',(req,res)=>{
    res.render('news');
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

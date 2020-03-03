const express = require('express');
const path = require('path');
const morgan = require('morgan');

//INIT

const app = express();

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWAREZ
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

//ROUTES
app.use(require('./routes/entries.routes'));

//ERRORS
app.use((req,res)=>{
    res.status(404).render('404');
});

//START SERVER
app.listen(app.get('port'), () =>{
    console.log('Server on PORT ', app.get('port'));
})
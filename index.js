const express = require('express');

const app  = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));

app.get('/',(req,res ) => res.render('home'));

app.listen(process.env.PORT || 5000,()=>console.log('server started'));
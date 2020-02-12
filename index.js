const express=require('express');
const app=express();
const landingPage=require('./views/main_page')
app.use(express.static('public'));

app.get('/ram',(req,res)=>{
    res.send(landingPage());
});

app.listen(3000, () => {
    console.log('Listening');
  });

const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieSession=require('cookie-session');
const {check,validationResult}=require('express-validator');
const app=express();


const landingPage=require('./views/main_page');
const User       =require('./models/user');
const {createPassword,comparePasswords}=require('./Password');
const {requireLogin}=require('./middleware');
const signup=require('./User/SignUp');

mongoose.connect("mongodb://localhost/MonkTree",{
	useUnifiedTopology:true,
	useNewUrlParser:true
}).then(()=>{
  console.log("connected to DB!");
}).catch(err=>{
	console.log("error");
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
);
////////AUTHENTICATION////////////////////////






app.get('/',requireLogin,(req,res)=>{
    res.send(landingPage());
});
/////ROUTES//////////////////////////////////
app.get('/signup',(req,res)=>{
    res.send(signup({req}));
});

app.post('/signup',[
    check('password')
        .trim()
        .isLength({min:4,max:10})
        
        .custom(password=>{
            if(password==="react")
                throw new Error("fuck you");
        })
        .withMessage("Must be between 4 to 10 characters"),

       check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    
    .custom( email => {
      User.find({username:email},(err,rec)=>{
        if (rec) {
        throw new Error('Email in use');
      }
      })
      
    })
    .withMessage('Must be a valid email')
        

    ],async (req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty())
        {   console.log(errors);
            return res.send(signup({req,errors}));
        }
        console.log(errors);
    password=await createPassword(req.body.password);
    req.body.password=password;
    User.create(req.body,(err,rec)=>{
        if(err)
            res.redirect('/signup');
        else{
            User.find({email:rec.email},(err,rec)=>{
                if(!rec)
                {
                    res.session.userId=rec._id;
                    res.redirect('/');
                }
                
                    
            })
            //req.session.userId=rec._id;
           //res.redirect('/');
                }
        
    })
});

app.get('/signout',(req,res)=>{
    req.session.user=null;

})

app.listen(3000, () => {
    console.log('Listening');
  });

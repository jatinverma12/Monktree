const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path = require('path')
const cookieSession=require('cookie-session');
const {check,validationResult}=require('express-validator');
const app=express();
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage(), limits:{files: 5}}) ;
const { body } = require('express-validator');

const landingPage=require('./views/main_page');
const User       =require('./models/user');
const {createPassword,comparePasswords}=require('./Password');
const {requireLogin}=require('./middleware');
const signup=require('./User/SignUp');
const signin=require('./User/SignIn');

const MONGO_USERNAME = 'jatin';
const MONGO_PASSWORD = 'qwerty';
const MONGO_HOSTNAME = 'crunchstocks.com';
const MONGO_PORT = '27017';
const MONGO_DB = 'USERINFO';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url,{
  useNewUrlParser:true
}).then(()=>{
  console.log("connected to DB!");
}).catch(err=>{
  console.log(err);
});


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
);
////////AUTHENTICATION////////////////////////



app.get('/',(req,res)=>{
  res.send(landingPage())
})
/////ROUTES//////////////////////////////////
app.get('/signup',(req,res)=>{
    res.send(signup({req}));
});

app.post('/signup',[
    check("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("This is not email !")
      .custom(async email => {
        try {
          const user=await User.findOne({ email });
          if(user){
            throw new Error(`User found - ${email} is taken`);
          }
          return Promise.resolve(true);
          
        } catch (error) {
          throw new Error(error);
        }
      }),

      check("password")
      .trim()
      .isLength({ min: 4, max: 10 })
      .withMessage("Must be between 4 to 10 characters")
    
        ],
async (req,res)=>{
        const errors=validationResult(req);
    

        if(!errors.isEmpty())
        {   console.log(errors);
            return res.send(signup({req,errors}));
        }
        
    const password=await createPassword(req.body.password);
    req.body.password=password;
    User.create(req.body,(err,rec)=>{
        if(err){
            console.log(err);
           return res.redirect('/signup');}
        else{
            console.log(rec);
              req.session.userId=rec._id;
               return res.redirect('/');

        } 
            //req.session.userId=rec._id;
           //res.redirect('/');
        });
});


app.get('/signin',(req,res)=>{
    res.send(signin({req}));
});

app.post('/signin',
    [ check("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("This is not email !")
      .custom(async email => {
        try {
          const user=await User.findOne({ email });
          console.log(user==null);
          if(user==null){
            throw new Error(`Email not found`);
          }
          return Promise.resolve(true);
          
        } catch (error) {
          throw new Error(error);
        }
      }),

      check("password")
      .trim()
      .isLength({ min: 4, max: 10 })
      .withMessage("Must be between 4 to 10 characters")
      .custom(async (password,{req})=>{
        try{
            const validatingPass=await createPassword(req.body.password);
            const u=await User.findOne({email:req.body.email});

            if(!u){
                throw new Error('Invalid password');
            }

            else if(u.password!==validatingPass)
            {
                throw new Error("Password is incorrect. Try again");
            }
            return Promise.resolve(true);

        }catch(error){
            throw new Error(error);
        }
      })


    ]
  ,(req,res)=>{
        const errors=validationResult(req);
    

        if(!errors.isEmpty())
        {   console.log(errors);
            return res.send(signin({req,errors}));
        }

        req.session.userId=rec._id;
        return res.redirect('/');

});


app.get('/signout',requireLogin,(req,res)=>{
    req.session.userId=null;
    res.redirect('/');

});


app.get('/download/:name',(req,res)=>{
  var fs = require('fs'),
    request = require('request');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(`http://crunchstocks.com/images/${req.params.name}`, `${req.params.name}`, function(){
  console.log('done');
});
});

app.listen(80, () => {
    console.log('Listening');
  });

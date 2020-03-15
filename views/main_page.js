module.exports=()=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="index.css">
        <title>CrunchStock</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-size: 1rem;">
            <a class="navbar-brand" href="#">Crunchstock</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Image
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Footage
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Editorial
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Music
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                </li>
              </ul>
              <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                <a class="btn btn-outline-danger" href="/signin">Login</a>
                <a class="btn btn-outline-danger" href="signup">Sign Up</a>
    
            <!-- </form> -->
            </div>
          </nav>
    
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
                <div col-8>
                    <input class="form-control " type="search" placeholder="Search royalty free-images, vectors and illustrations" aria-label="Search" style="width: 100%">
                </div>
                <button class="btn btn-danger" type="submit">Search</button>
            </form>
    
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">ActionActionActionAction</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
          </nav> <br>
    <!------------------------background---------------------->
    
    <div class="background">
      <!-- <img src="./images/lil" class="img1"> -->
      <div class="container">
        <div class="row" id="back">
        <div class="col-md-6 col-sm-12 col-xs-12">
            <h1>Get 10 free images now</h1> <br>
            <ul>
                <li>
                        •  Try the Shutterstock 10 images/month plan for free. 
                </li>
                <li>
                        •  If you cancel within the first month, you pay nothing.
                </li>
                <li>
                        •  Use code PICK10FREE at checkout. 
                </li>
            </ul>
        </div>
    
          <div class="col-md-6 col-sm-12 col-xs-12" id="trial">
            <h4>Free 1 month trail, cancel anytime.</h4>
            <p>
               <p class="para">After your first month:</p> 
                <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                          10 images/month - annual plan   
                        </label> 
                </div>
                <br> <button type="button" class="btn btn-danger btnn">Start your free trial</button>
    
            </p>
           </div>    
      </div>
    </div>
    </div>
    <div class="blackb">
      Looking for corporate, agency or media solutions?
      <button type="button" class="btn btn-outline-danger">Explore enterprise solutions</button>
    
    </div>
    
    <br> <br> <br> <br>
    
    <!------------------Brands------------------>
    <div>
        <h3 style="text-align: center">Shutterstock powers creativity for global brands
        </h3>
        <div class="container">
            <div class="row" style="padding: 2rem;">
            <img src="./images/g.jpeg" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic">  
            <img src="./images/amc.png" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic"> 
            <img src="./images/aol.png" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic"> 
            <img src="./images/bbdo.png" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic"> 
            <!-- <img src="./images/buzzfeed.jpeg" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic">  -->
            <img src="./images/cap.png" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic"> 
            <img src="./images/marvel.png" alt="" class="col col-md-2 col-sm-12 col-xs-12 brandpic"> 
            </div>
        </div>
    </div>
    
    <!-- 
    <p class="erase">
      <div class="container billion">
        <img src="./images/ok.jpeg" alt="Notebook">
        <div class="row">
            <div style="border: 4px solid rgb(245, 241, 241);width: 180px; margin-left: 80px; padding: 2px;">
                    <h3>$1 BILLION</h3> <p style="font-size: 0.8rem"><b>CONTRIBUTOR EARNINGS</b> </p>
    
            </div><br>
            <p style="font-size: 0.8rem; " class="erase"><b>See how talent from all around the world made it possible.</b> 
            </p>
            <button type="button" class="btn btn-danger btnn" style="width: 15%; margin-left: 9%">Check it out</button>
        </div>
    </div>
    </p> -->
    
    <div class="container v-container">
      <img src="./images/ok.jpeg" alt="Snow"  style="width:100%;height: 85%;">
       <div class="textt">
        <h4>$1 BILLION</h4> <p style="font-size:"><b>CONTRIBUTOR EARNINGS</b> </p>
       </div>
    </div>
    
    <br>
    
    
    
    
    
    
    <!-------------------content------------>
    
    
      <div class="container">
        <div class="row">
            <h4 class="h4">
                Royalty-free stock images, photos, videos, and more for your creative projects
            </h4>
        </div>
        <div class="row my-row">
            <div class="col col-md-4 col-sm-12 col-xs-12">
            <a href="#" style="padding: 40px; cursor: default; text-decoration: none">  
            <div class="my-card">
                <img src="./images/mount.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer">
                  <h6 class="card-title">Photos</h6>
                  <p class="card-text">
                      Explore professional stock photos. Thousands Added daily.</p>
                </div>
              </div> </a>
            </div>
    
            <div class="col col-md-4 col-sm-12 col-xs-12">
              <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
              <div class="my-card">
                  <img src="./images/water.jpeg" class=" conpic" alt="...">
                  <div class="card-body"  style="cursor: pointer">
                    <h6 class="card-title">Footage</h6>
                    <p class="card-text">
    
                Experience HD and 4K video clips, including exclusive content.
              </p>
                  </div>
                </div></a>
                  </div>
    
                  <div class="col col-md-4 col-sm-12 col-xs-12">
                <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                <div class="my-card">
                    <img src="./images/head.jpeg" class=" conpic" alt="...">
                    <div class="card-body"  style="cursor: pointer">
                      <h6 class="card-title">Music</h6>
                      <p class="card-text">
    
                  Discover hand-picked PRO music not available anywhere else.</p>
                     
                    </div>
                  </div> </a>
                  </div>
    
        </div>
      </div>
    
     <br>
        <div class="container">
            <div class="row">
                <h4 class="h4">
                    Optimize your work flow    
                  
                  </h4>
            </div>
            <div class="row my-row" >
                <div class="col col-md-4 col-sm-12 col-xs-12">
                <a href="#" style="padding: 40px; cursor: default; text-decoration: none">  
                <div class="my-card">
                    <img src="./images/cell.jpeg" class=" conpic" alt="...">
                    <div class="card-body" style="cursor: pointer">
                      <h6 class="card-title">
                          Creativity on the go</h6>
                      <p class="card-text">
                          
                  Discover and download directly from the app on iOS or Android.</p>
                    </div>
                  </div> </a>
                </div>
        
                <div class="col col-md-4 col-sm-12 col-xs-12">
                  <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                  <div class="my-card">
                      <img src="./images/editor.jpeg" class=" conpic" alt="...">
                      <div class="card-body"  style="cursor: pointer">
                        <h6 class="card-title">                        Shutterstock Editor
                          </h6>
                        <p class="card-text">
        
    
                           
                            Add logos, text, filters, and more with a free and intuitive design tool.
                            
                          
                             
                                          </p>
                      </div>
                    </div></a>
                      </div>
        
                      <div class="col col-md-4 col-sm-12 col-xs-12">
                    <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                    <div class="my-card">
                        <img src="./images/api.jpeg" class=" conpic" alt="...">
                        <div class="card-body"  style="cursor: pointer">
                          <h6 class="card-title">                          API solutions
                            </h6>
                          <p class="card-text">
        
                              Enjoy our range of free plugins to help you work faster and smarter.
                              </p>
                         
                        </div>
                      </div> </a>
                      </div>
        
            </div>
        </div>
      <br><br>
      
    <div style="text-align:center">
        <h3 class="h4" style="text-align: center">Stunning content, straightforward prices
          </h3>
          <button type="button" class="btn btn-danger btnn" style="width: 22%; height: 65%;padding: 4px;">Find your plan</button>
    
    </div>
      <br> <br>
    <br> <br>
    
    
    <!---------------------valentine--------------------------->
    
    <div class="container" style="color: black">
      <div class="row">
          <h4 class="h4">
              Royalty free stock assets curated for you        
            </h4>
      </div>
    
      <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12">
             
            <div class="container v-container">
                <img src="./images/rose.jpeg" alt="Snow" class="val">
                 <div class="centeredd">Valentine's Day</div>
              </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="row">
              
              <div class="container v-container">
                  <img src="./images/des.jpeg" alt="Snow" class="valentine">
                   <div class="centeredd">January Fresh</div>
                </div>
            </div>
            <div class="row">
                
                <div class="container v-container">
                    <img src="./images/sea.jpeg" alt="Snow" class="valentine">
                     <div class="centeredd">Pantone Color of the Year: Classic Blue</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
    
    <br> <br> <br> 
    
    
    <!--------1------------>
    
    <div class="container">
        <div class="row">
            <h4 class="h4">
                Sign up and get a free image or photo every week
              
              </h4>
        </div>
        <div class="row my-row" >
            <div class="col col-md-4 col-sm-12 col-xs-12">
            <a href="#" style="padding: 40px; cursor: default; text-decoration: none">  
            <div class="my-card">
                <img src="./images/skii.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer">
                  <h6 class="card-title">                  Free stock image of the week
                    </h6>
                  <p class="card-text">
                      By Altrendo Images <br> <br>
                     Download    </p>
                      </div>
              </div> </a>
            </div>
    
            <div class="col col-md-4 col-sm-12 col-xs-12">
              <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
              <div class="my-card">
                  <img src="./images/car.jpeg" class=" conpic" alt="...">
                  <div class="card-body"  style="cursor: pointer">
                    <h6 class="card-title">                    Free stock vector of the week
                      </h6>
                    <p class="card-text">
    
                        
                        By Graphite and Charcoal <br> <br>
                      Download      </p>
                  </div>
                </div></a>
                  </div>
    
    
                  <div class="col-md-4 col-sm-12 col-xs-12">
                        <form action="/action_page.php" class="container" style="top: -12%; padding: 10px; margin-right: -20px; height: 200px; color: black">
                          <form action="/action_page.php">
                        <label for="email"></label>
                        <input type="text" placeholder="Email address" name="email" class="txt" required style="height: 40px; padding:10px; margin-top: -20px; background-color: white; font-size: 1rem">
                    
                        <label for="psw"></label>
                        <input type="password" placeholder="Password" name="psw" class="pass" required style="height: 40px; padding:10px ; margin-top: -30px;background-color: white; font-size: 1rem">
                    
                        <button type="submit" class="btn btn-danger btnn" style="height: 40px; padding:10px">Continue</button> <br> <br>
                        <p class="para">By creating an account, I agree to Shutterstock's <a href="">Website terms</a>, <a href="">Privacy policy</a>  and <a href="">Licensing terms</a> .
                        </p>    
                        <p class="para">Already have an account? <a href="">Log in</a> 
                        </p>
                      </form>
                    
                  </div>
        </div>
      </div>
    <br><br><br><br>
    
    <!----------2----------->
    
    
      <div class="container">
          <div class="row">
              <h4 class="h4">
                  Explore Shutterstock's collection of creative assets
                
                </h4>
          </div>
          <div class="row my-row" >
              <div class="col col-md-4 col-sm-12 col-xs-12">
              <a href="#" style="padding: 40px; cursor: default; text-decoration: none">  
              <div class="my-card">
                  <img src="./images/edi.jpeg" class=" conpic" alt="...">
                  <div class="card-body" style="cursor: pointer">
                    <h6 class="card-title">                    Introducing Shutterstock Custom
                      </h6>
                    <p class="card-text">
    
                        On-brand content created for you.                  </p>
                  </div>
                </div> </a>
              </div>
      
              <div class="col col-md-4 col-sm-12 col-xs-12">
                <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                <div class="my-card">
                    <img src="./images/cus.jpeg" class=" conpic" alt="...">
                    <div class="card-body"  style="cursor: pointer">
                      <h6 class="card-title">                      Shutterstock for Final Cut Pro
                        </h6>
                      <p class="card-text">
      
    
                         
                          Access incredible stock content as you edit.
                          
                              </p>
                    </div>
                  </div></a>
                    </div>
      
                    <div class="col col-md-4 col-sm-12 col-xs-12">
                  <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                  <div class="my-card">
                      <img src="./images/col.jpg" class=" conpic" alt="...">
                      <div class="card-body"  style="cursor: pointer">
                        <h6 class="card-title">                      Explore Offset by Shutterstock
                          </h6>
                        <p class="card-text">
      
                            A curated collection of premium images.    </p>                   
                      </div>
                    </div> </a>
                    </div>
          </div>
    
            <div class="row my-row" >
                <div class="col col-md-4 col-sm-12 col-xs-12">
                <a href="#" style="padding: 40px; cursor: default; text-decoration: none">  
                <div class="my-card">
                    <img src="./images/lap.jpeg" class=" conpic" alt="...">
                    <div class="card-body" style="cursor: pointer">
                      <h6 class="card-title">                        Learn about Shutterstock Premier
                        </h6>
                      <p class="card-text">
                          A creative platform built for your team. </p>
                        </div>
                  </div> </a>
                </div>
        
                <div class="col col-md-4 col-sm-12 col-xs-12">
                  <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                  <div class="my-card">
                      <img src="./images/build.jpeg" class=" conpic" alt="...">
                      <div class="card-body"  style="cursor: pointer">
                        <h6 class="card-title">                        Explore Shutterstock Select
                          </h6>
                        <p class="card-text">
      
                            
                            
                            Our new premium stock footage
                            
                                    </p>
                      </div>
                    </div></a>
                      </div>
        
                      <div class="col col-md-4 col-sm-12 col-xs-12">
                    <a href="#" style="padding: 40px; cursor: default; text-decoration: none">
                    <div class="my-card">
                        <img src="./images/puz.jpeg" class=" conpic" alt="...">
                        <div class="card-body"  style="cursor: pointer">
                          <h6 class="card-title">                        Tried and trusted partner
                            </h6>
                          <p class="card-text">
                              How top companies use Shutterstock.   </p>
                         
                        </div>
                      </div> </a>
                      </div>
        
            </div>
          </div>  
    
    
    
    
    
    
      <!------------------categories------------------>
    
    <div class="container">
        <div class="row cat">
            Explore Shutterstock's collection of creative assets
          </div>
        <div class="row cat">
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Abstract</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Business/Finance</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Holidays</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Objects</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Sports/Recreation</div>
        <!-- </div>
        <div class="row cat"> -->
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Animals/Wildlife</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Celebrities</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">
              Illustrations/Clip-Art</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Parks</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Technology</div>
        <!-- </div>
        <div class="row cat"> -->
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Arts</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Editorial</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Industrial</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">People</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Transportation</div>
        <!-- </div>
        <div class="row cat">   -->
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Backgrounds/Textures</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Education</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Interiors</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Religion</div>
          <div class="col-md-3 col-sm-6 col-xs-6 bet">Vectors</div>
        <!-- </div>
        <div class="row cat">   -->
            <div class="col-md-3 col-sm-6 col-xs-6 bet">Beauty/Fashion</div>
            <div class="col-md-3 col-sm-6 col-xs-6 bet">Food and Drink</div>
            <div class="col-md-3 col-sm-6 col-xs-6 bet">Miscellaneous</div>
            <div class="col-md-3 col-sm-6 col-xs-6 bet">Science</div>
            <div class="col-md-3 col-sm-6 col-xs-6 bet">Vintage</div>
          <!-- </div>
          <div class="row cat">   -->
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Buildings/Landmarks</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Healthcare/Medical</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Nature</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Signs/Symbols</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet"></div>
            </div>
    </div>
    
    
    <br><br><br>
    <div class="container">
        <div class="row cat">
            Popular stock image searches in January
          </div>
          <div class="row cat">
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Happy new year images</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Inspirational words</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Hand gestures meaning with</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Cat Silhouette</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Religious Symbols</div>
            <!-- </div>
            <div class="row cat"> -->
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Clip Art</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Pictures of Unicorns</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Pictures</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Color Combinations</div>
              <!-- <div class="col-md-3 col-sm-6 col-xs-6 bet"></div> -->
            <!-- </div>
            <div class="row cat"> -->
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Praying Hands</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Deer Tracks</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Dragon Pictures</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Military Symbols</div>
              <!-- <div class="col-md-3 col-sm-6 col-xs-6 bet"></div> -->
            <!-- </div>
            <div class="row cat">   -->
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Peace Sign</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Calligraphy Letters</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Frostbite Pictures</div>
              <div class="col-md-3 col-sm-6 col-xs-6 bet">Rainbow Pictures</div>
              <!-- <div class="col-md-3 col-sm-6 col-xs-6 bet"></div> -->
            <!-- </div>
            <div class="row cat">   -->
                <div class="col-md-3 col-sm-6 col-xs-6 bet">Graffiti Letters</div>
                <div class="col-md-3 col-sm-6 col-xs-6 bet">Smiley Face</div>
                <div class="col-md-3 col-sm-6 col-xs-6 bet">Music Notes Images</div>
                <div class="col-md-3 col-sm-6 col-xs-6 bet">Backgrounds</div>
                <!-- <div class="col-md-3 col-sm-8 col-xs-8 bet"></div> -->
              </div>
    </div>
    
    <div style="text-align: center; padding: 30px;">
        <h4>Royalty free stock images, photos, and videos
          </h4>
          <p style="  color: rgb(117, 115, 115);  font-size: 0.9rem; padding: 10px; width: 65%; margin-left: 18%; line-height: 1.3rem;">
           <b>   Shutterstock offers the best quality, royalty free stock images, photos, vectors, illustrations, footage, video, and music for nearly any application. From illustrations to vectors, when you need the perfect stock image for your website or blog, we have you covered. Our massive selection of stock footage and music tracks are the ideal choice to set the scene in your next short or feature film.
            </b> </p>
    </div>
    
    <!------------------Signup------------------>
    
    <div class="bg-img">
      <div class="row" id="">
      <div class="col-md-6 col-sm-12 col-xs-12" id="sign">
                    <h2>Access exclusive features with a free account</h2> <br>
                   <p style="font-size: 1rem;">Create your free account and start downloading incredible royalty-free images, stock footage and music tracks now. Save and share your favorite assets, try watermarked royalty free images or videos before you buy, plus so much more.</p> 
      </div>
    
      <div class="col-md-6 col-sm-12 col-xs-12">
        <form action="/action_page.php" class="container s-container">
          <h1>Signup</h1>
      
          <label for="email"></label>
          <input type="text" placeholder="Email address" name="email" class="txt" required>
      
          <label for="psw"></label>
          <input type="password" placeholder="Password" name="psw" class="pass" required>
      
          <button type="submit" class="btn btn-danger btnn">Continue</button> <br> <br>
          <p class="para">By creating an account, I agree to Shutterstock's <a href="">Website terms</a>, <a href="">Privacy policy</a>  and <a href="">Licensing terms</a> .
          </p>    <br>
          <p class="para">Already have an account? <a href="">Log in</a> 
          </p>
        </form>
      </div>
    </div>
    
    </div>
    <br> <br> <br>
    
    
    
    
    
    
    <!------------------------------------------Footer-------------------------------------->
    
    <main>
            
          </main>
        <!--Some of this HTML is directly from Pavilion.  You can change it to whatever you want if you want to mimic this design.-->
        <footer class="flex-rw">
                <p class="footerline1">
                        Over 31,58,08,984 royalty-free images with 14,51,656 new stock images added weekly.
                </p>
            <div class="container "> 
                <div class="row">
          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">Our Company</h4></li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Sell Content</li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Subscribe/Renew</li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">About Us</li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Careers</li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Press/Media</li>
            <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Investor relations</li>
    
          </ul>
          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">Shutterstock</h4></li>
        
        
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Home</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Stock photos</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Vector Images</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Editorial</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Footage</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Music</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Blog</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Coupons</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Royalty free images</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Trending topics</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Free images of the week</li>
                
          </ul>
          <ul class="footer-list-top">
            <li id='help'>
              <h4 class="footer-list-header">Discover</h4></li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Big Stock</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Offset</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Premier</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Premium beats</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Custom</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Apps</li>
              <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Mobile apps</li>
      
          </ul>
          <ul class="footer-list-top">
                <li>
                  <h4 class="footer-list-header">Help</h4></li>
            
            
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Get help</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Partner</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Developer</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Affiliate/Reseller</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">International Reseller</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Legal</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Terms of use</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">Privacy policy</li>
                  <li class="generic-anchor footer-list-anchor" itemprop="significantLink">License agreement</li>
    
          
              </ul>
           <ul class="footer-list-top">
                <div class="btn-group">
                        <button type="button" class="btn btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Language
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <button class="dropdown-item" type="button">English</button>
                          <button class="dropdown-item" type="button">Dutch</button>
                          <button class="dropdown-item" type="button">French</button>
                        </div>
                      </div>
           </ul>
            
        </div>
     </div>
      <hr style="background-color: red">
    
          <section class="footer-bottom-section flex-rw">
        <div class="footer-bottom-wrapper">   
        <i class="fa fa-copyright" style="font-size: 10px;" role="copyright">
         
        </i> <address class="footer-address" role="company address">2003-2020 Shutterstock, Inc.</address><span class="footer-bottom-rights"> </span>
            </div>
            <!-- <div style="padding: 3rem;"> -->
            <i class="fa fa-facebook-official" style="font-size:24px; color: white; padding: 0.5rem;";></i>
            <i class="fa fa-twitter" style="font-size:24px; color: white; padding: 0.5rem;"></i>
            <i class="fa fa-instagram" style="font-size:24px; color: white; padding: 0.5rem;"></i>
            <i class="fa fa-linkedin-square" style="font-size:24px; color: white; padding: 0.5rem;";></i>
            <i class="fa fa-youtube-play" style="font-size:24px; color: white; padding: 0.5rem;";></i>
            <i class="fa fa-vimeo" style="font-size:24px; color: white; padding: 0.5rem;";></i>
            <!-- </div> -->
        </section>
        </footer>
    </body>
    </html>
    `
}
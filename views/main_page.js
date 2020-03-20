module.exports=()=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/fontawesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" href="index.css">
        <title>CrunchStock</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-size: 1rem;">
            <a class="navbar-brand" href="#">Crunchstock</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                <ul class="nav navbar-nav navbar-right">
                <li><a href="/signup" class="btn btn-outline-danger">SignUp</a></li>
                <li><a href="/signin" class="btn btn-outline-danger">Login</a></li>
                <li><a href="/signout" class="btn btn-outline-danger">Logout</a></li>
                </ul>
    
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
    
          </nav> <br>
    <!------------------------background---------------------->
    
    
    
      <div class="container">
        <div class="row">
            <h1 class="h4">
                Images
            </h1>
        </div>
        <div class="row my-row" style="margin-top:1.25rem">
            <div class="col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/1.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/1.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/2.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/2.jpg">Download</a>
                  
                </div>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/3.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/3.jpg">Download</a>
                  
                </div>
            </div>
        </div>

        <div class="row my-row" style="margin-top:1.25rem">
            <div class="col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/4.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/4.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class="col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/5.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/5.jpg">Download</a>
                  
                </div>
            </div>

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/6.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/6.jpg">Download</a>
                  
                </div>
            </div>
        </div>

        <div class="row my-row" style="margin-top:1.25rem">
            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/7.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/7.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/8.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/8.jpg">Download</a>
                  
                </div>
            </div>

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/9.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/9.jpg">Download</a>
                  
                </div>
            </div>
        </div>

        <div class="row my-row" style="margin-top:1.25rem">
            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/10.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/10.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/11.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/11.jpg">Download</a>
                  
                </div>
            </div>

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/12.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/12.jpg">Download</a>
                  
                </div>
            </div>
        </div>


        <div class="row my-row" style="margin-top:1.25rem">
            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/13.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/13.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/14.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/14.jpg">Download</a>
                  
                </div>
            </div>

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/15.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/15.jpg">Download</a>
                  
                </div>
            </div>
        </div>

        <div class="row my-row" style="margin-top:1.25rem">
            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/16.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/16.jpg">Download</a>
                  
                </div>
            </div>
        

            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <img src="./images/17.jpeg" class=" conpic" alt="...">
                <div class="card-body" style="cursor: pointer;padding:0.1rem;">
                  <a class="btn btn-success" href="/download/17.jpg">Download</a>
                  
                </div>
            </div>

            
        </div>

        <div class="row" style="margin-top:2rem">
            <h1 class="h4">
                Videos
            </h1>
        </div>

        <div class="row my-row" style="margin-top:1.25rem">
            <div class=" col-md-4 col-sm-6 col-xs-12"> 
                <video width="320" height="240" controls>
                  <source src="./videos/1.mp4" type="video/mp4">
                </video>
            </div>
        </div>


  ======================================================================================================      
    `}  
    
            
    
    
      
    
   
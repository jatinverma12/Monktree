const getError=(errors,prop)=>{
	try{
		return errors.mapped()[prop].msg;
	}catch(err){
		return '';
	}
}


const layout = require('./layout');

module.exports=({req,errors})=>{
	
	return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign Up</h1>
              <div class="field">
                <label class="label">Email</label>
                <input class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input class="input" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
                            <button class="button is-primary">Submit</button>
            </form>
            <a href="/signin">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    `
  });

}
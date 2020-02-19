module.exports={
	requireLogin:(req,res,next)=>{
		if(!req.session.user)
			res.redirect('/signup');
		next();

	}

	
}
module.exports={
	requireLogin:(req,res,next)=>{
		if(!req.session.userId)
			{res.redirect('/signup');}
		next();

	}

	
}
module.exports={
	requireLogin:(req,res,next)=>{
		if(!req.session.userId)
			{return res.redirect('/signup');}
		next();

	}

	
}
const getError=(errors,prop)=>{
	try{
		return errors.mapped()[prop].msg;
	}catch(err){
		return '';
	}
}




module.exports=({req,errors})=>{
	return `


	<form action="/signin" method="POST">
    <input  type="email" name="email" placeholder="Email">
    ${getError(errors,"email")}
    <input  type="password" name="password" placeholder="Password">
    ${getError(errors,"password")}

    <input type="submit">
    </form>`
}
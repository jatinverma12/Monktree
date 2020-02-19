const getError=(errors,prop)=>{
	try{
		return errors.mapped()[prop].msg;
	}catch(err){
		return '';
	}
}




module.exports=({req,errors})=>{
	return `


	<form action="/signup" method="POST">
    <input  name="email" placeholder="Email">
    ${getError(errors,"email")}
    <input  name="password" placeholder="Password">
    ${getError(errors,"password")}

    <input type="submit">
    </form>`
}
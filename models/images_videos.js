var mongoose=require("mongoose");
var mediaSchema=new mongoose.Schema({
	content:[String]
});
module.exports=mongoose.model("Media",mediaSchema);
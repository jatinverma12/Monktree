var mongoose=require("mongoose");
var mediaSchema=new mongoose.Schema({
	Images:[String]
});
module.exports=mongoose.model("Images",mediaSchema);
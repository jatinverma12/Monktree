var mongoose=require("mongoose");
var mediaSchema=new mongoose.Schema({
	Videos:[String]
});
module.exports=mongoose.model("Videos",mediaSchema);
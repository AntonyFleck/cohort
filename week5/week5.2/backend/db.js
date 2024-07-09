const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://anirudhardesai:vhZ38ZpPkpdE09pQ@cluster0.zqbdupz.mongodb.net/newyear_prj")

//.env
const todo=mongoose.model('todos',{
    title:String,
    description:String,
    completed:Boolean
});

module.exports={
    todo,
}
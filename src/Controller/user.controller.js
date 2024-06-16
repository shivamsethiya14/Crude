import {User} from "../Module/user.model.js"
const getAllUserCOntroller=async function getAllUserCOntroller(req,res){
    const allDbUser=await User.find({})
    return res.json(allDbUser);
}
const createUsercontroller= async function (req,res){
    const user =req.body;
    if( !user.name || !user.email || !user.mobile || !user.address || !user.gender){
        return res.status(400).json({msg:"all filed required"})
    }
    const result= await User.create({
        name:user.name,
        email:user.email,
        address:user.address,
        mobile:user.mobile,
        gender:user.gender
    })
    return res.status(200).json({msg:"sucess",id:result._id})
}

const getuserbyidcontroller=async function (req,res){
    // const id=req.params;
    const user= await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({error:"user not found"})
    }
    return res.status(200).json(user)
}
const updateusercontroller=async function (req,res){
    // const idno=req.params.id;
    const user =await User.findByIdAndUpdate(req.params.id,{name:"changed"})
    return res.status(200).json("sucess");
}
const deleteusercontroller=async function (req,res){
    const id=req.params.id;
    const user =await User.findByIdAndDelete(id)
    return res.status(200).json({msg:"sucess"});
}
export {
    deleteusercontroller,
    updateusercontroller,
    createUsercontroller,
    getAllUserCOntroller,
    getuserbyidcontroller
}
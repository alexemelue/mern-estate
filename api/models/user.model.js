import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        // default:"https://res.cloudinary.com/dcynp9gds/image/upload/v1707303020/samples/ecommerce/analog-classic.jpg"
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIyiiNbz3VC9Afr-LqWpcw7loxjPnacfZSA&usqp=CAU"
    },
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);
export default User;
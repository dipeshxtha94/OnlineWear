



const mongoose= reuire("mongoose")

const UserSchema= new mongoose.Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, ruquired: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
}, {timestamps: true});
mongoose.models={};
export default mongoose.model("User", UserSchema)
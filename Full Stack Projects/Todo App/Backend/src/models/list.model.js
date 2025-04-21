import mongoose from 'mongoose'

const listSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  user: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: "user"
  }]
},
{
  timestamps: true
} 
)

const List = mongoose.model("list", listSchema);
export default List
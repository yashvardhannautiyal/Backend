import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    //validation : these validation gives strict behaviour to follow by user
    //mongoDb does not had this feature instead we have to use if-else to fulfill the conditions
    //mongoose fulfills the need for validation
    title :
    {
        type : String,
        require : true,
        default: "heyy"
    },
    description : String,
    isDone: Boolean,
    days : Number,
});

export const Todo = mongoose.model("Todo", TodoSchema);
import { model, Schema } from 'mongoose';

const bookShcema = new Schema(
    {
        name :{
            type : String,
            require : true,
        },
        description :{
            type : String,
            require : true,
        },
        publishDate :{
            type : Date,
            require : true,
        },
        price :{
            type : Number,
            require : true,
        },
    },
    { timestamps : true}
)

const BOOK = model("Book", bookShcema, "book");

export default BOOK;
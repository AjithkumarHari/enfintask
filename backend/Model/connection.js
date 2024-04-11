import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Database Connected Successfully`);
        
    }catch(error){
        process.exit(1);
    }
}

export default connectDB;
import mongoose from 'mongoose';

const connectDB = (url) => {
    return mongoose.connect(url);
}
export default connectDB;

// const connectionString = 'mongodb+srv://amitku:<password>@nodejsapi.ij4tkff.mongodb.net/?retryWrites=true&w=majority';
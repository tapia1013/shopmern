import mongoose from 'mongoose';

// async func cause mongodb .find .create etc.. always returns a promise
const connectDB = async () => {
  try {
    // connect to mongodb using monogoose and pass in the mongo uri link we have in .env file
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // have to useUnified else we get error
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDB;
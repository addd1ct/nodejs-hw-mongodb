import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function initMongoConnection() {

  const uri = 'mongodb+srv://polifibliss:9YP0D8hz7MQA4U9D@cluster0.qwbuzs9.mongodb.net/students?retryWrites=true&w=majority';

  await mongoose.connect(uri);
  console.log('Mongo connection successfully established!');
}

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    avgMark: { type: Number, required: true },
    onDuty: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Student = model('Student', studentSchema);

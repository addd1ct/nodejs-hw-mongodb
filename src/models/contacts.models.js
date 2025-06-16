import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema(
    {
      name: { type: String, required: true },
      age: { type: Number },
      gender: { type: String },
      avgMark: { type: Number },
      onDuty: { type: Boolean },
    },
    { timestamps: true }
);

export const Contact = model('Contact', contactSchema);


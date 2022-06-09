import mongoose from 'mongoose'
const Schema = mongoose.Schema



export const MoonSchema = new Schema (
  {
  name: {type: String, required: true},
  description: {type: String, required: true},

}, { timestamps: true, toJSON: { virtuals: true } }
)
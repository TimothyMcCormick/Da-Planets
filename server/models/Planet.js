import mongoose from 'mongoose'
const Schema = mongoose.Schema



export const PlanetSchema = new Schema ({
  name: {type: String, required: true},
  description: {type: String, required: true},
}, { timestamps: true, toJSON: { virtuals: true } }
)
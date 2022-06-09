import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const SpeciesSchema = new Schema ({
  name: {type: String, required: true},
  description: {type: String, required: true},
  galaxyId: {type: ObjectId, ref: 'galaxy', required: true},
  moonId: {type: ObjectId, ref: 'moon', required: true},
  planetId: {type: ObjectId, ref: 'planet', required: true},
  starId: {type: ObjectId, ref: 'star', required: true},
}, { timestamps: true, toJSON: { virtuals: true } }
)

SpeciesSchema.virtual('galaxy', {
  localField: 'galaxyId',
  ref: 'Galaxy',
  foreignField: '_id',
  justOne: true
})

SpeciesSchema.virtual('moon', {
  localField: 'moonId',
  ref: 'Moon',
  foreignField: '_id',
  justOne: true
})

SpeciesSchema.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

SpeciesSchema.virtual('star', {
  localField: 'starId',
  ref: 'Star',
  foreignField: '_id',
  justOne: true
})
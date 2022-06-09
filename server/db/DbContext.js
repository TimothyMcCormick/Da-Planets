import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { MoonSchema } from "../models/Moon";
import { PlanetSchema } from "../models/Planet";
import { SpeciesSchema } from "../models/Species";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Moons = mongoose.model('Moon', MoonSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Species = mongoose.model('Species', SpeciesSchema)
  Stars = mongoose.model('Star', StarSchema)
  
}

export const dbContext = new DbContext()

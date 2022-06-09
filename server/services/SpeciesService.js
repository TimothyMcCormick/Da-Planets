import { dbContext } from "../db/DbContext";




class SpeciesService{
  async getAll(query = {}) {
    const species = await dbContext.Species.find(query)
    return species
  }
  async create(body) {
    const species = await dbContext.Species.create(body)
    return species
  }
  async remove(id) {
    const original = await dbContext.Species.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

}


export const speciesService = new SpeciesService()
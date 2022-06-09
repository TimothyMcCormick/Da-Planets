import { dbContext } from "../db/DbContext";




class GalaxiesService{
  async getAll() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  async create(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
  async remove(id) {
    const original = await dbContext.Galaxies.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

}


export const galaxiesService = new GalaxiesService()
import { dbContext } from "../db/DbContext";




class PlanetsService{
  async getAll(query = {}) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }
  async create(body) {
    const planet = await dbContext.Planets.create(body)
    return planet
  }
  async remove(id) {
    const original = await dbContext.Planets.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

}


export const planetsService = new PlanetsService()
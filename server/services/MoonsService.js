import { dbContext } from "../db/DbContext";




class MoonsService{
  async getAll(query = {}) {
    const moons = await dbContext.Moons.find(query)
    return moons
  }
  async create(body) {
    const moon = await dbContext.Moons.create(body)
    return moon
  }
  async remove(id) {
    const original = await dbContext.Moons.findById(id)
    await original.remove()
    return `deleted ${original.name}`
  }

}

export const moonsService = new MoonsService()
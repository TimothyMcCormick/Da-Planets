import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";




export class MoonsController extends BaseController{
  constructor(){
    super('api/moons')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      const moons = await moonsService.getAll()
      return res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      const moon = await moonsService.create(req.body)
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      const message = await moonsService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
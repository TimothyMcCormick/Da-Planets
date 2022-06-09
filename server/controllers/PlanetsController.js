import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";




export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      const planet = await planetsService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      const message = await planetsService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
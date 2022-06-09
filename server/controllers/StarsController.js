import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";




export class StarsController extends BaseController{
  constructor(){
    super('api/stars')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next){
    try {
      const stars = await starsService.getAll()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      const star = await starsService.create(req.body)
      return res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      const message = await starsService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
import { galaxiesService } from "../services/GalaxiesService";
import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import { speciesService } from "../services/SpeciesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";




export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getMoons)
      .get('/:id', this.getPlanets)
      .get('/:id', this.getSpecies)
      .get('/:id', this.getStars)
      .post('', this.create)
      .delete('/:id', this.remove)
  }
  async getStars(req, res, next) {
    try {
      let stars = await starsService.getAll({GalaxyId: req.params.id})
    return res.send(stars)
    } catch (error) {
      next(error)
    }
    
  }
  async getSpecies(req, res, next) {
    try {
      let species = await speciesService.getAll({GalaxyId: req.params.id})
    return res.send(species)
    } catch (error) {
      next(error)
    }
    
  }
  async getPlanets(req, res, next) {
    try {
      let planets = await planetsService.getAll({GalaxyId: req.params.id})
    return res.send(planets)
    } catch (error) {
      next(error)
    }
    
  }
  async getMoons(req, res, next) {
    try {
      let moons = await moonsService.getAll({GalaxyId: req.params.id})
    return res.send(moons)
    } catch (error) {
      next(error)
    }
    
  }

  async getAll(req, res, next){
    try {
      const galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      const galaxy = await galaxiesService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next){
    try {
      const message = await galaxiesService.remove(req.params.id)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
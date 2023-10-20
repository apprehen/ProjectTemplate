import { Controller } from 'egg'

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.success({
      name: 'yueyun',
      age: 18
    })
  }
}

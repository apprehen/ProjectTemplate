import { Controller } from 'egg'
class BaseController extends Controller {
  success(data = null, message = 'success', code = 1) {
    this.ctx.body = {
      code,
      data,
      message
    }
  }
  error(error = null, message = 'error', code = 0) {
    this.ctx.body = {
      code,
      error,
      message
    }
  }
  fail(message = 'fail', code = 0) {
    this.ctx.body = {
      code,
      message
    }
  }
  notFound(message = 'not found', code = 404) {
    this.ctx.throw(code, message)
  }
}
export default BaseController

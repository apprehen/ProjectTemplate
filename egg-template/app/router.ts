import { Application } from 'egg'
import injectUserRouter from './router/user'
export default (app: Application) => {
  const { controller, router } = app
  router.get('/', controller.home.index)
  injectUserRouter(app, router)
}

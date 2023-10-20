import { Application, Router } from 'egg'
export default function injectUserRouter(app: Application, router: Router) {
  router.get('/user', app.controller.user.index)
}

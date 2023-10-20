import { Context } from '../../typings/app'
export default {
  /**
   * @param {number} code - 状态码
   * @param {string} msg - 提示信息
   * @param {object} data - 返回数据
   * @return {object} - 返回结果
   * @example
   * ctx.result(200, 'success', { name: 'egg' })
   * // =>
   * {
   *  code: 200,
   *  msg: 'success',
   *  data: { name: 'egg' }
   * }
   * @descript 统一返回格式
   *@apprehen
   * */
  result(code = 200, msg = 'success', data = {}, isSuccess = true) {
    const ctx = this as unknown as Context
    ctx.body = {
      success: isSuccess,
      code,
      msg,
      data
    }
  },
  /**
   *@param {object} data 返回信息
   *@param {string} msg
   *
   *  */
  success(data, msg = 'success') {
    this.result(200, msg, data)
  },
  fail(msg = 'fail') {
    this.result(500, msg, {}, false)
  }
}

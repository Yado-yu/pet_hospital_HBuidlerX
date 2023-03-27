// 导入自封装的接口方法
import request from '../utils/request.js'

// 用户 - 登录
export const loginAPI = (username, password) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    },
	headers: {
	  'content-type': 'application/x-www-form-urlencoded'
	}
  })
}
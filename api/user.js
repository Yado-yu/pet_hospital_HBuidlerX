// 导入自封装的接口方法
import request from '../utils/request.js'

// 用户 - 登录
export const loginAPI = ( username, password ) => {
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

// 用户 - 获取用户信息
export const getUserInfoAPI = (token) => {
  return request({
    url: '/my/userinfo',
	headers: {
	  'Authorization': token,
	}
  })
}

// 用户 - 注册
export const reguserAPI = ( username, password ) => {
  return request({
    url: '/api/reguser',
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
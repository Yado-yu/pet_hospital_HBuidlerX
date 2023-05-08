// 导入自封装的接口方法
import request from '../utils/request.js'

// #ifdef H5
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
// #endif

// #ifndef H5
// 用户 - 登录
export const loginAPI = ( username, password ) => {
  return uni.request({
    url: 'http://127.0.0.1:3007/api/login',
    method: 'POST',
    data: {
      username,
      password
    },
	headers: {
	  'content-type': 'application/x-www-form-urlencoded',
	  'content-type': 'multipart/form-data'
	}
  })
}
// #endif

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

//用户 - 修改用户昵称
export const updateUserInfoAPI = ( token, id, nickname ) => {
  return request({
    url: '/my/userinfo',
	method: 'POST',
	data: {
	  id,
	  nickname
	},
	headers: {
	  'Authorization': token,
	  'content-type': 'application/x-www-form-urlencoded'
	}
  })
}

//用户 - 修改用户昵称
export const updateUserAvaterAPI = ( token ) => {
  return request({
    url: '/my/update/avatar',
	method: 'POST',
	data: {
	  avater: 'https://img.zcool.cn/community/016a2e5f110b9fa801215aa097202c.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100'
	},
	headers: {
	  'Authorization': token,
	  'content-type': 'application/x-www-form-urlencoded'
	}
  })
}

//用户 - 修改用户密码
export const updatePasswordAPI = ( token, id, oldPwd, newPwd ) => {
  return request({
    url: '/my/updatepwd',
	method: 'POST',
	data: {
	  id,
	  oldPwd,
	  newPwd
	},
	headers: {
	  'Authorization': token,
	  'content-type': 'application/x-www-form-urlencoded'
	}
  })
}
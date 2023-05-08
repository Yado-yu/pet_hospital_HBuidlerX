// #ifdef H5
// 导入自封装的接口方法
import request from '../utils/request.js'

// 医生 - 获取所有医生信息
export const getDoctorListAPI = () => {
	return request({
	  url: '/api/getAllDoctor',
	  method: 'GET'
	})
}

// 诊疗 - 智能诊疗
export const zhenliaoAPI = (symptoms) => {
	return request({
		url: `/api/treat?symptoms=${symptoms}`,
		method: 'GET'
	})
}
// #endif

// #ifndef H5
// 医生 - 获取所有医生信息
export const getDoctorListAPI = () => {
	return uni.request({
	  url: 'http://127.0.0.1:3007/api/getAllDoctor',
	  method: 'GET',
	  // header: { 'content-type': 'multipart/form-data' }
	})
}

// 诊疗 - 智能诊疗
export const zhenliaoAPI = (symptoms) => {
	return uni.request({
		url: `/api/treat?symptoms=${symptoms}`,
		method: 'GET'
	})
}
// #endif
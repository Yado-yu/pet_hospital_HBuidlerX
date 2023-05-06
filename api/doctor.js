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
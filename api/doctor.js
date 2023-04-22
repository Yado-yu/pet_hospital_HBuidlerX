// 导入自封装的接口方法
import request from '../utils/request.js'

// 医生 - 获取所有医生信息
export const getDoctorListAPI = () => {
	return request({
	  url: '/api/getAllDoctor',
	  method: 'GET'
	})
}
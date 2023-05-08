// 导入自封装的接口方法
import request from '../utils/request.js'

// 诊疗 - 获取所有诊疗信息
export const getTreatmentListAPI = (id) => {
	return request({
	  url: `/api/getTreatmentById?id=${id}`,
	  method: 'GET'
	})
}

// 诊疗 - 新增诊疗
export const addTreatmentAPI = ( ev_users_id, pet_name, symptom, result ) => {
	return request({
	  url: '/api/addTreatment',
	  method: 'POST',
	  data: {
		ev_users_id,
		pet_name,
		symptom,
		result
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded'
	  }
	})
}

// 诊疗 - 删除诊疗
export const deleteTreatmentAPI = ( id ) => {
	return request({
	  url: `/api/deleteTreatment?id=${id}`,
	  method: 'DELETE'
	})
}
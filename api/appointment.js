// 导入自封装的接口方法
import request from '../utils/request.js'

// 预约 - 提交预约单
export const getDoctorListAPI = ( appointment_name, date, ev_user_id, doctor_id, token ) => {
	return request({
	  url: '/my/addAppointment',
	  method: 'POST',
	  data: {
		  appointment_name,
		  date,
		  ev_user_id,
		  doctor_id
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}

// 预约 - 根据user_id获取预约单
export const getAppByUerIdAPI = (id, token) => {
	return request({
	  url: `/my/getAppointmentsByEvUserId?ev_user_id=${id}`,
	  method: 'GET',
	  headers: {
		'Authorization': token
	  }
	})
}

// 预约 - 取消预约单
export const cancelAppointmentAPI = (id, token) => {
	return request({
	  url: '/my/deleteAppointment',
	  method: 'DELETE',
	  data: {
		  appointment_id: id
	  },
	  headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}

// 预约 - 修改预约单
export const updateAppAPI = ( appointment_id, date, appointment_name, token ) => {
	return request({
	  url: '/my/updateDppointment',
	  method: 'POST',
	  data: {
		  appointment_id,
		  date,
		  appointment_name
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}
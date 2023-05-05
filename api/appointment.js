// 导入自封装的接口方法
import request from '../utils/request.js'

// 预约 - 提交预约单
export const getDoctorListAPI = ( appointment_name, date, ev_user_id, doctor_id, token ) => {
	return request({
	  url: 'my/addAppointment',
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
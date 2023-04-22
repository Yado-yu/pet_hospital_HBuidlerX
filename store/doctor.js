import { getDoctorListAPI } from '../api/doctor.js'

export default {
	namespaced: true,
	state: {
		doctorList: []
	},
	actions: {
		async getDoctorList({ commit }) {
			try{
				const res = await getDoctorListAPI()
				if(res.status === 200) {
					if(res.data.status === 0) {
						commit('GET_DOCTOR_LIST', res.data)
					}
				}
			}catch(e){
				//TODO handle the exception
			}
		}
	},
	mutations: {
		GET_DOCTOR_LIST(state, { data }) {
			// 给每个医生对象加上一个背景图片属性
			state.doctorList = data.map(doctor => ({...doctor, bgImg: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'}))
			// console.log(state.doctorList)
		}
	},
	getters: {}
}
import { getDoctorListAPI } from '../api/doctor.js'

export default {
	namespaced: true,
	state: {
		doctorList: [],
		currentDoctor: {}
	},
	actions: {
		// #ifdef H5
		async getDoctorList({ commit }) {
			try{
				const res = await getDoctorListAPI()
				// if(res.statusCode === 200) {
					if(res.data.status === 0) {
						commit('GET_DOCTOR_LIST', res.data)
					}
				// }
			}catch(e){
				//TODO handle the exception
			}
		}
		// #endif
		
		// #ifndef H5
		async getDoctorList({ commit }) {
			try{
				const res = (await getDoctorListAPI())[1]
				// if(res.statusCode === 200) {
					if(res.data.status === 0) {
						commit('GET_DOCTOR_LIST', res.data)
					}
				// }
			}catch(e){
				//TODO handle the exception
			}
		}
		// #endif
			//  const resUni = await uni.request({
			// 	url: 'http://127.0.0.1:3007/api/getAllDoctor',
			// 	method: 'GET',
			// 	header: {
			// 		'content-type': 'application/json', // 默认使用 JSON 格式
			// 	  },
			// })
			// console.log(resUni)
	},
	mutations: {
		GET_DOCTOR_LIST(state, { data }) {
			// 给每个医生对象加上一个背景图片属并且处理label属性
			state.doctorList = data.map((doctor, index) => {
				// 处理label属性
				const labelArray = doctor.label.split(',')
				const colors = ['red', 'cyan', 'blue', 'green', 'orange', 'purplered', 'purple', 'brown', 'yellowgreen', 'lime', 'grey']
				doctor.label = labelArray.map((item, index) => {
				  return {
				    color: colors[index % colors.length],
				    title: item,
				  }
				})
				// 加上背景图片
				return {...doctor, color: colors[index % colors.length],
						bgImg: 'https://tnuiimage.tnkjapp.com/resume/resume-bg.jpg'}
			})
			console.log(state.doctorList)
		},
		SET_CURRENT_DOCTOR(state, id) {
			state.currentDoctor = state.doctorList.find(doctor => doctor.doctor_id === id)
			// console.log(state.currentDoctor)
			
		}
	},
	getters: {}
}
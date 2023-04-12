import { getUserInfoAPI } from '../api/user.js'

export default {
	namespaced: true,
	state: {
		userInfo: uni.getStorageSync('userInfo') || {},
	},
	actions: {
		async getUserInfo( { commit }, token) {
			try{
				const res = await getUserInfoAPI(token)
				if(res.status === 200) {
					if(res.data.status === 0) {
						commit('GET_USERINFO', res.data)
					}
				}
			}catch(e){
				//TODO handle the exception
			}
		}
	},
	mutations: {
		GET_USERINFO(state, { data }) {
			state.userInfo = data
			uni.setStorage({
				key: 'userInfo',
				data
			})
			// console.log(state)
		},
		QUIT_LOGIN(state) {
			state.userInfo = {}
			uni.removeStorage({
				key: 'userToken'
			})
			uni.removeStorage({
				key: 'userInfo'
			})
		}
	},
	getters: {}
}
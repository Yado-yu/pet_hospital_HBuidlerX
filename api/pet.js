// 导入自封装的接口方法
import request from '../utils/request.js'

// 宠物种类 - 获取所有宠物种类
export const getDoctorListAPI = () => {
	return request({
	  url: '/api/getPetTypes',
	  method: 'GET'
	})
}

// 宠物 - 用户新增宠物
export const addPetAPI = ( { name, species, age, sex, jueyue, weight }, token, id ) => {
	return request({
	  url: '/myPet/addPet',
	  method: 'POST',
	  data: {
	    pet_name: name,
		species,
		age,
		pet_gender: sex,
		isSterilization: jueyue,
		weight,
		ev_users_id: id,
		
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}

// 宠物 - 用户修改宠物信息
export const updatePetAPI = ( { name, species, age, sex, jueyue, weight }, token, id ) => {
	return request({
	  url: '/myPet/updatePet',
	  method: 'POST',
	  data: {
	    pet_name: name,
		species,
		age,
		pet_gender: sex,
		isSterilization: jueyue,
		weight,
		pet_id: id,
		
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}

// 宠物 - 根据用户id查询用户的宠物
export const getPetListAPI = ( token, id ) => {
	return request({
	  url: '/myPet/getPet',
	  method: 'POST',
	  data: {
		ev_users_id: id,
	  },
	  headers: {
	    'content-type': 'application/x-www-form-urlencoded',
		'Authorization': token
	  }
	})
}
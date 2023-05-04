import { getPetListAPI } from '../api/pet.js';

export default {
  namespaced: true,
  state: {
    petList: [],
    currentPet: {},
  },
  actions: {
    async getPetList({ commit }, { token, id }) {
      try {
        const res = await getPetListAPI(token, id)
        if (res.status === 200) {
          if (res.data.status === 0) {
            commit('GET_PET_LIST', res.data)
          }
        }
      } catch (e) {
        // 处理异常
      }
    },
  },
  mutations: {
    GET_PET_LIST(state, { data }) {
      // 处理宠物列表
      state.petList = data.map((pet, index) => {
		const colors = ['red', 'cyan', 'blue', 'green', 'orange', 'purplered', 'purple', 'brown', 'yellowgreen', 'lime', 'grey']
        // 添加一些额外的属性
        return {
          ...pet,
          color: colors[index % colors.length],
        };
      });
      console.log(state.petList)
    },
    SET_CURRENT_PET(state, id) {
      state.currentPet = state.petList.find((pet) => pet.pet_id === id);
      // console.log(state.currentPet)
    },
  },
  getters: {},
};

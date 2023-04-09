import { ActionTree, GetterTree, MutationTree } from "vuex";
// import axios from "axios";
import arrayCity from "./../utils/array";


function getDefaultState() {
  return {city: {link: '/orenburg', name_eng: "Orenburge", name: "Оренбурге" }}
}

export const state = getDefaultState;

export const mutations = {
  SET_CITY (state, response) {
    // localStorage.setItem("geoip", response);

    state.city = response;
  },
};


export const actions = {
  ACTION_GET_DOMAIN({ commit }, payload) {
    console.log('Action');
    console.log(payload);
    if (!payload) {
      return
    }
    if (payload.includes('localhost')) {
      // console.log('localhost:8001');
      payload = 'artem.zpd45.ru'

    }
    let sub = payload.split('.', 3);
    console.log(sub);

    let city = arrayCity.filter(x=> x.name_eng == sub[0]);
    console.log(city);
    if (city.length != 0) {
    commit('SET_CITY', city[0]);


    }





  }
};


export const getters = {
  CITY_G: (state) => {

    return state.city;
  }
};




// export type Store<S = loutSchema> = Omit<
//   VuexStore<S>,
//   "getters" | "commit" | "dispatch"
// >
// export type State = loutSchema;


export const city_store = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

import { ActionTree, GetterTree, MutationTree } from "vuex";


export interface hoverState {
    enable: boolean

}

function getDefaultState(): hoverState {
    return {
        enable: true

    }
}

export const state = getDefaultState;



export const mutations: MutationTree<hoverState> = {
    switchHover(state, payload) {
        state.enable = payload;
      },

}


export const actions: ActionTree<hoverState, {}> = {

}


export const getters: GetterTree<hoverState, {}> = {
    getHoverStatus(store) {
        return store.enable;
      }

}

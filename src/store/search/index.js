import Vue from 'vue'
import Vuex from 'vuex' 
import {reqGetSearchInfo} from "@/api"

Vue.use(Vuex)

export default{
    state:{
        searchList:{},

    },
    mutations:{
        GETSERACHLIST(state, searchList) {
            state.searchList = searchList
        }
    },
    actions:{
        async getSearchList({commit}, params = {}) {
            let result = await reqGetSearchInfo(params)
            if(result.code == 200) {
                commit('GETSERACHLIST', result.data)
            }
        }
    },
}
import Vue from 'vue'
import Vuex from 'vuex' 
import {reqCategoryList,reqGetBannerList} from "@/api"

Vue.use(Vuex)

export default{
    state:{
        categoryList:[],
        bannerList:[],

    },
    mutations:{
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
    },
    actions:{
        async categoryList({commit}) {
            let result = await reqCategoryList()
            if (result.code == 200) {
                commit("CATEGORYLIST", result.data)
            }
        },
        async getBannerList({commit}) {
            let result = await reqGetBannerList()
            if (result.code == 200) {
                commit("BANNERLIST", result.data)
            }
        }
    },
    getters:{}
}
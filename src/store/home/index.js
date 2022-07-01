import Vue from 'vue'
import Vuex from 'vuex' 
import {reqCategoryList,reqGetBannerList,reqFloorList} from "@/api"

Vue.use(Vuex)

export default{
    state:{
        categoryList:[],
        bannerList:[],
        floorList:[],

    },
    mutations:{
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList
        },
        BANNERLIST(state, bannerList) {
            state.bannerList = bannerList
        },
        FLOORLIST(state, floorList) {
            state.floorList = floorList
        }
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
        },
        async getFloorList({commit}) {
            let result = await reqFloorList()
            if(result.code == 200) {
                commit("FLOORLIST", result.data)
            }
        }
    },
    getters:{}
}
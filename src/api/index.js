import request from "./request";
import mockRequests from './mockAjax'

export const reqCategoryList = () => {
    return request({url:"product/getBaseCategoryList", method:"get"})
}

export const reqGetBannerList = () => mockRequests.get('/banner')

export const reqFloorList = () => mockRequests.get('/floor')

export const reqGetSearchInfo = (params) => request({
    url:'/list',
    method:'post',
    data:params,
})
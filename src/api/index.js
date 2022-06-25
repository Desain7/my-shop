import request from "./request";
import mockRequests from './mockAjax'

export const reqCategoryList = () => {
    return request({url:"product/getBaseCategoryList", method:"get"})
}

export const reqGetBannerList = () => mockRequests.get('/banner')
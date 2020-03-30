import utils from "../utils"

let baseUrl = utils.basUrl

function token(){
	try{
		return uni.getStorageSync('token')
	}catch(e){
		console.log(e)
		return ''
	}
}

// export function addBusiness(data) {
// 	return uni.request({
// 		url: baseUrl + "/baseUserApp_org_app_add",
// 		method: "post",
// 		header: {
// 			"x-token": token()
// 		},
// 		data: data
// 	});
// }

// 添加商家信息并关联组织
export function addBusiness(data) {
	return uni.request({
		url: baseUrl + "/EpwBusiness_add_business",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function getBusiness() {
	return uni.request({
		url: baseUrl + "/EpwBusiness_get_business",
		method: "get",
		header: {
			"x-token": token()
		}
	});
}

// 添加商品
export function addGood(data) {
	return uni.request({
		url: baseUrl + '/EpwGoods_add_goods',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

// 获取商品
export function getGood() {
	return uni.request({
		url: baseUrl + '/EpwGoods_get_goods',
		method: 'GET',
		header: {
			"x-token": token()
		}
	})
}

// 添加优惠劵
export function addVou(data) {
	return uni.request({
		url: baseUrl + '/EpwVoucher_add_vou',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

// 优惠劵生效
export function startVouApi(data) {
	return uni.request({
		url: baseUrl + '/EpwVoucher_start_vou',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

// 优惠劵状态更新
export function updateStateVouApi(data) {
	return uni.request({
		url: baseUrl + '/EpwVoucher_update_state_vou',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

// 获取优惠劵
export function getVou(data) {
	return uni.request({
		url: baseUrl + '/EpwVoucher_get_vou',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}


// 验劵 
export function checkSecuritiesApi(data) {
	return uni.request({
		url: baseUrl + '/EpwBusiness_check_securities',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

//获取发布的商品
export function myExhibits(data) {
	return uni.request({
		url: baseUrl + "/EpwBusiness_my_exhibits",
		method: "POST",
		header: {
			"x-token": token()
		},
		data: data
	});
}
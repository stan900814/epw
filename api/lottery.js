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

// 创建抽奖
export function createLottery(data) {
	return uni.request({
		url: baseUrl + "/lottery_create_lottery",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

// 获取抽奖
export function getLottery(data) {
	return uni.request({
		url: baseUrl + "/lottery_get_lotteries",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}
// 更新抽奖
export function updateLottery(data) {
	return uni.request({
		url: baseUrl + "/lottery_update_lottery",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}
// 发布抽奖
export function releaseLottery(data) {
	return uni.request({
		url: baseUrl + "/lottery_release_lottery",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
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
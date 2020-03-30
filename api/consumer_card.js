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
// 添加惠卡
export function addCard(data) {
	return uni.request({
		url: baseUrl + '/consumer_card_add_card',
		method: 'POST',
		header: {
            "x-token": token(),
		},
		data: data
	})
}
// 获取惠卡
export function getCard(data) {
	return uni.request({
		url: baseUrl + '/consumer_card_get_card',
		method: 'POST',
		header: {
            "x-token": token(),
		},
		data:{data: data || {}}
	})
}
//更新惠卡
export function updateCard(data) {
	return uni.request({
		url: baseUrl + '/consumer_card_edit_card',
		method: 'POST',
		header: {
            "x-token": token(),
		},
		data:{data:data || {}}
	})
}
//发布惠卡
export function releaseCard(data) {
	return uni.request({
		url: baseUrl + '/consumer_card_release_card',
		method: 'POST',
		header: {
            "x-token": token(),
		},
		data:{data:data || {}}
	})
}
//删除惠卡
export function deleteCard(data) {
	return uni.request({
		url: baseUrl + '/consumer_card_delete_card',
		method: 'POST',
		header: {
            "x-token": token(),
		},
		data:{data:data || {}}
	})
}
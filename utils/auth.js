import utils from "@/utils/index.js"

let basUrl = utils.basUrl

export let token = uni.getStorageSync('token');

export function fetch(wraper){

	return uni.request({
		url:wraper.url.startsWith('/')?basUrl+wraper.url:basUrl+'/'+wraper.url,
		method:wraper.method || 'POST',
		header: {
			"x-token": token
		},
		data:wraper.data || null
	})
}


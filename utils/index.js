/* Request */
let socket_address = 'http://118.123.213.229:8888'
let address = "https://chick-iot.xjtszh.com"

// let socket_address = 'http://192.168.31.179:8888'
// let address = "http://127.0.0.1:5000"
let basUrl = address + '/api/v1.0'

// 小程序名
let weChatMPAppName = "epw2b"
let apiKey = "TZXDEPW2B4yxa47cEyGHdfSnMHkftJJ3"
let password = "123"

function setStore(key, data) {
	uni.setStorageSync(
		key,
		data
	);
}

function getStore(key) {
	return uni.getStorage({
		key: key,
	})
}

function hasItem(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			console.log(111)
			return 1
		}
	}
	return 0
}

function getCurrentOrg(obj) {
  let user = uni.getStorageSync("SAVE_INFO")
  let org = null
  if(user&&user.current_org){
	  org = user.org[user.current_org]
  }
  return org;
}

export default {
	weChatMPAppName,
	socket_address,
	address,
	basUrl,
	setStore,
	getStore,
	hasItem,
	getCurrentOrg,
	apiKey,
	password
}

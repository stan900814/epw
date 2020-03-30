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

function getMessageCategory() {
  return uni.request({
    url: baseUrl + '/message/category',
    header: {
      'x-token': token()
    },
    method:'GET'
  })
}

function getMessageList() {
  return uni.request({
    url: baseUrl + '/message/list?',
    header: {
      'x-token': token()
    }
  })
}

function markCategoryRead({app_id, category}) {
  return uni.request({
    url: baseUrl + '/message/batch_mark_read',
    method: 'POST',
    header: {
      'x-token': token()
    },
    data: {
      app_id: app_id,
      category: category
    }
  })
}

export default {
  getMessageCategory,
  getMessageList,
  markCategoryRead,
}
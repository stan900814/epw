import utils from "@/utils"

let baseUrl = utils.basUrl

function token(){
	try{
		return uni.getStorageSync('token')
	}catch(e){
		console.log(e)
		return ''
	}
}

// 登录
export function Login(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_user_login',
		method: 'POST',
		data: data
	})
}

export function wxLogin(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_wx_login',
		method: 'POST',
		data: data
	})
}

export function getPhone(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_wx_get_phone',
		method: 'POST',
		data: data
	})
}

export function getLocation(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_user_update_loc',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

export function Reload() {
  return uni.request({
    url: baseUrl + "/baseUserApp_user_reload",
    method: "POST",
	header: {
		"x-token": token()
	},
	data: {}
  });
}

// 注册
export function Regist(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_user_register',
		method: 'POST',
		data: data
	})
}

// 切换身份
export function changeID(data) {
	return uni.request({
		url: baseUrl + '/baseUserApp_user_update',
		method: 'POST',
		header: {
			"x-token": token()
		},
		data: data
	})
}

/////////////////////组织

export function search(data) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_org_search",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

// 关键词搜索组织（商店） 
export function searchLike(data) {
	//data:{name:'xx'} or data:{id:'xx'}
	return uni.request({
		url: baseUrl + "/baseUserApp_org_search_like",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}


export function orgs4user() {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_user_org_list",
		method: "get",
		header: {
			"x-token": token()
		},
	});
}

export function usersOfOrg() {
	
	return uni.request({
		url: baseUrl + "/EpwBase_org_user_list",
		method: "get",
		header: {
			"x-token": token()
		},
	});
}


export function orgApply(org) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_user_org_apply",
		method: "post",
		header: {
			"x-token": token()
		},
		data: {
			org: org
		}
	});
}

export function choose(org) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_user_org_choose",
		method: "post",
		header: {
			"x-token": token()
		},
		data: {
			org: org
		}
	});
}


export function userOrgAudit(data) {
	
	return uni.request({
		url: baseUrl + "/EpwBase_user_org_audit",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}
//////////////////////////app
export function appSearch(data) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_app_search",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function appUpdate(data) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_app_update",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function appRegister(data) {
	
	return uni.request({
		url: baseUrl + "/baseUserApp_app_register",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}


export function addApp2org(data) {
	
	return uni.request({
		url: baseUrl + "/EpwBase_org_app_add",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function app4org(data) {
	if(!token){
		token = token()
	}
	return uni.request({
		url: baseUrl + "/baseUserApp_org_app_list",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function app4user(data) {
	if(!token){
		token = token()
	}
	return uni.request({
		url: baseUrl + "/baseUserApp_user_app_list",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function orgAppApply(data) {
	if(!token){
		token = token()
	}
	return uni.request({
		url: baseUrl + "/baseUserApp_org_app_apply",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function orgAppApplyList(data) {
	if(!token){
		token = token()
	}
	return uni.request({
		url: baseUrl + "/baseUserApp_org_app_apply_list",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function orgAppAudit(data) {
	if(!token){
		token = token()
	}
	return uni.request({
		url: baseUrl + "/baseUserApp_org_app_audit",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}

export function wxPayDowOrder(data) {
	return uni.request({
		url: baseUrl + "/baseUserApp_wx_pay_dow_oder",
		method: "post",
		header: {
			"x-token": token()
		},
		data: data
	});
}
////////////////////////
export function getUserRole() {
	return uni.request({
		url: baseUrl + "/EpwBase_get_user_role",
		method: "get",
		header: {
			"x-token": token()
		}
	});
}
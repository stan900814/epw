## baseUrl

https://chick-iot.xjtszh.com/api/v1.0

### 添加（修改）优惠券

baseUrl + /EpwGoods_get_goods

```
vou: {
    id: "", // 修改优惠券需要此字段
    name: '',  //名字
    desc: '',  // 描述
    images: [],  // 图片
    goods: [],   // 关联商品
    vou_class: "通用",  // 优惠券类型， 通用，预定， 消费时段
    discount: 100,   // 打折
    reserve_price: null,  // 定金
    time_interval: "",  //时段优惠的 优惠时间段
    all_num: 1  // 优惠券数量
 }
```

### 查询优惠券

baseUrl + /EpwVoucher_get_vou

```
{
    id: id //id查询
    name：name  // 名字查询
    vou_class： vou_class // 类型查询
    vou_state：vou_state  // 状态查询  创建，生效中， 停止
}
```

### 商品添加

baseUrl + /EpwGoods_add_goods

```
goods: {
    name: '',  // 名字
    price: '',  // 价格
    desc: '',   // 简介
    images: []  // 图
}
```



### 门店注册（修改）

baseUrl + /EpwBusiness_add_business

```
business: {
    agent_id：agent_id  // 代理人id 如果有
    name: "",  //店名
    desc: "",  // 简介
    images: [],  // 图片
    location: {
        name: name,
        address: address,
        latitude: latitude,
        longitude: longitude
      }, 
  }
```
### 惠卡相关接口
#### 添加惠卡
baseUrl + /consumer_card_add_card
返回参数:{data:{code:1}}
#### 获取惠卡(商家获取创建的惠卡,以及根据惠卡id获取惠卡)
baseUrl + /consumer_card_get_card
传递参数:{"status.post.keyword":"已发布"}(根据惠卡状态查询)
或者{"id":""}(根据惠卡id查询具体某一张惠卡)
返回参数:{data:{code:1,data:[{
			id:"",
			price:{
			    discount:"",//使用惠卡消费时的折扣,
			    face_value:""//惠卡面值
			    sale:""//惠卡售价
			},
			remaining:""//惠卡剩余的个数
			recharge:{}//惠卡充值相关(暂未开放功能)
			status:{
			    post:""//惠卡发布状态	
			}
			consumption:{}//特殊时段优惠(暂不开放)
			org:{     //商家信息
			    desc:"",
			    images:[] //商家图片
			    location:{}//商家地址
			},
			detail:{ //惠卡详细信息
			    cover:[] //惠卡封面图片,
			    desc:"",
			    video:""
			}			
			}]
	}}

#### 编辑惠卡
baseUrl + /consumer_card_edit_card
传递参数:{...} //单个惠卡数据
返回参数:{...} //修改后的单个惠卡数据

#### 发布惠卡
baseUrl + /consumer_card_release_card
传递参数:{...} 单个惠卡数据
返回参数:{...} 状态修改后的单个惠卡数据

#### 删除惠卡
baseUrl + /consumer_card_delete_card
传递参数:{...} //单个惠卡数据
返回参数: {...} 删除的惠卡数据

#### 用户领取惠卡
baseUrl + /consumer_card_receive_card
传递参数:[{}] //惠卡数据(list格式)
返回参数{data:{code:1,data:{desc:"" //购买后异常描述 }}}

#### 获取用户领取的惠卡
baseUrl + /consumer_card_get_user_card
传递参数: {uid:""} //根据用户id查询 或者 {id:""} //根据用户已经领取的惠卡id查询
返回参数:{data:{code:1,data:[{
			initial_amount:""  //初始金额
			balance: "" //剩余金额
			concard:{ //领取的惠卡数据
                           id:"",
                           price:{
                              discount:"",//使用惠卡消费时的折扣,
                              face_value:""//惠卡面值
                              sale:""//惠卡售价
                           },
                           remaining:""//惠卡剩余的个数
                           recharge:{}//惠卡充值相关(暂未开放功能)
                           status:{
                              post:""//惠卡发布状态
                           }
                           consumption:{}//特殊时段优惠(暂不开放)
                           org:{     //商家信息
                              desc:"",
                              images:[] //商家图片
                              location:{}//商家地址
                           },
                           detail:{ //惠卡详细信息
                              cover:[] //惠卡封面图片,
                              desc:"",
                              video:""
                           }
                        }
			merchant_org:{}商家信息
		      }]
        }}

#### 用户使用惠卡
baseUrl + /consumer_card_use_user_card
传递参数:{...} //惠卡数据
返回参数: {...} //更新后的惠卡数据

#### 获取惠卡使用记录
baseUrl + /consumer_card_get_card_record
传递参数:{uid:""} //用户id
返回参数: {data:{code:1,data:[{
			  merchant_org:{} //商家信息,
			  paymeny:"", //支付金额
			  actual_payment:"" //实际支付金额
			  concard:{} //惠卡相关数据
			}]}}

### 抽奖相关接口

#### 创建抽奖
baseUrl + /lottery_create_lottery
传递参数:{  //抽奖数据
	  name:"",
	  details:"" //抽奖描述,
          images:[]  //图片
	  begin_at:"" //抽奖开始时间
	  interval:"" //抽奖持续事件
	  goods:[] //关联商品信息
	  open_award_at:"" //开奖时间
	  max_drawers:"" //最大可参数抽奖人数
          remaining_drawers:"", //剩余可参加抽奖的人数,
	  min_drawers:"" //至少参加人数,大于才可开奖
	  status:"" //抽奖状态
	} 
返回参数{} //创建后抽奖数据

#### 获取抽奖信息集合
baseUrl + /lottery_get_lotteries
传递参数:{id:""} //根据id查询 或者 {status:""} //根据状态查询
返回参数:{...} //抽奖数据

#### 更新抽奖
baseUrl + /lottery_update_lottery
传递参数:{...} //抽奖数据
返回参数:{...} //更新后抽奖数据

#### 发布抽奖
baseUrl + /lottery_release_lottery
传递参数:{id:""} //根据id查询 或者 {status:""} //根据状态查询
返回参数:{...} //抽奖数据

#### 用户参与抽奖
baseUrl + /lottery_create_user_lottery
传递参数:{...} //抽奖数据
返回参数:{...} //成功

#### 用户查询自己参与的抽奖
baseUrl + /lottery_get_winners
传递参数:{status:""}
返回参数:{  //用户参与的抽奖数据
          lottery_name:"",
          lottery_details:"" //抽奖描述,
          is_winner:"" //是否中奖
	  is_cash_prize:"" //是否兑奖
	  merchant_org:"" //商家信息
	  goods:[] //关联的商品信息
	  win_at:"" //中奖时间
        }

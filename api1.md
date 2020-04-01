## baseUrl

https://chick-iot.xjtszh.com/api/v1.0

### 添加优惠券

baseUrl + /EpwGoods_get_goods

```
vou: {
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

### 门店注册

baseUrl + /EpwBusiness_add_business

```
business: {
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


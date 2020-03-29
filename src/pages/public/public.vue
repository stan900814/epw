<template>
  <view>
    <view v-for="(item,index) in activity" :key="index">
      <view class="wrapper">
        <view>
          <image :src="`../../static/public/${item}.png`" lazy-load="true" style="width:66rpx;height:66rpx">
          </image>
        </view>
        <view>
          <view style="font-size:30rpx;font-family:Source Han Sans CN;font-weight:500;color:#303030;">{{item}}</view>
          <text style="font-size:24rpx;font-family:Source Han Sans CN;font-weight:400;color:#666666;">为店铺流量助力，让产品更有竞争优势</text>
        </view>
        <button class="btn" @tap="addActivities(item)">发布</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activity: ["抽奖", "优惠卷", "惠卡"]
    };
  },
  methods: {
      addActivities(event){
          console.log(event == '抽奖');
          if(event == '抽奖'){
              uni.navigateTo({
              url:"../public/addActivity/lottery/addLottery"
            })
          }else if(event == '优惠卷'){
               uni.navigateTo({
              url:"../public/addActivity/volume/addVolume"
            })
          }else{
               uni.navigateTo({
              url:"../public/addActivity/card/addCard"
            })
          }
      }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.btn {
  padding: 0 10rpx;
  margin-top: 30rpx;
  width: 88rpx;
  height: 36rpx;
  line-height: 36rpx;
  border-radius: 18rpx;
  background-color: #ff603c;
  font-size: 24rpx;
  font-family: SourceHanSansCN-Regular;
  color: #ffffff;
  text-align: center;
  vertical-align: center;
}
</style>>

</style>

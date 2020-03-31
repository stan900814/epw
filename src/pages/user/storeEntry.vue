<template>
  <view>
    <form>
      <view>
        <uni-icons type="contact" size="30"></uni-icons>
        <input type="text" v-model="store.name" placeholder="店名" />
      </view>
      <view>
        <uni-icons type="contact" size="30"></uni-icons>
        <input type="text" :value="store.location" disabled />
        <button @tap="getLocation">选择店铺位置</button>
      </view>
      <view>
        <textarea cols="20" rows="5" v-model="store.descibe" placeholder="请输入您的店铺描述"></textarea>
      </view>
      <view>
        <view class @tap="picImage">选择店铺展示图片</view>
        <view v-for="(item,index) in store.storeImgList" :key="index">
          <image src />
        </view>
      </view>
      <view><button form-type="submit" @tap="submitHandle">提交</button></view>
    </form>
  </view>
</template>
<script>
import uniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons";
export default {
  data() {
    return {
      store:{
        name:'',
        describe:"",
        location:'',
        storeImgList:[],
      },
      storeImgList: [],
      location: ""
    };
  },
  methods: {
    getLocation() {
      let that = this;
      uni.getLocation({
        type: "gcj02",
        geocode: "true",
        success: function(e) {
          console.log(e);
          let latitude = e.latitude;
          let longitude = e.longitude;
          uni.chooseLocation({
            latitude: latitude,
            longitude: longitude,
            success: function(e) {
              console.log(e);
              that.store.location = e.address;
            }
          });
        }
      });
    },
    submitHandle(){
      console.log(this.store)
    }
  }
};
</script>

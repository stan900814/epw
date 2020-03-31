<template>
  <view>
    商品名称：
    <input type="text" v-model="goodsName" placeholder="请输入商品名称" />
    <view>
      <block v-if="volumeImgList.length">
        <view v-for="(item,index) in goodsImageList" :key="index" class="preImg-container">
          <view>
            <text class="iconfont icon-guanbi" @tap="removePreImg(index)"></text>
            <image mode="aspectFit" :src="item" @tap="preImg(item)" />
          </view>
        </view>
      </block>
      <view class="add-cover-btn iconfont icon-jiahao" @tap="picImage"></view>
    </view>
    <button @tap="submitHandle">确认添加</button>
  </view>
</template>
<script>
export default {
  data() {
    return {
      goodsImageList: [],
      goodsName:""
    };
  },
  methods: {
    picImage() {
      uni.chooseImage({
        sourceType: ["camera", "album"],
        success: res => {
          this.lotteryImgList.push(...res.tempFilePaths);
        }
      });
    },
    //移除图片
    removePreImg(index) {
      this.lotteryImgList.splice(index, 1);
    },
    //预览图片
    preImg(current_item) {
      console.log(current_item);
      uni.previewImage({
        current: current_item,
        urls: this.lotteryImgList,
        loop: true,
        indicator: "number"
      })
    },
    submitHandle(){
        
    }
  }
};
</script>
<style >
</style>
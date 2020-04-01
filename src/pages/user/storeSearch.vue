<template>
  <view>
    <uni-search-bar
      class="searchBar"
      :radius="50"
      @confirm="search"
      @input="input"
      placeholder="输入店铺名"
    ></uni-search-bar>
    <view class="nameList" v-if="searchResult == ''">
      <view>
        <view v-for="(item, index) in oldStoreNameList" :key="index">
          <view class="nameListContent">
            {{ item }}
          </view>
          <view class="joinBtn">
            <button @tap="join(item)" size="mini">申请加入</button>
          </view>
        </view>
      </view>
    </view>
    <view v-else class="nameList">
      <view v-for="(item, index) in oldStoreNameList" :key="index">
        <view v-if="item === searchResult">
          <view class="nameListContent">
            <view>
              {{ item }}
            </view>
          </view>
          <view class="joinBtn">
            <button @tap="join(item)" size="mini">申请加入</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import uniSearchBar from "@dcloudio/uni-ui/lib/uni-search-bar/uni-search-bar";
export default {
  data() {
    return {
      oldStoreNameList: [],
      searchResult: ""
    };
  },
  components: { uniSearchBar },
  onLoad() {
    let that = this;
    uni.setStorage({
      key: "店铺名称",
      data: [
        "绵阳米粉",
        "绝味鸭脖",
        "曹氏鸭脖",
        "兵哥豌杂面",
        "眉州甜皮鸭",
        "老字号甜水面",
        "钟水饺",
        "龙抄手",
        "赖汤圆",
        "小龙坎火锅",
        "书亦烧仙草"
      ],
      success: function() {
        uni.getStorage({
          key: "店铺名称",
          success: function(res) {
            console.log(res.data);
            that.oldStoreNameList = res.data;
          }
        });
      }
    });
  },
  methods: {
    input(e) {
      console.log(e);
    },
    search(e) {
      console.log(e);
      this.searchResult = e.value;
    },
    join(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.nameList {
  view {
    view {
      list-style: none;
      text-align: center;
      display: flex;
      justify-content: space-between;
      padding: 10rpx 10rpx 10rpx 27.5rpx;
      font-size: 28rpx;
      color: #333;
      // border-bottom: 1rpx solid #ccc;
    }
  }

  .nameListContent {
    margin-top: 15rpx;
    // display: flex;
    // paading-left: 20rpx;
  }
  .joinBtn {
    display: flex;
  }
  button {
    background-color: #ff603c;
    // padding-right: 20rpx;
  }
}
</style>

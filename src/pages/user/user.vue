<template>
  <view>
    <view>
      <view
        >用户信息以及扫码
        <button open-type="getUserInfo" @getuserinfo="getUserInfo">
          获取用户信息
        </button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
          获取手机号
        </button>
        <button @tap="login">登录</button></view
      >
      <view>
        <button @tap="scanCode">
          <uni-icons type="camera" size="20"></uni-icons> <text>扫码</text>
        </button>
      </view>
    </view>
    <view>
      管理
      <uni-grid :column="3" :show-border="true" :square="true">
        <uni-grid-item>
          <button @tap="skip('店铺管理')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">店铺管理</text>
          </button>
        </uni-grid-item>
        <uni-grid-item>
          <button @tap="skip('购买服务')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">购买服务</text>
          </button>
        </uni-grid-item>
      </uni-grid>
    </view>
    <view>
      设置
      <uni-grid :column="4" :show-border="true" :square="true">
        <uni-grid-item>
          <button @tap="skip('门店搜索')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">门店搜索</text>
          </button>
        </uni-grid-item>
        <uni-grid-item>
          <button @tap="skip('门店入驻')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">门店入驻</text>
          </button>
        </uni-grid-item>
        <uni-grid-item>
          <button @tap="skip('门店选择')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">门店选择</text>
          </button>
        </uni-grid-item>
        <uni-grid-item>
          <button @tap="skip('人员审核')">
            <uni-icons type="email" size="20"></uni-icons>
            <text class="text">人员审核</text>
          </button>
        </uni-grid-item>
      </uni-grid>
    </view>
  </view>
</template>

<script>
import uniGrid from "@dcloudio/uni-ui/lib/uni-grid/uni-grid";
import uniGridItem from "@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item";
import uniIcons from "@dcloudio/uni-ui/lib/uni-icons/uni-icons";
export default {
  data() {
    return {
    };
  },
  components: {
    uniGrid,
    uniGridItem,
    uniIcons
  },
  onLoad() {},
  methods: {
    getUserInfo(res) {
      console.log(res);
    },
    getPhoneNumber(res) {
      console.log(res);
    },
    login() {
      wx.login({
        success(res) {
          console.log(res.code);
        }
      });
    },
    scanCode() {
      uni.scanCode({
        onlyFromCamera: true,
        scanType: "qrCode",
        success: function(params) {
          console.log(params);
        }
      });
    },
    skip(key) {
      switch (key) {
        case "店铺管理":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        case "购买服务":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        case "门点搜索":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        case "门店入驻":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        case "门店选择":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        case "人员审核":
			uni.navigateTo({
				url:'',
				success:function(){}
			})
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style></style>

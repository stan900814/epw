<template>
	<view>
		<form >
			<view>
				<text>惠卡名称</text>
				<input type="text" placeholder="此处由后端直接拿到店铺名称不需要商家填写" disabled>
			</view>
			<view>
				<text>惠卡描述</text><input v-model="describe" type="text" placeholder="请输入惠卡描述">
			</view>
			<view>
				<text>请上传惠卡图片</text>
				<button @tap="chooseImg" size="mini">选择上传图片</button>
				<view v-for="(item,index) in imgList" :key="index">
					<img :src="imgList[index]" mode="aspectFill" >
			</view>
			</view>
			<view>
				<text>惠卡面值：</text>
				<input type="text" placeholder="例：100" v-model="cardInfo.value">元
			</view>
			<view>
				<text>惠卡销售价：</text>
				<input type="text" placeholder="例：90" v-model="cardInfo.price">元
			</view>
			<view>
				<text>折扣：</text>
				<input type="text" placeholder="例：9.5" v-model="cardInfo.discount">折
			</view>
			<view>
				<text>惠卡数量：</text>
				<input type="text" placeholder="例：10" v-model="cardInfo.amount">张
			</view>
		<button size="mini" form-type="submit" @tap="submitHandle">提交</button></form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				describe:String,
				imgList:[],
				cardInfo:{
					"value":String,
					"price":String,
					"discount":String,
					"amount":String
				}
			}
		},
		onLoad() {

		},
		methods: {
			chooseImg(){
				uni.chooseImage({
					sourceType:['album','camera'],
					success:(res)=>{
						console.log(res)
						this.imgList = res.tempFilePaths	
					}
				})
			},
			submitHandle(){
				console.log(this.cardInfo)
				uni.navigateTo({
					url:'./cardInfo'
				})
			}
		}
	}
</script>

<style>

</style>

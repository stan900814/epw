<template>
	<view>
		<view>
			<form>
				<view>
					<text>名称：</text>
					<input type="text" placeholder="请输入" v-model="volumeInfo.name">
				</view>
				<view>
					<text>选择优惠卷封面：</text>
					<img src="*" alt="图片占位" @tap="picImage">
					<view v-for="(item,index) in volumeImgList" :key="index">
						<img src="volumeImgList[index]">
					</view>
				</view>
				<view>
					<text>优惠类型：</text>
					<picker disabled>通用</picker>
				</view>
				<view>
					<text>折扣力度：</text>
					<input type="text" placeholder="例：9.5" v-model="volumeInfo.discount">折
				</view>
				<view>
					<text>数量：</text>
					<input type="text" placeholder="例：10" v-model="volumeInfo.amount">
				</view>
				<view>
					<text>适用商品：{{goods.name}}</text>
					
				</view>
				<view>
					<input type="text" placeholder="备注" v-model="volumeInfo.marks">
				</view>
				<button @tap="submitHandle">提交</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				volumeImgList:Array,volume,
				goods:{
					"name":String,
				},
				volumeInfo:{
					"name":String,
					"marks":String,
					"amount":String,
					"discount":String
				}	
			}
		},
		onLoad() {

		},
		methods: {
			picImage(){
				uni.chooseImage({
					sourceType:['camera','album'],
					success:()=>{
						this.volumeImgList = res.tempFilePaths
					}
				})
			},
			submitHandle(){
				console.log('----------')
				console.log(volumeImgList)
				console.log('----------')
				console.log(goods)
				console.log('----------')
				console.log(volumeInfo)
				uni.navigateTo({
					url:'./volumeInfo.vue'
				})
			}
		}
	}
</script>

<style>

</style>

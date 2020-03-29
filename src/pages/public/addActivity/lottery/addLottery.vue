<template>
	<view>
		<view>
			<form>
				<view>
					<text>活动名称：</text>
					<input type="text" placeholder="请输入此次抽奖活动名称" v-model="lotteryInfo.name">
				</view>
				<view>
					<text>上传图片</text>
					<img src="*" alt="图片占位" @tap="picImage">
					<view v-for="(item,index) in lotteryImgList" :key="index">
						<img src="lotteryImgList[index]">
					</view>
				</view>
				<view>
					<text>奖品：</text>
					<input type="text" placeholder="例:iphoneX一台" v-model="lotteryInfo.prize">
				</view>
				<view>
					<text>详细信息：</text>
					<input type="text" placeholder="" v-model="lotteryInfo.detail">折
				</view>
				<view>
					<text>抽奖人数下限：</text>
					<input type="text" placeholder="请输入最少人数" v-model="lotteryInfo.minAmount">人
				</view>
				<view>
					<text>抽奖人数上限：</text>
					<input type="text" placeholder="请输入最少人数" v-model="lotteryInfo.maxAmount">人
				</view>
				<view>
					<text>中奖人数：</text>
					<input type="text" placeholder="请输入中奖人数" v-model="lotteryInfo.awardAmount">人
				</view>
				<view>
					<text>开始时间</text>
					<picker mode="time" v-model="lotteryInfo.start">请选择时间 ></picker>
				</view>
				<view>
					<text>活动持续时间</text>
					<input type="text" placeholder="" v-model="lotteryInfo.duration">天
				</view>
				<view>
					<text>开奖时间</text>
					<picker mode="time" v-model="lotteryInfo.end">请选择时间 ></picker>
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
				lotteryImgList:Array,
				lotteryInfo:{
					"name":String,
					"prize":String,
					"detail":String,
					"minAmount":String,
					"maxAmount":String,
					"awardAmount":String,
					"start":String,
					"end":String,
					"duration":String,
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
						this.lotteryImgList = res.tempFilePaths
					}
				})
			},
			submitHandle(){
				console.log('----------')
				console.log(lotteryImgList)
				console.log('----------')
				console.log(lotteryInfo)
				uni.navigateTo({
					url:'./lotteryInfo.vue'
				})
			}
		}
	}
</script>

<style>

</style>

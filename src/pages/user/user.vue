<template>
	<view>
		<view>
			管理
			<uni-grid :column="3" :show-border="false"  :square="false">
				<uni-grid-item>
					<text class="text">店铺管理</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">购买服务</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view>
			设置
			<uni-grid :column="3" :show-border="false"  :square="false">
				<uni-grid-item>
					<text class="text">门店搜索</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">门店入驻</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">门店选择</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">人员审核</text>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
import uniGrid from "@dcloudio/uni-ui/lib/uni-grid/uni-grid"
import uniGridItem from "@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item"
	export default {
		data() {
			return {
				title: ''
			}
		},
		components:{
			uniGrid,
			uniGridItem
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>

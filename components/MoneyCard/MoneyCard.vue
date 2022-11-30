<!--  -->
<template>
	<view class='money-card'>
		<view>
			<view class="card-top">
				<text class="card-title money-card-font-normal">{{title}}</text>
				<image class="card-hidden-img" @click="clickHidden" :src="getHiddenUrl" :draggable="false"></image>
			</view>
			<text class="card-number" :class="{'card-title-no-hidden': !isHidden }">{{getMoney(number)}}</text>
		</view>
		<view class="card-bottom money-card-font-normal">
			<text>{{text1}} <text :class="{'card-bottom-hidden': isHidden}"> {{getMoney(item1)}} </text> </text>
			<text>{{text2}} <text :class="{'card-bottom-hidden': isHidden}"> {{getMoney(item2)}} </text> </text>
		</view>
	</view>
</template>

<script lang='ts'>
	import {
		reactive,
		toRefs,
		onBeforeMount,
		onMounted,
		computed
	} from 'vue'
	interface DataProps {
		hiddens: object,
			isHidden: boolean
	}
	export default {
		name: 'MoneyCard',
		props: {
			title: String,
			number: String,
			text1: String,
			item1: String,
			text2: String,
			item2: String
		},
		setup() {
			const data: DataProps = reactive({
				hiddens: [
					'../../static/no_hidden.svg',
					'../../static/hidden.svg'
				],
				isHidden: false
			})
			onBeforeMount(() => {})
			onMounted(() => {})
			const refData = toRefs(data);
			const getHiddenUrl = computed(() => {
				return data.isHidden ? data.hiddens[1] : data.hiddens[0];
			})
			const getMoney = (num: String): String => {
				if (data.isHidden) {
					return "∗∗∗∗∗∗";
				} else {
					return "￥" + num;
				}
			}
			const clickHidden = () => {
				data.isHidden = !data.isHidden;
			}
			return {
				getHiddenUrl,
				clickHidden,
				getMoney,
				...refData,
			}

		}
	};
</script>
<style scoped>
	.money-card {
		background-image: url("../../static/wave-650-350.svg");
		background-repeat: no-repeat;
		background-size: cover;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		height: 380rpx;
		/* width: 740rpx; */
		width: 100%;

		padding: 32rpx 32rpx;

		box-sizing: border-box;
		border-radius: 12px;

		color: white;
	}

	.money-card-font-normal {
		font-weight: 600;
	}

	.card-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.card-title {
		display: block;
	}

	.card-number {
		display: block;
		margin-top: 40rpx;
		/* margin-left: -1px; */

		font-size: 32px !important;
		font-weight: 700;
	}

	.card-title-no-hidden {
		margin-left: -5px;
	}

	.card-hidden-img {
		width: 20px;
		height: 20px;
	}

	.card-bottom {
		display: flex;
		flex-direction: column;
	}

	.card-bottom-hidden {
		margin-left: 14px;
	}
</style>

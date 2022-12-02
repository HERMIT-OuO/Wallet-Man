<template>
	<view class="status-bar"></view>
	<view class="index-container">
		<text class="index-h1">Wallet Man</text>
		<view class="index-swiper">
			<MoneyCard title="本月支出" number="1000.00" text1="本月收入" item1="2000.00" text2="本月结余" item2="1000.00">
			</MoneyCard>
		</view>
		<!-- <swiper class="index-swiper" @change="swapeChange" :duration="1000" easing-function="linear">
			<swiper-item>
				<MoneyCard title="本月支出" number="1000.00" text1="本月收入" item1="2000.00" text2="本月结余" item2="1000.00">
				</MoneyCard>
			</swiper-item>
			<swiper-item>
				<MoneyCard title="我的净资产" number="1000.00"></MoneyCard>
			</swiper-item>
		</swiper> -->
		<HoverButton @click="openPop"></HoverButton>
		<uni-popup ref="popup" type="bottom">
			<Calculator></Calculator>
		</uni-popup>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs,
		onBeforeMount,
		onMounted,
		ref,
		nextTick 
		// getCurrentInstance
	} from 'vue'
	interface DataProps {
		// swape 组件前边距
		pMargin: string,
			// swape 组件后边距
			nMargin: string,
	}
	export default {
		name: '',
		setup() {
			const data: DataProps = reactive({
				pMargin: '0px',
				nMargin: '15px'
			})
			onBeforeMount(() => {})
			onMounted(() => {})
			const scroll = (e: any) => {
				console.log(e)
				// this.old.scrollTop = e.detail.scrollTop
			}
			const swapeChange = (e: any): void => {
				console.log(e)
				if (e?.detail.current === 0) {
					data.pMargin = '0px';
					data.nMargin = '15px';
				} else {
					data.pMargin = '25px';
					data.nMargin = '0px';
				}
			}
			// 开启 Pop
			// const vm = getCurrentInstance() || null;
			let popup = ref(null)
			const openPop = () => {
				console.log(popup);
				popup.value.open();
			}
			const refData = toRefs(data);
			return {
				scroll,
				swapeChange,
				openPop,
				popup,
				...refData,
			}

		}
	};
</script>

<style>
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.index-container {
		padding: 20px;
		font-size: 14px;
		line-height: 21px;
	}

	.index-h1 {
		font-size: 28px;
		font-weight: 600;
	}

	.index-h1::after {
		display: block;

		margin-top: 18rpx;

		width: 80rpx;
		height: 5px;

		content: '';

		background-color: #0066ff;
		border-radius: 5px;
	}

	.index-swiper {
		margin-top: 36rpx;
		width: 100%;
		height: 380rpx;
	}
</style>

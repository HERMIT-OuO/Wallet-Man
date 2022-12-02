<!--  -->
<template>
	<view class='calculator'>
		<uni-row class="calculator-res">
			<uni-col class="calculator-cell" :span="6">
				<text>￥</text>
			</uni-col>
			<uni-col class="calculator-cell" style="justify-content: start;" :span="18">
				<text>100000</text>
			</uni-col>
		</uni-row>
		<uni-row class="calculator-input">
			<uni-col :span="6">
				<button class="calculator-button">C</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
			<uni-col :span="6">
				<button class="calculator-button">123</button>
			</uni-col>
		</uni-row>
	</view>
</template>

<script lang='ts'>
	import {
		reactive,
		toRefs,
		onBeforeMount,
		onMounted
	} from 'vue'
	interface DataProps {
		resNum: number
	}
	export default {
		name: 'Calculator',
		setup() {
			const data: DataProps = reactive({
				resNum: 0
			})
			onBeforeMount(() => {})
			onMounted(() => {})
			const refData = toRefs(data);
			return {
				...refData,
			}

		}
	};
</script>
<style scoped>
	.calculator {
		height: 100%;
		width: 100%;
		
		background-color: #f5f5f5;
	}
	
	.calculator-res {
		display: flex;
		flex-direction: row;
		
		height: 150rpx;
	}
	
	.calculator-cell {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		font-size: 32px;
	}
	
	.calculator-button {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		height: 150rpx;
		
		font-size: 28px;
	}
	
	.calculator-button::after {
		border-radius: 0;
	}
</style>

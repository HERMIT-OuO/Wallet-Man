<!--  -->
<template>
	<view class='calculator'>
		<uni-row class="calculator-res">
			<uni-col class="calculator-cell" :span="6">
				<text>￥</text>
			</uni-col>
			<uni-col class="calculator-cell" style="justify-content: start; overflow-x: auto;" :span="18">
				<text>{{getResNum}}</text>
			</uni-col>
		</uni-row>
		<uni-row class="calculator-input">
			<view class="calculator-input-left">
				<view class="calculator-input-row">
					<view class="calculator-button" @click="clickButton('AC')">
						C
					</view>
					<view class="calculator-button" @click="clickButton('/')">
						/
					</view>
					<view class="calculator-button" @click="clickButton('＊')">
						＊
					</view>
				</view>
				<view class="calculator-input-row">
					<view class="calculator-button" @click="clickButton(1)">
						1
					</view>
					<view class="calculator-button" @click="clickButton(2)">
						2
					</view>
					<view class="calculator-button" @click="clickButton(3)">
						3
					</view>
				</view>
				<view class="calculator-input-row">
					<view class="calculator-button" @click="clickButton(4)">
						4
					</view>
					<view class="calculator-button" @click="clickButton(5)">
						5
					</view>
					<view class="calculator-button" @click="clickButton(6)">
						6
					</view>
				</view>
				<view class="calculator-input-row">
					<view class="calculator-button" @click="clickButton(7)">
						7
					</view>
					<view class="calculator-button" @click="clickButton(8)">
						8
					</view>
					<view class="calculator-button" @click="clickButton(9)">
						9
					</view>
				</view>
				<view class="calculator-input-row">
					<view class="calculator-button" @click="clickButton(0)" style="flex: 2;">
						0
					</view>
					<view class="calculator-button" @click="clickButton('.')" style="flex: 1;">
						.
					</view>
				</view>
			</view>
			<view class="calculator-input-right">
				<view class="calculator-button">
					<image class="calculator-button-backspace" @click="clickButton('backspace')"
						src="../../backspace.svg"></image>
				</view>
				<view class="calculator-button" @click="clickButton('－')">
					－
				</view>
				<view class="calculator-button" @click="clickButton('＋')">
					＋
				</view>
				<view class="calculator-button calculator-button-ok" style="flex: 2;">
					OK
				</view>
			</view>
		</uni-row>
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
		resNum: string,
		// 记录操作符情况
		opFlag: boolean
	}
	export default {
		name: 'Calculator',
		setup() {
			const data: DataProps = reactive({
				resNum: "0",
				opFlag: false
			})
			onBeforeMount(() => {})
			onMounted(() => {})
			// 处理点击事件
			const clickButton = (which: any): void => {
				const op = ['＋', '－', '＊', '/'];
				if (which === 'AC') {
					data.resNum = "0";
				} else if (which >= 0 && which <= 9) {
					// 数字
					if (data.resNum == "0") {
						data.resNum = String(which);
					} else {
						data.resNum = data.resNum + which;
					}
				} else if (op.includes(which)) {
					// 是操作符
					if (data.opFlag === false) {
						data.resNum = data.resNum + which ;
						data.opFlag = true;
					} else {
						data.resNum = data.resNum.substring(0, data.resNum.length - 1);
					}
				} else if (which === 'backspace') {
					// 退格
					if (which !== "" && which !== "0") {
						data.resNum = data.resNum.substring(0, data.resNum.length - 1);
					} else if (which.length === 1) {
						data.resNum = "0";
					}
				}
			};
			// 返回千分位数值显示
			const getResNum = computed(() => {
				if (data.resNum === "") {
					return "0";
				} else {
					return String(data.resNum).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				}
			});
			const refData = toRefs(data);
			return {
				clickButton,
				getResNum,
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

	.calculator-input {
		display: flex;
		flex-direction: row;
		justify-content: baseline;
		align-items: center;

		height: 550rpx;
	}

	.calculator-input-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		width: 100%;
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

		height: 110rpx;
		width: 100%;

		font-size: 24px;

		box-sizing: border-box;
		border: 0.5px solid #bebebe;
	}

	.calculator-button:active {
		color: white;
		background-color: #002233;
	}

	.calculator-button-backspace {
		width: 24px;
		height: 24px;
	}

	.calculator-button:active image {
		filter: invert(100%);
	}

	.calculator-input-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		flex: 3;
	}

	.calculator-input-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		flex: 1;

		height: 100%;
	}

	.calculator-button-ok {
		background-color: #0066ff;
		color: white;
	}
</style>

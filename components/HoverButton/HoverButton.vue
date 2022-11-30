<!--  -->
<template>
	<view class='hover-button'>
		<image class="button-img" src="../../static/add.svg"></image>
	</view>
</template>

<script lang='ts'>
	import {
		reactive,
		toRefs,
		onBeforeMount,
		onMounted
	} from 'vue'
	interface DataProps {}
	export default {
		name: 'HoverButton',
		setup() {
			const data: DataProps = reactive({

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
	.hover-button {
		position: fixed;
		right: 20px;
		bottom: 5%;
	}
	.button-img {
		width: 50px;
		height: 50px;
		
		background-color: #0066ff;
		
		border-radius: 50%;
	}
	
	/* .button-img:hover {
		background-color: #002233;
	} */
	
	.button-img:active {
		background-color: #002233;
	}
</style>

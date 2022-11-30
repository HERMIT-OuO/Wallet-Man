<!--  -->
<template>
	<view class=''>

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
		name: '',
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
</style>

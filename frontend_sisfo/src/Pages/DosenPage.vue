<template>
	<div class="hm">
		<Side></Side>
		<div class="content">
			<Title class="tt"></Title>
			<Table class="tb"></Table>
		</div>
	</div>
</template>

<script>
	import Side from "@/components/side.vue";
	import Title from "@/components/Title.vue";
	import Table from "@/components/TableMhs.vue";
	export default {
		name: "DosenPage",
		components: {
			Title,
			Side,
			Table,
		},
	};
</script>

<style Scoped>
	* {
		margin: 0;
	}
	.hm {
		min-height: 100vh;
		width: 100vw;
		display: flex;
		margin: 0;
	}
	.content {
		margin-left: 5%;
		width: 140ex;
	}

	.tb {
		width: 100rem;
	}

	.tt {
		margin-top: 3%;
		margin-bottom: 3%;
	}
</style>

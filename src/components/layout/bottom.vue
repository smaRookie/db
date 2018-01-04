<template>	
	<div class="bottom clearfix">
		<div class="bottom_content">
			<span class="item" v-for="item in con">{{item}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
 /* eslint-disable */
	export default {
			data () {
				return {
					con: ['电影', '图书', '个人']
				}
			},
			mounted () {
			},
			methods: {
			}
	}
</script>
<style>
	.bottom {
		width: 100%;
		height: 1rem;
		position: absolute;
		bottom: 0;
	}
	.bottom_content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.bottom_content .item {
		flex-grow: 1;
		font-size: 0.4rem;
		display: inline-block;
		height: 1rem;
		font-family: '微软雅黑';
		letter-spacing: 1px;
		text-align: center;
		align-items: center;
		line-height: 1rem;
		background-color: #DCD7D7;
		cursor: pointer;
	}
	.clearfix { 
		*zoom: 1; 
	} 
	.clearfix:before, .clearfix:after { 
		display: table; 
		line-height: 0; 
		content: ""; 
	} 
	.clearfix:after { 
		clear: both; 
	} 
</style>
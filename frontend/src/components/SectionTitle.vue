<script setup>
import { defineProps, onMounted } from 'vue';
const props = defineProps({
	title: String,
});

onMounted(() => {
	console.log(props.title);
});
</script>

<template>
	<h3 class="section-title">{{ title }}</h3>
</template>

<style>
.section-title {
	width: max-content;
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 48px;
	margin: 0px 0px 50px 0px;
	border-bottom: 4px solid #8a84e2;
}
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	skill: String,
});
</script>

<template>
	<div class="skill-card">
		<p>{{ props.skill }}</p>
	</div>
</template>

<style>
.skill-card {
	padding: 5px;
	background: #e0def7;
	border-radius: 10px;
	width: max-content;
}

.skill-card p {
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	color: #5349d4;
	margin: 0px;
}
</style>

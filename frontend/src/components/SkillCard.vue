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
	font-weight: 400;
	transition: all 0.1s ease;
	font-size: 1.5em;
}

.skill-card:hover {
	background: #d1cef3;
	font-weight: 600;
}

.skill-card p {
	font-family: 'Open Sans';
	font-style: normal;
	color: #5349d4;
	margin: 0px;
}
</style>

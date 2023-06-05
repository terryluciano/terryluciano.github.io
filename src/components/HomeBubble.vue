<script setup>
import { ref, onBeforeMount } from '@vue/runtime-core';

const bubbleID = ref(null);
const randomSpeed = Math.random() * 5 + 10;

const bubbleStyle = {
	width: '0px',
	height: '0px',
	transitionProperty: 'top, left',
	transitionDuration: '7s',
	transitionTimingFunction: 'linear',
};

onBeforeMount(() => {
	const randomWidthAndHeight = Math.random() * 5 + 1;

	bubbleStyle.width = randomWidthAndHeight + 'vw';
	bubbleStyle.height = randomWidthAndHeight + 'vw';

	bubbleStyle.transitionDuration = randomSpeed + 's';
});

// Random starting point
const randomX = Math.random() * 100;
const randomY = Math.random() * 100;

bubbleStyle.top = randomY + '%';
bubbleStyle.left = randomX + '%';

setTimeout(() => {
	const randomDirection = Math.random() * 4;

	if (randomDirection < 1) {
		bubbleID.value.style.top = '100%';
		bubbleID.value.style.left = randomLeftValue();
	} else if (randomDirection < 2) {
		bubbleID.value.style.top = '0%';
		bubbleID.value.style.left = randomLeftValue();
	} else if (randomDirection < 3) {
		bubbleID.value.style.left = '100%';
		bubbleID.value.style.top = randomTopValue();
	} else {
		bubbleID.value.style.left = '0%';
		bubbleID.value.style.top = randomTopValue();
	}
}, 100);

function randomTopValue() {
	return Math.random() * 100 + '%';
}

function randomLeftValue() {
	return Math.random() * 100 + '%';
}

setInterval(() => {
	// check current endpoint
	if (bubbleID.value.style.top === '100%') {
		bubbleID.value.style.top = '0%';
		bubbleID.value.style.left = randomLeftValue();
	} else if (bubbleID.value.style.top === '0%') {
		bubbleID.value.style.top = '100%';
		bubbleID.value.style.left = randomLeftValue();
	} else if (bubbleID.value.style.left === '100%') {
		bubbleID.value.style.left = '0%';
		bubbleID.value.style.top = randomTopValue();
	} else {
		bubbleID.value.style.left = '100%';
		bubbleID.value.style.top = randomTopValue();
	}
}, randomSpeed * 1000);
</script>

<template>
	<div ref="bubbleID" class="home-bubble" :style="bubbleStyle"></div>
</template>

<style>
.home-bubble {
	border-style: solid;
	border-width: 10px;
	border-color: #5349d4;
	position: absolute;
	z-index: 0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

@media screen and (max-width: 600px) {
	.home-bubble {
		border-width: 5px;
	}
}
</style>

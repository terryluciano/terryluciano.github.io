<script setup>
import { onBeforeMount, ref, defineProps } from '@vue/runtime-core';

const props = defineProps({
	bID: String,
});

console.log(props.bID);

let clientHeight = ref(window.visualViewport.height);
let clientWdith = ref(window.visualViewport.width);

let TopPercent;
let LeftPercent;

/*
function setSpeed() {}

function startDirection() {}
*/

/**
 * @param {string} startPoint
 */

function randomDirection(startPoint) {
	let wallArray = ['u', 'd', 'l', 'r'];

	// r == right
	if (startPoint == 'u') {
		wallArray.splice(wallArray.indexOf('u'), 1);
	} else if (startPoint == 'd') {
		wallArray.splice(wallArray.indexOf('d'), 1);
	} else if (startPoint == 'l') {
		wallArray.splice(wallArray.indexOf('l'), 1);
	} else {
		wallArray.splice(wallArray.indexOf('r'), 1);
	}

	const randomWall = Math.floor(Math.random() * wallArray.length);
	return wallArray[randomWall];
}

/**
 * @param {string} currentLeft
 * @param {string} currentTop
 */

const randomNewEndPoint = (currentTop, currentLeft) => {
	const left = parseFloat(currentLeft.replace('%', ''));
	const top = parseFloat(currentTop.replace('%', ''));

	let newWall;

	if (left <= 0) {
		newWall = randomDirection('l');
	} else if (left >= 100) {
		newWall = randomDirection('r');
	} else if (top <= 0) {
		newWall = randomDirection('u');
	} else if (top >= 100) {
		newWall = randomDirection('d');
	}
	console.log(newWall);
};

onBeforeMount(() => {
	TopPercent =
		(Math.floor(Math.random() * clientHeight.value) / clientHeight.value) *
			100 +
		'%';
	LeftPercent =
		(Math.floor(Math.random() * clientWdith.value) / clientWdith.value) *
			100 +
		'%';

	console.log(TopPercent, LeftPercent);
	randomNewEndPoint(TopPercent, LeftPercent);
});
</script>

<template>
	<div
		:id="bubbleID"
		class="home-bubble"
		:style="{ top: TopPercent, left: LeftPercent }"
	>
		Hi
	</div>
</template>

<style>
.home-bubble {
	background-color: #5349d4;
	position: absolute;
	z-index: 0;
}
</style>

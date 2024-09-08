<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    height: {
        type: Number,
        default: 50,
    },
    class: String,
});
</script>

<template>
    <svg
        :width="props.height * (51 / 50)"
        :height="props.height"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="props.class"
    >
        <path
            d="M31.9092 6.25027H44.4092M44.4092 6.25027V18.7503M44.4092 6.25027L21.4925 29.1669M38.1592 27.0836V39.5836C38.1592 40.6887 37.7202 41.7485 36.9388 42.5299C36.1574 43.3113 35.0976 43.7503 33.9925 43.7503H11.0758C9.97078 43.7503 8.91097 43.3113 8.12957 42.5299C7.34817 41.7485 6.90918 40.6887 6.90918 39.5836V16.6669C6.90918 15.5619 7.34817 14.5021 8.12957 13.7207C8.91097 12.9393 9.97078 12.5003 11.0758 12.5003H23.5758"
            stroke="currentColor"
            stroke-width="4.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

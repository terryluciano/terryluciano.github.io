<script setup>
import profilePic from '@/assets/profile-picture-fixed.jpg';
</script>

<template>
    <div id="home" class="w-full h-full flex-center md:flex-row flex-col md:gap-8 gap-4 py-40">
        <div
            class="flex-center size-[200px] bg-light-gradient-135 dark:bg-dark-gradient-135 p-2 rounded-full"
        >
            <img class="size-full rounded-full shrink-0" :src="profilePic" />
        </div>
        <div
            class="flex flex-col gap-2 font-Inter xs:text-5xl text-4xl font-semibold text-light-text dark:text-dark-text drop-shadow-light-shadow dark:drop-shadow-dark-shadow md:items-start justify-start items-center"
        >
            <h1 class="md:block hidden">Hey,</h1>
            <h1>
                I’m
                <span
                    class="text-transparent bg-clip-text bg-light-gradient-90 dark:bg-dark-gradient-90"
                    >Terry Luciano</span
                >
            </h1>
            <h2 class="sm:text-[32px] text-2xl">Full-Stack Developer</h2>
        </div>
    </div>
</template>

<style></style>

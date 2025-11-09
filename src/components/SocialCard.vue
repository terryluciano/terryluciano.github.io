<script setup>
import { defineProps, reactive, ref } from 'vue';
import { useDark } from '@vueuse/core';
import LinkIcon from '@/components/icons/LinkIcon.vue';

const props = defineProps({
    title: String,
    link: String,
    bgImage: {
        type: String,
        default: null,
    },
});

const isDark = useDark();

const cardBg = reactive({
    backgroundImage: props.bgImage ? `url(${props.bgImage})` : undefined,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
});

const isHover = ref(false);

const onMouseOver = () => (isHover.value = true);
const onMouseLeave = () => (isHover.value = false);

const onClick = () => {
    if (props.link) window.open(props.link, '_blank');
};
</script>

<template>
    <div
        class="relative flex-col flex-center gap-2 bg-light-social-card dark:bg-dark-social-card w-full md:h-64 sm:h-48 xxs:h-32 h-24 rounded-lg text-light-text dark:text-dark-text overflow-hidden cursor-pointer group"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
        @click="onClick"
    >
        <div
            v-if="props.bgImage"
            class="absolute size-[104%] transition-all duration-200 ease-in-out top-[100%] group-hover:-top-[2%] -left-[2%] z-[1] group-hover:blur-sm"
            :style="cardBg"
        />

        <div
            class="relative size-[66px] transition-all duration-200 z-10 hidden xxs:flex justify-center items-center"
            :class="{ 'group-hover:text-light-text': isDark }"
        >
            <Transition name="fade-icon">
                <slot v-if="!isHover"></slot>
                <LinkIcon v-else-if="isHover" :height="64" />
            </Transition>
        </div>

        <p
            class="font-Inter font-medium md:text-5xl sm:text-4xl xxs:text-2xl text-xl z-10 transition-all duration-200"
            :class="{ 'group-hover:text-light-text': isDark }"
        >
            {{ props.title }}
        </p>
    </div>
</template>

<style scoped>
.fade-icon-enter-active,
.fade-icon-leave-active {
    transition: opacity 0.2s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.fade-icon-enter-from,
.fade-icon-leave-to {
    opacity: 0;
}
.fade-icon-enter-to,
.fade-icon-leave-from {
    opacity: 1;
}
</style>

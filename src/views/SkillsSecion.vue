<script setup>
import SectionWrapper from '../components/SectionWrapper.vue';
import SkillContainer from '../components/SkillContainer.vue';
import { Skills } from '@/constants/skills';

import skillsSvg from '../assets/skills.svg';

Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false,
});
</script>

<template>
    <SectionWrapper title="Skills" id="skills">
        <div class="flex flex-row items-center gap-6 w-full">
            <div class="flex flex-col xs:gap-4 gap-2 w-full">
                <SkillContainer
                    v-for="(value, key) in Skills"
                    :key="key"
                    :title="key.capitalize()"
                    :skills="value"
                />
            </div>

            <img id="skills-picture" class="xl:w-full w-[50%] md3:block hidden" :src="skillsSvg" />
        </div>
    </SectionWrapper>
</template>

<style></style>

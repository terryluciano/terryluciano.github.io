<script setup>
import SectionWrapper from '../components/SectionWrapper.vue';
import aboutMeSvg from '../assets/about-me.svg';
</script>

<template>
    <SectionWrapper id="about-me" title="About Me">
        <div class="w-full h-auto flex flex-row justify-center items-center gap-6">
            <div class="w-full h-auto flex flex-col justify-start items-start gap-2">
                <h4 class="font-Inter text-4xl font-medium">Just a broke young adult</h4>
                <p class="w-full font-Poppins font-normal text-base">
                    Project ipsum figma select pixel component. Overflow community group export
                    undo. Rotate undo stroke shadow project overflow inspect team team thumbnail.
                    Figma layer undo community underline blur. Inspect rotate pen slice background
                    boolean object ipsum union device. Boolean main draft inspect pencil selection.
                    Stroke vector pen library figjam thumbnail variant stroke strikethrough.
                    Scrolling underline slice bold draft move boolean. Union connection move union
                    create connection ipsum community strikethrough. Object outline arrow font
                    invite plugin font editor. Selection overflow edit overflow editor project
                    overflow horizontal. Variant select line pixel clip. Clip select mask device
                    slice bold duplicate project prototype. Vector figma bullet style library
                    flatten device line mask. Undo edit star asset share subtract.
                </p>
            </div>
            <img :src="aboutMeSvg" alt="about me illustration" class="h-64" />
        </div>
    </SectionWrapper>
</template>

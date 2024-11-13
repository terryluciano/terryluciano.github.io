<script setup>
import SectionWrapper from '../components/SectionWrapper.vue';
import aboutMeSvg from '../assets/about-me.svg';
</script>

<template>
    <SectionWrapper id="about-me" title="About Me">
        <div class="w-full h-auto flex flex-row justify-center items-center gap-6">
            <div class="w-full h-auto">
                <p>
                    Hey! I'm Terrence Luciano, but you can call me Terry. I've been programming for
                    over four years and will be graduating with my Bachelor's in Information
                    Technology from William Paterson University in December 2024. My passion for
                    coding began with my first Java programming class at CCM, which sparked my love
                    for creating and problem-solving. After that, I taught myself Python and
                    JavaScript to broaden my skill set.
                </p>
                <br />
                <p>
                    From a young age, I've always enjoyed creating things—whether it was through
                    filmmaking or music producing and now through programming. I specialize in
                    developing web applications and love working on bespoke projects that push the
                    boundaries of innovation. I'm continually learning and excited to expand my
                    expertise into new technologies.
                </p>
                <br />
                <p>
                    Thanks for stopping by my portfolio, and I look forward to connecting with you!
                </p>
            </div>
            <img
                :src="aboutMeSvg"
                alt="about me illustration"
                class="md:block hidden flex-shrink-0 w-[336px]"
            />
        </div>
    </SectionWrapper>
</template>

<style scoped>
p {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
}
</style>

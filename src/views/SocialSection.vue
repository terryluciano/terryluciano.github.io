<script setup>
import SectionWrapper from '../components/SectionWrapper.vue';
import SocialCard from '../components/SocialCard.vue';

import ResumeIcon from '@/components/icons/ResumeIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';

import linkedInBg from '@/assets/linkedin.png';
import githubProfileBg from '@/assets/githubProfile.png';
</script>

<template>
    <SectionWrapper title="Socials" id="social">
        <div class="flex flex-row items-center justify-center md2:gap-6 xxs:gap-4 gap-2 w-full">
            <SocialCard
                title="Github"
                :bgImage="githubProfileBg"
                link="https://github.com/terryluciano"
            >
                <GithubIcon :height="64" />
            </SocialCard>
            <SocialCard
                title="Resume"
                link="https://drive.google.com/file/d/1-OEFc1f82D7bp_bbXaMYpWpxJZGoQ4zC/view?usp=sharing"
            >
                <ResumeIcon :height="64" />
            </SocialCard>
            <SocialCard
                title="LinkedIn"
                :bgImage="linkedInBg"
                link="https://www.linkedin.com/in/terrenceluciano/"
            >
                <LinkedinIcon :height="64" />
            </SocialCard>
        </div>
    </SectionWrapper>
</template>

<style></style>

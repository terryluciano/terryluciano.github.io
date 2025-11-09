<script setup>
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
    <SectionWrapper title="Contact" id="contact">
        <div class="w-full flex flex-col justify-center items-center gap-4">
            <p class="font-Poppins sm:text-xl text-base font-normal text-center">
                Feel free to reach out at
                <a class="underline" href="mailto:terryluciano1@gmail.com"
                    >terryluciano1@gmail.com</a
                >
                with any questions or opportunities—I’d love to connect! Thank you for visiting my
                portfolio, and I hope you have a great day. I look forward to hearing from you soon!
            </p>
            <a
                class="group relative bg-light-gradient-45 dark:bg-dark-gradient-45 text-light-text dark:text-dark-text font-Poppins font-medium sm:text-2xl text-lg px-6 sm:py-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                href="mailto:terryluciano1@gmail.com"
            >
                Email Me!
                <svg
                    class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                </svg>
            </a>
        </div>
    </SectionWrapper>
</template>

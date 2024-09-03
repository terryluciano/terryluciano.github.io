<script setup></script>

<template>
    <div id="home">
        <!-- <HomeBubble v-for="index in 20" :key="index" /> -->
        <div class="home-bio front-index">
            <img class="profile-picture" src="@/assets/profile-picture-fixed.jpg" />
            <h1>Hey, I’m Terrence Luciano</h1>
            <h2>"Love Creating Awesome Things"</h2>
            <p class="home-bio-description">
                Hey, I’m Terry, a Full-Stack Web Developer from Northern New Jersey with 3+ of
                programming experience. Primary experience in backend and frontend web development,
                but I’m always excited to learn new skills whenever given the opportunity.
            </p>
        </div>
    </div>
</template>

<style>
#home {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: 'Nunito Sans', sans-serif;
    overflow: hidden;
    padding: 50px 0px;
}

.home-bio {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    width: 70%;
    max-width: 1200px;
}

.front-index {
    z-index: 1;
}

.profile-picture {
    object-fit: cover;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border-color: #5349d4;
    border-width: 10px;
    border-style: solid;
}

.home-bio h1 {
    font-size: 3em;
}

.home-bio h2 {
    font-size: 2em;
}

.home-bio h1,
.home-bio h2 {
    margin: 0px;
    font-weight: 600;
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}

.home-bio-description {
    margin: 0px;
    font-size: 1.25em;
}

@media screen and (max-width: 800px) {
    .home-bio {
        width: 90%;
    }
    .home-bio h1 {
        font-size: 2.5em;
    }

    .home-bio h2 {
        font-size: 1.5em;
    }
    .home-bio-description {
        text-align: justify;
        font-size: 1.2em;
    }
    .profile-picture {
        height: 200px;
        width: 200px;
    }
    #home {
        height: 100%;
    }
}

@media screen and (min-height: 1000px) {
    #home {
        height: 100vh;
    }
}
</style>

<script setup></script>

<template>
	<div id="home">
		<div class="profile-picture">
			<img src="@/assets/profilePH.png" />
		</div>
		<div class="home-bio">
			<div class="home-bio-title">
				<h1>Hey, I’m Terrence Luciano</h1>
				<h2>A Backend focused Full-Stack Web Developer</h2>
			</div>
			<p class="home-bio-quote">
				"Just a broke college student who can program better than most
				college students."
			</p>
			<p class="home-bio-description">
				I am a Full-Stack Web Developer from Northern New Jersey with 3+
				years of experience building web applications. I primarily focus
				on creating efficient and fast backend web applications with a
				team or on my own. I worked as a Computer Science Project Lead
				for Rutgers Data Science Consulting and we worked with Johnson &
				Johnson Innovation.
			</p>
		</div>
	</div>
</template>

<style>
#home {
	width: 100%;
	height: 100vh;
	background: #8a84e2;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-family: 'Nunito Sans', sans-serif;
}
.profile-picture {
	display: block;
	padding: 20px;
	border-radius: 50%;
	background-color: #fffbfa;
}
.profile-picture img {
	height: 230px;
	width: 230px;
}

.home-bio {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	gap: 10px;
	max-width: 910px;
}

.home-bio-title {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.home-bio-title h1 {
	font-size: 3em;
}

.home-bio-title h2 {
	font-size: 1.5em;
}

.home-bio-title h1,
.home-bio-title h2 {
	margin: 0px;
	font-weight: 600;
	text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
}

.home-bio-quote {
	margin: 0px;
	font-size: 1.5em;
	font-style: italic;
	font-weight: 600;
}

.home-bio-description {
	margin: 0px;
	font-size: 1.25em;
}
</style>

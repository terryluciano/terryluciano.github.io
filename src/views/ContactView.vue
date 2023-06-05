<script setup>
import SectionTitle from '../components/SectionTitle.vue';
</script>

<template>
	<div id="contact">
		<SectionTitle title="Contact" />
		<div class="contact-container">
			<p>
				For any inquiries, please do not hesitate to contact me at
				<a href="mailto:terryluciano1@gmail.com"
					>terryluciano1@gmail.com</a
				>. I will reply to you as soon as possible and look forward to
				connecting with you. Thank you for taking the time to visit my
				portfolio. Have a great day!
			</p>
			<a class="email-button" href="mailto:terryluciano1@gmail.com"
				>Send Email</a
			>
		</div>
	</div>
</template>

<style>
#contact {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0px 20px;
}
.contact-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-family: 'Open Sans', sans-serif;
	max-width: 1000px;
}

.contact-container p {
	font-size: 1.25rem;
	text-align: center;
	margin: 0px;
}

.email-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	border-radius: 5px;
	border-color: #8a84e2;
	border-style: solid;
	font-size: 1.5rem;
	font-weight: 600;
	text-decoration: none;
	color: #070600;
	transition: all 0.25s linear;
	background-color: #e0def7;
}

.email-button:hover {
	background-color: #d1cef3;
}
</style>

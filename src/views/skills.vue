<template lang="pug">
section.section--skills#skills
	.section--wrapper
		h1.skills__title SKILLS			
		.skills__wrapper
			.skill__title
				h2 Computer Skills
			.skill__elements
				//-  HTML skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-html
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="160,201")
					.skill__description HTML

				//- CSS skills.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-css
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="150,201")
					.skill__description CSS			

				//- CSS Sass.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-sass
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="150,201")
					.skill__description Sass					

				//- Javascript skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-js
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="105,201")
					.skill__description JavaScript ES6

				//- JQuery skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-jquery
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="130,201")
					.skill__description JQuery

				//- Vue skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-vue
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="130,201")
					.skill__description Vue

				//- PHP skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-php
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="40,201")
					.skill__description PHP

				//- MySql skill.
				.skill
					.skill__circle
						.skill__icon
							i.icon.icon-mysql
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="40,201")
					.skill__description MySql

		.skills__wrapper.management
			.skill__title
				h2 Management Assets

			.skill__elements
				//- Responsibility skill.
				.skill.skill__management
					.skill__circle
						.skill__icon
							i.icon.icon-responsible
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description Strong sense of #[strong personal responsibility]

				//- Communication skill.
				.skill.skill__management
					.skill__circle
						.skill__icon
							i.icon.icon-vulcain
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description Excellent #[strong communication] skills

				//- Challenge skill.
				.skill.skill__management
					.skill__circle
						.skill__icon.challenges
							i.icon.icon-speedometer
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description Hungry for #[strong challenges]

				//- Make difference skill.
				.skill.skill__management
					.skill__circle
						.skill__icon
							i.icon.icon-difference
						svg
							circle.skill__circle--background(
								r="32" cx="35" cy="35")
							circle.skill__circle--progress(
								r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description keen on #[strong making a real difference]

		.skills__wrapper
			.skill__title
				h2 Languages
			.skill__elements
				.skill
					.skill__flag.english
					.skill__description
						h3 ENGLISH
						p fluent
				.skill
					.skill__flag.french
					.skill__description
						h3 FRENCH
						p mother tongue
				.skill
					.skill__flag.vietnamese
					.skill__description
						h3 VIETNAMESE
						p mother tongue
				.skill
					.skill__flag.italian
					.skill__description
						h3 ITALIAN
						p intermediate
</template>

<script>
export default {
  name: 'skills',
  data: () => ({
  }),
  methods: {
    getImage (name) {
      return require(`../assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss">
.section--skills {
  background-color: #fff;
  min-height: 1080px;
	&::after {
		border: 4em solid transparent;
		border-top-color: #d7ccc8;
	}
}

.skills__title, 
.section--skills h2 {
	color: #4dd0e1;
}

.section--skills h2 {
  text-align: left;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}

.skills__wrapper {
  height: auto;
  width: 100%;
  color: #757575;
  margin-bottom: 100px;
  position: relative;
  top: 200px; 
}

/* Management skills div. */
.management {
  margin-bottom: 170px;
}

.skill__title {
  width: 100%;
  text-align: center; 
  margin-bottom: 40px;
}

.skill__elements {
  display: flex; 
  flex-wrap: wrap;
	flex-basis: 50%;
  justify-content: space-between;
}

.skill {
  height: 70px; 
  width: 70px; 
  position: relative;
  margin-bottom: 20px;
}

.skill__icon {
  height: 30px; 
  width: 30px; 
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-size: 30px;
}

/* Icon speedometer in management skills. */
.challenges {
  height: 38px; 
  width: 38px;
  font-size: 38px; 
  top: 45%;
}

.skill__circle svg {
  height: 70px;
  width: 70px;
  position: absolute;
  top: 0%;
}

.skill__circle--background {
  transition: 0.35s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 6px; 
  stroke: #e0e0e0; 
  fill: transparent; 
}

.skill__circle--progress {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-width: 6px; 
  stroke: #4dd0e1; 
  fill: transparent; 
}

.animate-circle {
  animation: circle-chart-fill 2s reverse;
}

@keyframes circle-chart-fill {
  to { stroke-dasharray: 0 201; }
}

.skill__flag, .skill__circle {
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out; 
}

.skill__flag {
  filter: grayscale(50%);
  opacity: 0.8;
}

.english {
	content: url('../assets/images/skills/english.png');
}

.french {
  content: url('../assets/images/skills/french.png');
}

.vietnamese {
  content: url('../assets/images/skills/vietnamese.png');
}

.italian {
  content: url('../assets/images/skills/italian.png');
}

.skill__description {
  height: auto;
  width: 100px;
  position: relative;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border: 1px solid #b2Ebf2;
  padding: 10px;
  background-color: white;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.skill__description::after {
  content: "";
  height: 0;
  width: 0;
  border: 8px solid transparent;
  border-bottom-color: #fff;
  position: absolute;
  bottom: 100%; 
  left: 50%;
  transform: translateX(-50%);
}

.skill__description::before {
  content: "";
  height: 0;
  width: 0;
  border: 9px solid transparent;
  border-bottom-color: #b2Ebf2;
  position: absolute;
  bottom: 100%; 
  left: 50%;
  transform: translateX(-50%);
}

.skill__description p {
  margin-top: 5px; 
}

.skill__flag:hover {
  filter: grayscale(0%);
  opacity: 1;
}

.skill__flag:hover ~ .skill__description,
.skill__circle:hover ~ .skill__description {
  transform: translate(-50%,5px);
  opacity: 1;
  z-index: 5; 
}

.animate-description {
  transform: translate(-50%,5px);
  opacity: 1;
}
</style>

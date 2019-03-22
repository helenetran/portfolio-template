<template lang="pug">
section.section--skills#skills
	.section--wrapper
		h1.skills__title SKILLS			
		.skills-wrapper
			.skills
				.skill__title
					h2 Computer Skills
				.skill__elements
					.skill(v-for="(skill, i) in skills"
							:key="i"
							:icon="skill.icon"
							:strokes="skill.stroke"
							:description="skill.description")
						.skill__circle
							.skill__icon
								i(:class="skill.icon")
							svg
								circle.skill__circle--background(
									r="32" cx="35" cy="35")
								circle.skill__circle--progress(
									r="32" cx="35" cy="35" :stroke-dasharray="skill.stroke")
						.skill__description {{skill.description}}					

			.skills
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

			.skills
				.skill__title
					h2 Languages
				.skill__elements
					.skill.language
						.skill__flag.english
						.skill__description
							h3 ENGLISH
							p fluent
					.skill.language
						.skill__flag.french
						.skill__description
							h3 FRENCH
							p mother tongue
					.skill.language
						.skill__flag.vietnamese
						.skill__description
							h3 VIETNAMESE
							p mother tongue
					.skill.language
						.skill__flag.italian
						.skill__description
							h3 ITALIAN
							p intermediate
</template>

<script>
export default {
  name: 'skills',
	data: () => ({
		skills: [
			{
				icon: 'icon icon-html',
				stroke: '160,201',
				description: 'HTML'
			},
			{
				icon: 'icon icon-css',
				stroke: '170,201',
				description: 'CSS'
			},
			{
				icon: 'icon icon-sass',
				stroke: '150,201',
				description: 'Sass'
			},
			{
				icon: 'icon icon-js',
				stroke: '105,201',
				description: 'JavaScript ES6'
			},
			{
				icon: 'icon icon-jquery',
				stroke: '150,201',
				description: 'jQuery'
			},
			{
				icon: 'icon icon-vue',
				stroke: '110,201',
				description: 'Vue'
			},
			{
				icon: 'icon icon-php',
				stroke: '60,201',
				description: 'PHP'
			},
			{
				icon: 'icon icon-mysql',
				stroke: '50,201',
				description: 'MySql'
			}
		]
  }),
  methods: {
    getImage (name) {
      return require(`../assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss">
$primary-color: #424242; 

.section--skills {
  background-color: #fff;
  min-height: 1080px;
	&::after {
		border: 4em solid transparent;
		border-top-color: #d7ccc8;
	}
	& h2 {
		text-align: left;
		padding-bottom: 5px;
		border-bottom: 1px solid #eee;
	}
}

.skills-wrapper {
	height: auto;
	width: 100%; 
	position: absolute; 
	top: 50%; 
	transform: translateY(-50%);
	padding-top: 200px; 
}

.skills__title {
	color: $primary-color;
}

.skills {
  height: auto;
  width: 100%;
  color: #757575;
  margin-bottom: 100px;
  // position: relative;
  // top: 200px; 
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
}

.skill {
	height: 70px;
	width: 70px;
	position: relative;
	padding: 0 10px 20px 0px;
	&__icon {
		height: 30px; 
		width: 30px; 
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		font-size: 30px;
	}
	&__circle svg {
		height: 70px;
		width: 70px;
		position: absolute;
		top: 0%;
	}
	&__circle--background {
		transition: 0.35s stroke-dashoffset;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
		stroke-width: 4px; 
		stroke: #e0e0e0; 
		fill: transparent; 
	}
	&__circle--progress {
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
		stroke-width: 4px; 
		stroke: #ff8a80; 
		fill: transparent; 
	}
}

.language {
	height: 50px;
	width: 50px;
}

/* Icon speedometer in management skills. */
.challenges {
  height: 38px; 
  width: 38px;
  font-size: 38px; 
  top: 45%;
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
	&:hover {
		filter: grayscale(0%);
		opacity: 1;
	}
}

.skill__flag:hover ~ .skill__description,
.skill__circle:hover ~ .skill__description {
  transform: translate(-50%,5px);
  opacity: 1;
  z-index: 5; 
	transition: 0.3s ease-in-out;
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
  border: 1px solid #bdbdbd;
  padding: 10px;
  background-color: white;
  opacity: 0;
	&::after, &::before {
		content: "";
		height: 0;
		width: 0;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		border: 9px solid transparent;
	}
	&::after {
		top: -17px;
		border-bottom-color: #fff;
	}
	&::before {
		top: -18px;
		border-bottom-color: #bdbdbd;
	}
	& p {
		margin-top: 5px; 
	}
}

.animate-description {
  transform: translate(-50%,5px);
  opacity: 1;
}

@media screen and (max-width: 768px) {
  /* Skills section. */
  .skills {
    margin: 0; 
    padding-bottom: 100px;
  }
  
  .animate-description {
    transform: unset;
    opacity: 0;
  }

  .skill__management .skill__description {
    transition: unset; 
  } 
}

@media screen and (max-width: 600px) {
	.skill__elements {
		justify-content: center; 
	}
}

@media screen and (max-width: 450px) {
	.section--skills {
    min-height: 1220px;
	}

	.skill__description {
		padding-left: 0px;
    padding-right: 0px;
	}
}

// @media screen and (max-height: 320px) {
// 	.section--projects {
// 		height: 154vh;
// 	}
// }

</style>

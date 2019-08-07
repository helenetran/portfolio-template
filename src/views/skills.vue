<template lang="pug">
section#skills
	.section--wrapper
		h1 SKILLS			
		.skills--wrapper
			.skills
				h2.skills__title Computer Skills
				.skill(v-for="(skill, i) in computerSkills" :key="i" strokes="201,201")
					.skill__circle
						.skill__circle--icon
							i(:class="skill.icon")
						svg
							circle.skill__circle--background(r="32" cx="35" cy="35")
							circle.skill__circle--progress(r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description {{ skill.description }}

			.skills
				h2.skills__title Soft skills
				.skill(v-for="(skill, j) in softSkills" :key="j" strokes="201,201")
					.skill__circle
						.skill__circle--icon
							i(:class="skill.icon")
						svg
							circle.skill__circle--background(r="32" cx="35" cy="35")
							circle.skill__circle--progress(r="32" cx="35" cy="35" stroke-dasharray="201,201")
					.skill__description {{ skill.description }}
</template>

<script>
export default {
	data: () => ({
		computerSkills: [
			{
				icon: 'icon icon-html',
				description: 'Eu duis dolore irure sint fugiat velit sunt quis anim.'
			},
			{
				icon: 'icon icon-css',
				description: 'Excepteur reprehenderit amet pariatur nisi consectetur proident mollit ea sint.'
			},
			{
				icon: 'icon icon-sass',
				description: 'Eiusmod eu irure minim culpa.'
			},
			{
				icon: 'icon icon-js',
				description: 'Nostrud mollit quis amet officia nisi occaecat aute aliquip.'
			}
		],
		softSkills: [
			{
				icon: 'icon icon-responsible',
				description: 'Mollit duis tempor aute amet magna minim cupidatat reprehenderit et culpa.'
			},
			{
				icon: 'icon icon-difference',
				description: 'Aliquip fugiat occaecat ea do id in incididunt.'
			},
			{
				icon: 'icon icon-speedometer',
				description: 'Fugiat do reprehenderit deserunt nostrud irure pariatur nisi pariatur consequat esse aliqua pariatur.'
			},
			{
				icon: 'icon icon-vulcain',
				description: 'Deserunt laborum in ad est labore esse eu occaecat nisi esse esse.'
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
#skills {background-color: #fff;}

.skills--wrapper {
	height: auto;
	width: 100%; 
	position: absolute; 
	top: 50%; 
	transform: translateY(-50%);
	padding-top: 200px; 
}

.skills {
	display: flex; 
  flex-wrap: wrap;
	flex-basis: 50%;
  height: auto;
  width: 100%;
  color: #757575;
	margin-bottom: 100px;
	&__title {
		width: 100%;
		text-align: center; 
		margin-bottom: 40px;
		text-align: left;
		padding-bottom: 5px;
		border-bottom: 1px solid #eee;
	}
}

.skill {
	height: 70px;
	width: 70px;
	position: relative;
	padding: 0 10px 20px 0px;
}

/* Icon speedometer in management skills. */
.challenges {
  height: 38px; 
  width: 38px;
  font-size: 38px; 
  top: 45%;
}

.animate-circle {animation: circle-chart-fill 2s reverse;}

@keyframes circle-chart-fill {to{ stroke-dasharray: 0 201;}}

.skill__circle {
  height: 100%;
  width: 100%;
	transition: 0.3s ease-in-out; 
	& svg {
		height: 70px;
		width: 70px;
		position: absolute;
		top: 0%;
	}
	&--icon {
		height: 30px; 
		width: 30px; 
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		font-size: 30px;
	}
	&--background {
		transition: 0.35s stroke-dashoffset;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
		stroke-width: 4px; 
		stroke: #e0e0e0; 
		fill: transparent; 
	}
	&--progress {
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
		stroke-width: 4px; 
		stroke: #2e7d32; 
		fill: transparent; 
	}
}

.skill__circle:hover ~ .skill__description {
  transform: translate(-50%,5px);
  opacity: 1;
  z-index: 5; 
	transition: 0.3s ease-in-out;
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
	& p {margin-top: 5px;}
}

.animate-description {
  transform: translate(-50%,5px);
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .skills {
    margin: 0; 
    padding-bottom: 100px;
  }
  .animate-description {
    transform: unset;
    opacity: 0;
  }
  .skill__management .skill__description {transition: unset;} 
}

@media screen and (max-width: 450px) {
	#skills {min-height: 1220px;}
	.skill__description {padding: 0px;}
}
</style>

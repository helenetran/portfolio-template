<template lang="pug">
	section.section--xp#xp
		.section--wrapper
			h1.xp__title EXPERIENCE
			.xp__wrapper
				.xp(v-for="(xp, i) in xpItems"
						:key="i"
						:boxSide="xp.boxSide"
						:dateSide="xp.dateSide"
						:date="xp.date"
						:job="xp.job"
						:place="xp.place"
						:team="xp.team"
						:city="xp.city"
						:duration="xp.duration")
					.xp__box(:class="xp.boxSide")
						.xp__box--date(:class="xp.dateSide") {{xp.date}}
						h2 {{xp.job}}
						h3 {{xp.place}}
						div {{xp.team}}
						.xp__box--location
							i.icon.icon-location {{xp.city}}
						.xp__box--duration #[em {{xp.duration}}]
</template>

<script>
export default {
  name: 'xp',
  data: () => ({
		xpItems: [
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Mar. 2019",
				job: "Junior Software Developer",
				place: "Praktika",
				city: "Melbourne, Australia",
				duration: "Current position"
			},
			{
				boxSide: "left",
				dateSide: "left-date",
				date: "Mar. 2019",
				job: "Responsive Web Design Certification",
				place: "FreeCodeCamp",
				city: "freecodecamp.org"
			},
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Jan. 2017",
				job: "Travelling Project",
				city: "Europe, Asia, Australia",
				duration: "20 months"
			},
			{
				boxSide: "left",
				dateSide: "left-date",
				date: "Jul. 2015",
				job: "Project Leader",
				place: "Servier- Pharmaceutical Company",
				team: "General Management Department",
				city: "Ho Chi Minh City, Vietnam",
				duration: "18 months"
			},
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Sept. 2014",
				job: "MBA in Marketing",
				place: "Institute of Business Administration",
				city: "Montpellier, France",
			},
			{
				boxSide: "left",
				dateSide: "left-date",
				date: "Apr. 2014",
				job: "Product Manager",
				place: "Pierre Fabre - Pharmaceutical Company",
				team: "Marketing Department, Smoking Cessation Team",
				city: "Castres, France",
				duration: "6 months"
			},
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Sept. 2012",
				job: "Master's degree in Clinical Trials",
				place: "Faculty of Medecine",
				city: "Montpellier, France",
			},
			{
				boxSide: "left",
				dateSide: "left-date",
				date: "Apr. 2012",
				job: "Clinical Trials Coordinator",
				place: "Contract Ressearch organisation",
				team: "Project Management Department",
				city: "Marseille, France",
				duration: "6 months"
			},
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Oct. 2011",
				job: "Clinical Ressearch Associate",
				place: "Teaching Hospital",
				team: "Emergency Department & Hematology Department",
				city: "Montpellier, France",
				duration: "6 months"
			},
			{
				boxSide: "left",
				dateSide: "left-date",
				date: "Sept. 2011",
				job: "Bachelor's degree in Biology",
				place: "Nice Sophia Antipolis University",
				city: "Nice, France",
			},
			{
				boxSide: "right",
				dateSide: "right-date",
				date: "Jan. 2011",
				job: "Intern in genetics research",
				place: "INSERM - laboratories",
				team: "Diabetology & obesity department",
				city: "Nice, France",
				duration: "6 months"
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
.section--xp {
  background-color: #d7ccc8;
  min-height: 2200px;
	&::after {
		border: 4em solid transparent;
		border-top-color: #fff;
	}
	& h2 {
		color: #FF8A80;
		font-size: 16px;
	}
	& h3 {
		font-size: 14px; 
	}
}

.xp__title {
	color: #fff;
}

.xp__wrapper {
  width: 100%;
  position: absolute;
  top: 200px; 
		/* Timeline.  */
	&::before {
		content: '';
		height: 152em;
		width: 0.2em;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: -1%;
		transform: translateX(-50%);
	}
}

.xp {
  position: relative;
  padding-bottom: 15em;
	/* Dots on the timeline boxes. */
	&::before, 
	&::before {
		content: '';
		height: 1.3em;
		width: 1.3em;
		background-color: #e0e0e0;
		border: 3px solid #fff;
		border-radius: 15px;
		position: absolute;
		left: 50%; 
		top: 50%;
		transform: translate(-50%,-50%);
	}
}

.xp__box {
  width: 38%;
  float: left;
  background-color: #fff;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out; 
	/* Arrows on the text boxes. */ 
	&::after {
		content: '';
		height: 0;
		width: 0;
		border: 12px solid transparent;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	&--date {
		color: #fff;
		font-family: lemon-milk;
		font-size: 1.5em; 
		width: 6em;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	&--location {
		padding-top: 5px; 
	}
	&--duration {
		color: #bdbdbd;
	}
}

.left {
  text-align: right; 
	&::after {
		border-left-color: #fff;
		left: 100%; 
	}
}

.right {
  right: 0%;
	&::after {
		border-right-color: #fff;
		right: 100%;
	}
}

.left-date {
  left: 130%;
}

.right-date {
  right: 130%;
}


@media screen and (max-width: 768px) {
  .xp__text, 
  .xp__container-right--text {
    padding: 12px;
  }

  .section--xp h2 {
    font-size: 14px; 
  }
}


@media screen and (max-width: 600px) {
	.xp__box {
		width: 35%;
		padding: 10px;
	}
}

@media screen and (max-width: 450px) {
 .section--xp {
    padding-left: 1%; 
    padding-right: 1%;
  }
}

@media screen and (max-height: 320px) {
	.section--xp {
		min-height: 2090px;
	}
}
</style>

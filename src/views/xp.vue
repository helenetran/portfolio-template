<template lang="pug">
	section.section--xp#xp
		.section--wrapper
			h1.xp__title EXPERIENCE
			.xp__wrapper
				.xp-item.right
					.xp-item-box.right
						.xp-item-box__date.right-date Jan. 2017
						h2 Travelling Project
						.xp-item-box__location
							i.icon.icon-location Europe, Asia, Australia
						.xp-item-box__duration #[em 20 months]		    	

				.xp-item.left
					.xp-item-box.left
						.xp-item-box__date.left-date Jul. 2015
						h2 Project Leader
						h3 Servier- Pharmaceutical Company
						div General Management Department
						.xp-item-box__location
							i.icon.icon-location Ho Chi Minh City, Vietnam
						.xp-item-box__duration #[em 18 months]

				.xp-item
					.xp-item-box.right
						.xp-item-box__date.right-date Sept. 2014
						h2 MBA
						h3 Institute of Business Administration
						.xp-item-box__location
							i.icon.icon-location Montpellier, France

				.xp-item.left
					.xp-item-box.left
						.xp-item-box__date.left-date Apr. 2014
						h2 Product Manager
						h3 Pierre Fabre - Pharmaceutical Company
						div Marketing Department, Smoking Cessation Team
						.xp-item-box__location
							i.icon.icon-location Castres, France
						.xp-item-box__duration #[em 6 months]

				.xp-item
					.xp-item-box.right
						.xp-item-box__date.right-date Sept. 2012
						h2 Master's degree in Clinical Trials
						h3 Faculty of Medecine
						.xp-item-box__location
							i.icon.icon-location Montpellier, France

				.xp-item.left
					.xp-item-box.left
						.xp-item-box__date.left-date Apr. 2012
						h2 Clinical Trials Coordinator
						h3 CDL Pharma - Contract Ressearch organisation
						div Project Management Department
						.xp-item-box__location
							i.icon.icon-location Marseille, France
						.xp-item-box__duration #[em 6 months]

				.xp-item
					.xp-item-box.right
						.xp-item-box__date.right-date Oct. 2011
						h2 Clinical Ressearch Associate
						h3 Teaching Hospital
						div Emergency Department & Hematology Department
						.xp-item-box__location
							i.icon.icon-location Montpellier, France
						.xp-item-box__duration #[em 6 months]

				.xp-item.left
					.xp-item-box left
						.xp-item-box__date.left-date Sept. 2011
						h2 Bachelor's degree in Biology
						h3 Nice Sophia Antipolis University
						.xp-item-box__location
							i.icon.icon-location Nice, France	

				.xp-item
					.xp-item-box.right
						.xp-item-box__date.right-date Jan. 2011
						h2 Intern in genetics research
						h3 INSERM - laboratories
						div Diabetology & obesity department
						.xp-item-box__location
							i.icon.icon-location Nice, France
						.xp-item-box__duration #[em 6 months]
</template>

<script>
export default {
  name: 'xp',
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
.section--xp {
  background-color: #D7CCC8;
  min-height: 2200px;
}

.section--xp::after {
  border: 4em solid #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

.xp__title {
	color: #fff;
}

.xp__wrapper {
  width: 100%;
  position: absolute;
  top: 200px; 
}

/* Timeline.  */
.xp__wrapper::before {
  content: '';
  height: 152em;
  width: 0.2em;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: -1%;
  transform: translateX(-50%);
}

.xp-item {
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

.left {
  text-align: right; 
	&::after {
		border-left-color: #fff;
		left: 100%; 
	}
}

.section--xp h2 {
  color: #4dd0e1;
  font-size: 16px;
}

.section--xp h3 {
  font-size: 14px; 
}

.xp-item-box {
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
}

.right {
  right: 0%;
	&::after {
		border-right-color: #fff;
		right: 100%;
	}
}

.xp-item-box__date {
  color: #fff;
  font-family: lemon-milk;
  font-size: 1.5em; 
  width: 6em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left-date {
  left: 130%;
}

.right-date {
  right: 130%;
}

.xp-item-box__location {
  padding-top: 5px; 
}

.xp-item-box__duration {
  color: #bdbdbd;
}
</style>

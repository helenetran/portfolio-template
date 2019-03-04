<template>
	<section class="section--xp" id="xp">
		<div class="section--wrapper">
			<h1 class="xp__title">EXPERIENCE</h1>
			<div class="xp__wrapper">

				<div class="xp-item right">
					<div class="xp-item-box right">
						<div class="xp-item-box__date right-date">Jan. 2017</div>
						<h2>Travelling Project</h2>
						<div class="xp-item-box__location"><i class="icon icon-location">Europe, Asia, Australia</i></div>
						<div class="xp-item-box__duration"><em>20 months</em></div>		    	
					</div>
				</div>

				<div class="xp-item left">
					<div class="xp-item-box left">
						<div class="xp-item-box__date left-date">Jul. 2015</div>
						<h2>Project Leader</h2>
						<h3>Servier- Pharmaceutical Company</h3>
						<div>General Management Department</div>
						<div class="xp-item-box__location"><i class="icon icon-location">Ho Chi Minh City, Vietnam</i></div>
						<div class="xp-item-box__duration"><em>18 months</em></div>
					</div>
				</div>

				<div class="xp-item">
					<div class="xp-item-box right">
						<div class="xp-item-box__date right-date">Sept. 2014</div>
						<h2>MBA</h2>
						<h3>Institute of Business Administration</h3>
						<div class="xp-item-box__location"><i class="icon icon-location">Montpellier, France</i></div>
					</div>
				</div>

				<div class="xp-item left">
					<div class="xp-item-box left">
						<div class="xp-item-box__date left-date">Apr. 2014</div>
						<h2>Product Manager</h2>
						<h3>Pierre Fabre - Pharmaceutical Company</h3>
						<div>Marketing Department, Smoking Cessation Team</div>
						<div class="xp-item-box__location"><i class="icon icon-location">Castres, France</i></div>
						<div class="xp-item-box__duration"><em>6 months</em></div>
					</div>
				</div>

				<div class="xp-item">
					<div class="xp-item-box right">
						<div class="xp-item-box__date right-date">Sept. 2012</div>
						<h2>Master's degree in Clinical Trials</h2>
						<h3>Faculty of Medecine</h3>
						<div class="xp-item-box__location"><i class="icon icon-location">Montpellier, France</i></div>
					</div>
				</div>

				<div class="xp-item left">
					<div class="xp-item-box left">
						<div class="xp-item-box__date left-date">Apr. 2012</div>
						<h2>Clinical Trials Coordinator</h2>
						<h3>CDL Pharma - Contract Ressearch organisation</h3>
						<div>Project Management Department</div>
						<div class="xp-item-box__location"><i class="icon icon-location">Marseille, France</i></div>
						<div class="xp-item-box__duration"><em>6 months</em></div>
					</div>
				</div>

				<div class="xp-item">
					<div class="xp-item-box right">
						<div class="xp-item-box__date right-date">Oct. 2011</div>
						<h2>Clinical Ressearch Associate</h2>
						<h3>Teaching Hospital</h3>
						<div>Emergency Department & Hematology Department</div>
						<div class="xp-item-box__location"><i class="icon icon-location">Montpellier, France</i></div>
						<div class="xp-item-box__duration"><em>6 months</em></div>
					</div>
				</div>

				<div class="xp-item left">
					<div class="xp-item-box left">
						<div class="xp-item-box__date left-date">Sept. 2011</div>
						<h2>Bachelor's degree in Biology</h2>
						<h3>Nice Sophia Antipolis University</h3>
						<div class="xp-item-box__location"><i class="icon icon-location">Nice, France</i></div>
					</div>
				</div>	

				<div class="xp-item">
					<div class="xp-item-box right">
						<div class="xp-item-box__date right-date">Jan. 2011</div>
						<h2>Intern in genetics research</h2>
						<h3>INSERM - laboratories</h3>
						<div>Diabetology & obesity department</div>
						<div class="xp-item-box__location"><i class="icon icon-location">Nice, France</i></div>
						<div class="xp-item-box__duration"><em>6 months</em></div>
					</div>
				</div>	
			</div>			
		</div>
	</section>
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
  border: 4em solid #ffffff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

.xp__title {
	color: #ffffff;
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
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  top: -1%;
  transform: translateX(-50%);
}

.xp-item {
  position: relative;
  padding-bottom: 15em;
}

.xp__icon {
  display: inline-block; 
}

/* Dots on the timeline boxes. */
.xp-item::before, 
.xp-item::before {
  content: '';
  height: 1.3em;
  width: 1.3em;
  background-color: #e0e0e0;
  border: 3px solid #ffffff;
  border-radius: 15px;
  position: absolute;
  left: 50%; 
  top: 50%;
  transform: translate(-50%,-50%);
}

.left {
  text-align: right; 
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
  background-color: #ffffff;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out; 
}

.right {
  right: 0%;
}

/* Arrows on the text boxes. */ 
.xp-item-box::after {
  content: '';
  height: 0;
  width: 0;
  border: 12px solid transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left::after {
  border-left-color: #ffffff;
  left: 100%; 
}

.right::after {
  border-right-color: #ffffff;
  right: 100%;
}

.xp-item-box__date {
  color: #ffffff;
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

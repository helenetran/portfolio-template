<template>
	<section class="section--projects" id="projects">
		<div class="section--wrapper">
			<h1 class="projects__title">PROJECTS</h1>
			<div class="projects-wrapper">
				<div class="project">											
					<img class="project__image" src="images/projects/triangles-project.jpg">
					<div class="project__title">
						<h3># Colors of the triangles</h3>
						<p>Randomised sizes & colors, click to reveal the colors of the triangles.</p>
						<p><i class="icon icon-wand"></i> HTML, CSS, jQuery.</p>
						<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/JxajwE" target="_blank">https://codepen.io/Helene-Andre/pen/qgXVya</a></div>
					</div>
				</div>

				<div class="project">											
					<img class="project__image" src="images/projects/heart-project.jpg">
					<div class="project__title">
						<h3># Pure CSS heart beating</h3>
						<p>This is a pure CSS heart beating, spread the CSS love <i class="icon icon-love"></i></p>
						<p><i class="icon icon-wand"></i> CSS only</p>
						<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/qgXVya" target="_blank">https://codepen.io/Helene-Andre/pen/qgXVya</a></div>
					</div>
				</div>			

				<div class="project">											
					<img class="project__image" src="images/projects/cat-project.jpg">
					<div class="project__title">
						<h3># CSS cat</h3>
						<p>Here is my very first web project on codepen!</p>
						<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
						<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/mQrgZa" target="_blank">https://codepen.io/Helene-Andre/pen/mQrgZa</a></div>
					</div>
				</div>
				
				<div class="project">
					<img class="project__image" src="images/projects/pupil-project.jpg">	
					<div class="project__title">
						<h3># CSS eye</h3>
						<p>The pupil moves on mouse move.</p>
						<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
						<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/MzovxP" target="_blank">https://codepen.io/Helene-Andre/pen/MzovxP</a></div>
					</div>
				</div>
				
				<div class="project">
					<img class="project__image" src="images/projects/momemtum-project.jpg">
					<div class="project__title">
						<h3># Momentum</h3>
						<p>Momentum is a Chrome plugin for which I tried to replicate the design.</p>
						<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
						<div class="project__link"><a href="https://helene-andre.github.io/momentum/ " target="_blank">https://helene-andre.github.io/momentum/ </a></div>
					</div>						
				</div>

				<div class="project">
					<img class="project__image" src="images/projects/html-project.jpg">
					<div class="project__title">
						<h3># HTML Memento</h3>
						<p>This is the first website I created in October 2018 to gather all HTML tags.</p>
						<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
						<div class="project__link"><a href="https://helene-andre.github.io/html-memento/" target="_blank">https://helene-andre.github.io/html-memento/</a></div>
					</div>						
				</div>
			</div>
		</div>		
	</section>
</template>

<script>
export default {
  name: 'projects',
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
.section--projects {
  background-color: #D7CCC8;
  height: 120vh; 
}

.section--projects::after {
  border: 4em solid #ffffff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

.projects__title {
	color: #ffffff;
}

.projects-wrapper {
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  padding-top: 20px;
}

.project__title {
  height: auto;
  color: #ffffff;
  padding: 12px;
  background-color: rgba(128,128,128, 0.5);
}

.project__title h3 {
  font-family: lemon-milk-light, arial;
  margin-bottom: 8px;
}

.project__title p {
  color: #ffffff;
  margin: 0; 
  margin-bottom: 6px;
}

.project__image {
  height: 100%; 
  width: 100%; 
}

.project__link {
  color: #4dd0e1; 
  cursor: pointer;
  font-style: italic; 
  margin-top: 5px;
}
</style>

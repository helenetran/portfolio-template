<template>
	<section class="section--projects" id="projects">
		<div class="section--wrapper">
			<h1 class="projects__title">PROJECTS</h1>
			<!-- <div class="projects-wrapper"> -->
			<div class="slide--wrapper">
				<vueper-slides class="no-shadow" :slide-ratio="0.5">
					<vueper-slide
						v-for="(slide, i) in slides"
						:key="i"
						:image="getImage(slide.image)"
						:title="'# ' + slide.title"
						:content="slide.content">
					</vueper-slide>
				</vueper-slides>				
			</div>
		</div>		
	</section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'projects',
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: 'Colors of the triangles',
				content: `<div class="slide__content">
										<p>Randomised sizes & colors, click to reveal the colors of the triangles.</p>
                		<p><i class="icon icon-wand"></i> HTML, CSS, jQuery.</p>
										<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/JxajwE" target="_blank">https://codepen.io/Helene-Andre/pen/qgXVya</a></div>
									</div>`,
				image: 'triangles-project.jpg'
			},
      {
        title: 'Pure CSS heart beating',
				content: `<div class="slide__content">
										<p>This is a pure CSS heart beating, spread the CSS love <i class="icon icon-love"></i></p>
										<p><i class="icon icon-wand"></i> CSS only</p>
										<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/qgXVya" target="_blank">https://codepen.io/Helene-Andre/pen/qgXVya</a></div>
									</div>`,
				image: 'heart-project.jpg'
			},
			{
        title: 'CSS cat',
				content: `<div class="slide__content">
										<p>Here is my very first web project on codepen!</p>
										<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
										<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/mQrgZa" target="_blank">https://codepen.io/Helene-Andre/pen/mQrgZa</a></div>
									</div>`,
				image: 'cat-project.jpg'
			},
			{
				title: 'CSS eye',
				content: `<div class="slide__content">
										<p>The pupil moves on mouse move.</p>
										<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
										<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/MzovxP" target="_blank">https://codepen.io/Helene-Andre/pen/MzovxP</a></div>
									</div>`,
				image: 'pupil-project.jpg'
			},
			{
				title: 'Momentum',
				content: `<div class="slide__content">
										<p>Momentum is a Chrome plugin for which I tried to replicate the design.</p>
										<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
										<div class="project__link"><a href="https://helene-andre.github.io/momentum/ " target="_blank">https://helene-andre.github.io/momentum/ </a></div>
									</div>`,
				image: 'momemtum-project.jpg'
			},
			{
				title: 'HTML Memento',
				content: `<div class="slide__content">
										<p>This is the first website I created in October 2018 to gather all HTML tags.</p>
										<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
										<div class="project__link"><a href="https://helene-andre.github.io/html-memento/" target="_blank">https://helene-andre.github.io/html-memento/</a></div>
									</div>`,
				image: 'html-project.jpg'
			}			
    ]
  }),
  methods: {
    getImage (name) {
      return require(`../assets/images/projects/${name}`)
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

.vueperslide__content-wrapper--outside-top {
  transition: 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}

.slide--wrapper {
	height: 400px; 
	width: 100%; 
	position: relative; 
	top: 50%; 
	transform: translateY(-50%);
}

.vueperslide__content-wrapper {
	background-color: rgba(255,255,255, 0.8);
	position: relative; 
	top: unset; 
	bottom: 0%;  
	width: 100%;
	text-align: left; 
	-webkit-transform: translate(-50%,0%);
	transform: translate(-50%,0%);
}
</style>

<template lang="pug">
	section.section--projects#projects
		.section--wrapper
			h1.projects__title PROJECTS
			.slide--wrapper
				vueper-slides.no-shadow(:slide-ratio="0.5" arrows-outside slide-content-outside="bottom" bullets-outside)
					vueper-slide(v-for="(slide, i) in slides"
						:key="i"
						:image="getImage(slide.image)"
						:title="'# ' + slide.title"
						:content="slide.content")
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
        title: 'Pure CSS cat',
				content: `<div class="slide__content">
										<p>Click the box to reveal the cat.</p>
										<p><i class="icon icon-wand"></i> HTML, CSS, Javascript.</p>
										<div class="project__link"><a href="https://codepen.io/Helene-Andre/pen/mQrgZa" target="_blank">https://codepen.io/Helene-Andre/pen/mQrgZa</a></div>
									</div>`,
				image: 'cat-project.jpg'
			},
			{
				title: 'CSS pupil tracks mouse',
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
										<p>This is the first website I created in November 2018 to gather HTML tags.</p>
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
	&::after {
		border: 4em solid transparent;
		border-top-color: #ffffff;
	}
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

.project__link {
  color: hsla(6, 100%, 80%, 1); 
  cursor: pointer;
  font-style: italic; 
  margin-top: 5px;
}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}

.slide--wrapper {
	height: auto; 
	width: 100%; 
	position: relative; 
	top: 50%; 
	transform: translateY(-50%);
}

.vueperslide__content-wrapper {
	color: #ffffff;
	padding: 12px;
	background-color: rgba(128,128,128, 0.8);	position: absolute; 
	position: inherit;
	-webkit-transform: translate(0%,0%);
	transform: translate(0%,0%);
	text-align: unset; 
}

.vueperslide__content-wrapper p {
	color: #ffffff;
}

.vueperslide__title {
	font-size: 20px; 
}

.vueperslides__bullets {
	display: flex;
	justify-content: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 100%;
}

.vueperslides__arrow {
	color: #fff; 
}

@media screen and (max-height: 420px) {
	.section--projects {
		height: 200vh;
	}
}
</style>

<template lang="pug">
section#projects
	.section--wrapper.projects
		h1.projects__title PROJECTS
		.project
			vueper-slides.no-shadow(:slide-ratio="0.5" arrows-outside slide-content-inside="bottom" bullets-outside)
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
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: 'Nisi sint aliqua duis laboris dolor exercitation.',
				content: `<p>Labore id nisi nostrud eu excepteur Lorem eu minim.</p>`,
        image: 'project-1.jpg'
			},
      {
        title: 'Aliqua officia aute deserunt tempor esse sit.',
				content: `<p>Consequat consequat consectetur cupidatat ullamco nulla eu culpa esse labore dolor et ea est deserunt.</p>`,
				image: 'project-2.jpg'
			},
			{
        title: 'Proident aliqua officia dolor cupidatat enim.',
				content: `<p>Quis ex qui deserunt reprehenderit non laborum sint ex proident mollit eu.</p>`,
				image: 'project-3.jpg'
			},
			{
				title: 'Dolor veniam Lorem est laborum adipisicing mollit reprehenderit.',
				content: `<p>Proident tempor cillum aliquip aliquip proident cupidatat aliquip ex qui ullamco cupidatat aliquip aliquip.</p>`,
				image: 'project-4.jpg'
			},
			{
				title: 'Laboris non culpa laboris occaecat cupidatat anim occaecat dolore.',
				content: `<p>Quis Lorem esse amet proident magna sit.</p>`,
				image: 'project-5.jpg'
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
#projects {
  background-color: #D7CCC8;
  height: 120vh;
}

.projects__title {color: #ffffff;}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}

.project {
	height: auto; 
	width: 100%; 
	position: relative; 
	top: 50%; 
	transform: translateY(-50%);
}

.vueperslides {
  color: #fff;

  .vueperslide__content-wrapper {
    width: 100%; 
    padding: 12px 0 12px 0;
    background-color: rgba(128,128,128, 0.8);	
    div:nth-child(1), p {padding-left: 12px;color: inherit;}
  }

  .vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
    top: unset;
    bottom: 0; 
    left: 50%;
    -webkit-transform: translate(-50%,0%);
    transform: translate(-50%,0%);
    text-align: left;
  }
}

.vueperslide__title {font-size: 20px;}

.vueperslides__bullets {
	display: flex;
	justify-content: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 100%;
}

.vueperslides__arrow {color: #fff;}

@media screen and (max-height: 420px) {
	#projects {height: 200vh;}
}
</style>

<template>
  <div class="page-wrapper">
    <top-bar id="top-bar"></top-bar>
    <home id="home"></home>
    <about id="about"></about>
    <projects id="projects"></projects>
    <skills id="skills"></skills>
    <xp id="xp"></xp>
    <hobbies id="hobbies"></hobbies>
    <contact id="contact"></contact>
    <footerSection id="footer"></footerSection>
  </div>
</template>

<script>
import topBar from '@/components/top-bar'
import home from '@/views/home'
import about from '@/views/about'
import projects from '@/views/projects'
import skills from '@/views/skills'
import xp from '@/views/xp'
import hobbies from '@/views/hobbies'
import contact from '@/views/contact'
import footerSection from '@/components/footer'

import 'vueperslides/dist/vueperslides.css'


import Vue from 'vue'

// Vue.use(VueAnimate)

export default {
  name: 'app',
  components: {
    topBar,
    home,
    about,
    projects,
    skills, 
    xp,
    hobbies,
    contact,
    footerSection
  },
  data: () => ({
  }),
  methods: {
    getImage (name) {
      return require(`./assets/images/${name}`)
    },
    eventsOnScroll (event) {
      const windowTopPosition = (window.scrollY)
      const windowHeight = window.innerHeight
      const windowBottomPosition = (windowTopPosition + windowHeight)
      
      // Animation sections on scroll.
      const sections = document.getElementsByTagName("section")
      for (let i = 0; i < sections.length; i++){
        let section = sections[i]
        const sectionTopPosition = section.offsetTop 
        const sectionHeight = section.offsetHeight
        const sectionBottomPosition = section.offsetTop + sectionHeight 
        if ((sectionBottomPosition >= windowTopPosition) && (sectionTopPosition <= (windowBottomPosition))) {
          section.classList.add('scroll')
        }
        else {
          section.classList.remove('scroll')
        }
      }

      // Animation top menu active state on scroll.
      let buttons = document.getElementsByClassName('top-bar__button')
      for (let i = 0; i < sections.length; i++) {
        let section = sections[i]
        let button = buttons[i]
        let sectionOffsetBottom = (section.offsetHeight + section.offsetTop)
        if (((windowTopPosition + 300) >= section.offsetTop) && ((windowTopPosition + 300) <= sectionOffsetBottom)) {
          button.classList.add('active')
        }
        else {
          button.classList.remove('active')
        }
      }
      
      // Animate progress circles if visible within the window.
      let progressCircles = document.getElementsByClassName('skill__circle--progress')
      for (let i = 0; i < progressCircles.length; i++) {
        let progressCircle = progressCircles[i] 
        if (document.getElementById('skills').classList.contains('scroll')) {
          progressCircle.classList.add('animate-circle')
        }
        else {
          progressCircle.classList.remove('animate-circle')
        }
      }

      // Parallax effect on home__title.
      let backgroundTitle = document.getElementsByClassName('home__background')[0]
      if (document.getElementById('home').classList.contains('scroll')) {
        backgroundTitle.style.top = -(0-(windowTopPosition*0.04))+'%'
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.eventsOnScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.eventsOnScroll);
  }
}
</script>

<style lang="scss">
 * {
  margin: 0; 
  padding: 0;
}

body {
  font-family: 'Roboto', arial;
  font-size: 13px;
  color: #757575;
}

.page-wrapper {
  height: 100%; 
  width: 100%; 
  overflow-x: hidden; 
}

h1 {
  font-family: lemon-milk-light, arial; 
  font-size: 3em;
  width: 100%; 
  position: absolute;
  text-align: center;
  top: 90px; 
}

h2 {
  font-size: 1.5em;
  font-family: lemon-milk-light, arial;
  margin-bottom: 10px;
  position: relative;
  color: #ffe082;
}

h3 {
  font-size: 15px;
}

p {
  color: #757575; 
  font-size: 13px; 
  margin-top: 15px;
  margin-bottom: 6px;
}

a {
  all: unset;
  cursor: pointer;
}

li {
  list-style-type: none;
}

input[type=submit] {
  border-radius: 0px; 
  -webkit-border-radius:0px;
  appearance: none;
  -webkit-appearance: none;
}

/**=====================================================================**/

/**=========================== font-family =============================**/
@font-face {
  font-family: lemon-milk;
  src: url('./assets/fonts/LemonMilk.otf');
}

@font-face {
  font-family: lemon-milk-light;
  src: url('./assets/fonts/LemonMilklight.otf');
}

@font-face {
  font-family: lemon-milk-light-italic;
  src: url('./assets/fonts/LemonMilklightitalic.otf');
}
/**=====================================================================**/

/**================================ icons ==============================**/
@font-face {
  font-family: "helene-resume";
  src:url("./assets/fonts/helene-resume.eot");
  src:url("./assets/fonts/helene-resume.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/helene-resume.woff") format("woff"),
    url("./assets/fonts/helene-resume.ttf") format("truetype"),
    url("./assets/fonts/helene-resume.svg#helene-resume") format("svg");
  font-weight: normal;
  font-style: normal;
}

[data-icon]:before {
  font-family: "helene-resume" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "helene-resume" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-location:before {
  content: "\61";
}
.icon-github:before {
  content: "\62";
}
.icon-codepen:before {
  content: "\63";
}
.icon-linkedin:before {
  content: "\64";
}
.icon-email:before {
  content: "\65";
}
.icon-phone:before {
  content: "\66";
}
.icon-validated:before {
  content: "\76";
}
.icon-blocked:before {
  content: "\6d";
}
.icon-close:before {
  content: "\68";
}
.icon-cooking:before {
  content: "\6c";
}
.icon-music:before {
  content: "\71";
}
.icon-hiking:before {
  content: "\6e";
}
.icon-laptop:before {
  content: "\72";
}
.icon-html:before {
  content: "\69";
}
.icon-css:before {
  content: "\73";
}
.icon-js:before {
  content: "\74";
}
.icon-php:before {
  content: "\6a";
}
.icon-jquery:before {
  content: "\70";
}
.icon-roller:before {
  content: "\75";
}
.icon-work:before {
  content: "\77";
}
.icon-graduate:before {
  content: "\78";
}
.icon-sass:before {
  content: "\79";
}
.icon-travel:before {
  content: "\7a";
}
.icon-download:before {
  content: "\47";
}
.icon-vulcain:before {
  content: "\42";
}
.icon-difference:before {
  content: "\44";
}
.icon-love:before {
  content: "\45";
}
.icon-speedometer:before {
  content: "\67";
}
.icon-wand:before {
  content: "\46";
}
.icon-volleyball:before {
  content: "\48";
}
.icon-responsible:before {
  content: "\49";
}
.icon-award:before {
  content: "\6b";
}
.icon-vue:before {
  content: "\6f";
}
.icon-mysql:before {
  content: "\4a";
}
/**=====================================================================**/

/**=============================== section =============================**/
section {
  position: relative;
  height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
}

/* Section wrapper to animate on scrolldown. */
.section--wrapper {
  position: relative;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  opacity: 0;
  transform: translateY(2em);
  transition: 0.3s ease-in-out 0.5s;
}

section.scroll .section--wrapper {
  opacity: 1;
  transform: translateY(0em);
}

.section--projects::after, 
.section--skills::after, 
.section--xp::after, 
.section--hobbies::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  height: 0em;
  width: 0em;
}
/**=====================================================================**/

/**========================== media queries width ======================**/
@media screen and (max-width: 992px) {
  /* Contact section. */
  .section--contact {
    padding-left: 3%; 
    padding-right: 3%; 
  }
}

@media screen and (max-width: 768px) {
  section {
    padding-left: 6%; 
    padding-right: 6%; 
  }
  /* top-bar section. */
  .top-bar__text {
    font-size: 12px; 
  }

  .top-bar__button {
    padding-left: 10px; 
    padding-right: 10px; 
  }

  /* Skills section. */
  .skills__wrapper {
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
 
  /*.section--xp section. */
  .xp__text, 
  .xp__container-right--text {
    padding: 12px;
  }

  .section--xp h2 {
    font-size: 14px; 
  }

  /* Hobbies section. */
  .hobbies__wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
  }

  .hobby {
    height: 69px;
    width: 69px;
    padding: 17px;
    padding-bottom: 60px;
  }
  .hobby__text {
    width: 150px; 
    padding: 5px; 
  }

  .hobby__icon {
    font-size: 69px; 
  }

  /* Contact section. */
  .contact-info__icons-wrapper {
    font-size: 33px;
  }

  .contact-info__name {
    font-size: 13px; 
  }
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 2.5em;
  }

  /* Hobbies section. */
  .section--hobbies {
    height: 112vh; 
  }

  /* Contact section. */
  .section--contact {
    height: auto;
  }
  
  .contact-info__title {
    font-size: 3em; 
    text-align: center; 
  }

  .contact-wrapper {
    flex-direction: column;
  }

  .contact-info__wrapper {
    position: relative;
    left: 50%; 
    transform: translateX(-50%);
    text-align: center; 
    height: 200px; 
  }

  .contact-form__wrapper {
    position: relative;
    left: 50%; 
    transform: translateX(-50%);
  }
  .contact-form__field-wrapper, 
  .contact-form__send-wrapper {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-info__icons-wrapper {
    justify-content: space-between;
    letter-spacing: unset;
  }

  #send-button {
    right: 50%; 
    transform: translateX(50%);
  } 

  /* Footer. */
  footer {
    z-index: -5;
  }
}

@media screen and (max-width: 450px) {
  /* Whole page. */
  p {
    font-size: 12px; 
  }

  section {
    padding-left: 3%; 
    padding-right: 3%; 
  }
  
  h1 {
    font-size: 20px; 
  } 

  /* Home section. */
  .home__title {
    width: 275px; 
  }

  .home__title--name {
    font-size: 13vw;
  }

  .home__title--job {
    font-size: 7vw; 
  }

  .home__title--job::before, 
  .home__title--job::after {
    opacity: 0;
    z-index: -1; 
  } 

  /* About-me section. */
  .about-me__text {
    top: 54%; 
  }

  .about-me__description {
    padding-top: 0;
  }

  /*.section--xp section. */
  .section--xp {
    padding-left: 1%; 
    padding-right: 1%;
  }

  /* Xp section. */
  .right-date {
    right: 105%;
  }

  .left-date {
    left: 105%; 
  }

  /* Hobbies section. */
  .section--hobbies {
    height: 140vh;
  }

  /* Footnote. */
  .footnote {
    left: 50%; 
    transform: translateX(-50%);
    width: fit-content;
  }
}

/**=====================================================================**/

/**========================== media queries width ======================**/

/* @media screen and (max-height: 625px) {
  .section--contact {
    height: 90vh;
  }
} */
/**=====================================================================**/

.animate {
  transition-delay: .1s;
  transition-duration: .25s;
  transition-timing-function: ease-in;
}
 
.slide-up {
  transform: translateY(0);
}
 
.slide-up.animate-active {
  transform: translateY(-100px);
}
</style>

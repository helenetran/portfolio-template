<template lang="pug">
.page-wrapper
  nav-bar
  home
  about
  projects
  skills
  xp
  interests
  contact
  footerSection
</template>

<script>
import navBar from '@/components/nav-bar'
import home from '@/views/home'
import about from '@/views/about'
import projects from '@/views/projects'
import skills from '@/views/skills'
import xp from '@/views/xp'
import interests from '@/views/interests'
import contact from '@/views/contact'
import footerSection from '@/components/footer'
import 'vueperslides/dist/vueperslides.css'
import Vue from 'vue'

let sections, buttons, progressCircles, backgroundTitle

export default {
  name: 'App',
  components: {
    navBar,
    home,
    about,
    projects,
    skills, 
    xp,
    interests,
    contact,
    footerSection
  },
  mounted () {
    window.addEventListener('scroll', this.eventsOnScroll)
    sections = document.getElementsByTagName('section')
    buttons = document.getElementsByClassName('menu__link')
    progressCircles = document.getElementsByClassName('skill__circle--progress')
    backgroundTitle = document.getElementsByClassName('home__background--picture')[0]
  },
  methods: {
    getImage (name) {
      return require(`./assets/images/${name}`)
    },
    eventsOnScroll (event) {
      const windowTopPosition = window.scrollY
      const windowHeight = window.innerHeight
      const windowBottomPosition = windowTopPosition + windowHeight

      // Animation sections on scroll.
      for (let i = 0; i < sections.length; i++){
        let section = sections[i]
        const sectionTopPosition = section.offsetTop 
        const sectionHeight = section.offsetHeight
        const sectionBottomPosition = section.offsetTop + sectionHeight 
        if ((sectionBottomPosition >= windowTopPosition) && (sectionTopPosition <= (windowBottomPosition))) section.classList.add('scroll')
        else section.classList.remove('scroll')
      }

      // Animation menu on scroll.
      for (let i = 0; i < sections.length; i++) {
        let section = sections[i]
        let button = buttons[i]
        let sectionOffsetBottom = (section.offsetHeight + section.offsetTop)
        if (((windowTopPosition + 300) >= section.offsetTop) && ((windowTopPosition + 300) <= sectionOffsetBottom)) button.classList.add('active')
        else button.classList.remove('active')
      }
      
      // Animate progress circles if visible within the window.
      for (let i = 0; i < progressCircles.length; i++) {
        let progressCircle = progressCircles[i] 
        if (document.getElementById('skills').classList.contains('scroll')) progressCircle.classList.add('animate-circle')
        else progressCircle.classList.remove('animate-circle')
      }

      // Parallax effect on home__title.
      backgroundTitle.style = `transform: translate3d(0, ${windowTopPosition * 0.03}%, 0)`
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.eventsOnScroll);
  }
}
</script>

<style lang='scss'>

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
  overflow: hidden; 
}

h1 {
  font-family: lemon-milk-light, arial; 
  font-size: 2.1em;
  width: 100%; 
  position: absolute;
  text-align: center;
  top: 90px; 
  color: #424242; 
}

h2 {
  color: #616161; 
  font-size: 1.5em;
  font-family: lemon-milk-light, arial;
  margin-bottom: 10px;
  position: relative;
  font-weight: 300; 
}

h3 {font-size: 15px;}

p {
  color: #757575; 
  font-size: 13px; 
  margin-top: 15px 0 6px 0;
}

a {
  all: unset;
  cursor: pointer;
}

li {list-style-type: none;}
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
/**=====================================================================**/

/**================================ icons ==============================**/
@font-face {
  font-family: "client-portfolio";
  src:url("./assets/fonts/client-portfolio.eot");
  src:url("./assets/fonts/client-portfolio.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/client-portfolio.woff") format("woff"),
    url("./assets/fonts/client-portfolio.ttf") format("truetype"),
    url("./assets/fonts/client-portfolio.svg#client-portfolio") format("svg");
  font-weight: normal;
  font-style: normal;
}

[data-icon]:before {
  font-family: "client-portfolio" !important;
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
  font-family: "client-portfolio" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-location:before {content: "\61";}
.icon-github:before {content: "\62";}
.icon-codepen:before {content: "\63";}
.icon-linkedin:before {content: "\64";}
.icon-email:before {content: "\65";}
.icon-phone:before {content: "\66";}
.icon-validated:before {content: "\76";}
.icon-blocked:before {content: "\6d";}
.icon-close:before {content: "\68";}
.icon-cooking:before {content: "\6c";}
.icon-music:before {content: "\71";}
.icon-hiking:before {content: "\6e";}
.icon-laptop:before {content: "\72";}
.icon-html:before {content: "\69";}
.icon-css:before {content: "\73";}
.icon-js:before {content: "\74";}
.icon-php:before {content: "\6a";}
.icon-jquery:before {content: "\70";}
.icon-roller:before {content: "\75";}
.icon-work:before {content: "\77";}
.icon-graduate:before {content: "\78";}
.icon-sass:before {content: "\79";}
.icon-travel:before {content: "\7a";}
.icon-download:before {content: "\47";}
.icon-vulcain:before {content: "\42";}
.icon-difference:before {content: "\44";}
.icon-love:before {content: "\45";}
.icon-speedometer:before {content: "\67";}
.icon-wand:before {content: "\46";}
.icon-volleyball:before {content: "\48";}
.icon-responsible:before {content: "\49";}
.icon-award:before {content: "\6b";}
.icon-vue:before {content: "\6f";}
.icon-mysql:before {content: "\4a";}
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
  height: 100%;
  width: 100%;
  opacity: 0;
  -webkit-transform: translateY(2em);
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
.section--interests::after {
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
@media screen and (max-width: 768px) {
  section {
    padding-left: 6%; 
    padding-right: 6%; 
  }
}

@media screen and (max-width: 600px) {
  h1 {font-size: 2.5em;}
}

@media screen and (max-width: 450px) {
  p {font-size: 12px;}

  section {
    padding-left: 3%; 
    padding-right: 3%; 
  }
  
  h1 {font-size: 20px;}
}

/**=====================================================================**/

/**======================== animate sections ===========================**/
.animate {
  transition-delay: .1s;
  transition-duration: .25s;
  transition-timing-function: ease-in;
}
 
.slide-up {transform: translateY(0);}
 
.slide-up.animate-active {transform: translateY(-100px);}
</style>

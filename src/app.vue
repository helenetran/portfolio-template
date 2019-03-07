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

    <footer>
      <div class="footnote">
        <div class="footnote__text">Proudly made in Australia with </div>
        <div class="footnote__icon-wrapper">
          <div class="footnote__icon">
            <i class="icon icon-html"></i>
          </div>
          <div class="footnote__description">HTML</div>
        </div>

        <div class="footnote__icon-wrapper">
          <div class="footnote__icon">
            <i class="icon icon-css"></i>
          </div>
          <div class="footnote__description">CSS</div>
        </div>

        <div class="footnote__icon-wrapper">
          <div class="footnote__icon">
            <i class="icon icon-jquery"></i>
          </div>
          <div class="footnote__description">jQuery</div>
        </div>

        <div class="footnote__icon-wrapper">
          <div class="footnote__icon">
            <i class="icon icon-php"></i>
          </div>
          <div class="footnote__description">PHP</div>
        </div>

        <div class="footnote__icon-wrapper">
          <div class="footnote__icon ninja">
            <i class="icon icon-close"></i>
          </div>
          <div class="footnote__description">Crazy Keyboard Combos</div>
        </div>

        <div class="footnote__icon-wrapper">
          <div class="footnote__icon love">
            <i class="icon icon-love"></i>
          </div>
          <div class="footnote__description">Love</div>
        </div>
      </div>
    </footer>
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
    contact
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
      let backgroundTitle = document.getElementsByClassName('home__title')[0]
      if (document.getElementById('home').classList.contains('scroll')) {
        let test = (-windowTopPosition*0.4)
        backgroundTitle.style.top = (50+(windowTopPosition*-0.1))+'%'
        console.log(windowTopPosition, test)
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
.icon-communication:before {
  content: "\43";
}
.icon-list:before {
  content: "\41";
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
.icon-previous:before {
  content: "\4b";
}
.icon-next:before {
  content: "\4c";
}
.icon-responsible:before {
  content: "\49";
}
.icon-award:before {
  content: "\6b";
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



/**============================== footer ===============================**/
footer {
  height: 9vh;
  position: relative; 
}

.footnote {
  position: absolute;
  right: 10px;
  bottom: 6px;
  display: flex;
  font-style: italic;
  opacity: 0.5;
}

.footnote div {
  padding: 3px; 
  font-size: 12px; 
  transition: 0.3s ease-in-out;   
}

.footnote__text {
  position: relative;
  bottom: -2px;
}

.footnote__icon-wrapper {
  width: 12px; 
  position: relative;
}

.footnote__icon {
  height: 12px;
  width: 12px; 
}

.footnote__icon:hover {
  opacity: 1; 
  color: #4dd0e1;
  transform: scale(1.2);
}

.footnote__icon .icon-php {
  font-size: 15px;
}

/* Animation icon ninja star. */
.ninja:hover {
  transform: rotate(-360deg) scale(1.2); 
}

/* Animation icon heart. */
.love:hover {
  animation: beat 1s infinite;
}

.footnote__icon:hover ~ .footnote__description {
  opacity: 1;
  transform: translate(-50%,-2px);
}

.footnote__description {
  height: auto;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  font-size: 9px;
  background-color: white;
  border: 1px solid #eee;
  opacity: 0;
  z-index: -2;
  transition: 0.3s ease-in-out;
}

.footnote__description::after {
  content: "";
  height: 0;
  width: 0;
  border: 6px solid transparent;
  border-top-color: #ffffff;
  position: absolute;
  top: 97%; 
  left: 50%;
  transform: translateX(-50%);
}

.footnote__description::before {
  content: "";
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-top-color: #eee;
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
}

@keyframes beat {
  0% {
    transform: scale( .75 );
  }
  20% {
    transform: scale( 1 );
  }
  40% {
    transform: scale( .75 );
  }
  60% {
    transform: scale( 1 );
  }
  80% {
    transform: scale( .75 );
  }
  100% {
    transform: scale( .75 );
  }
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
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 2.5em;
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

  .contact-info__icons-wrapper {
    justify-content: space-between;
    letter-spacing: unset;
  }

  #send-button {
    right: 50%; 
    transform: translateX(50%);
  } 
}

@media screen and (max-width: 450px) {
  p {
    font-size: 12px; 
  }

  /* Whole page. */
  section {
    padding-left: 3%; 
    padding-right: 3%; 
  }
  
  h1 {
    font-size: 20px; 
  } 

  /* top-bar section. */
  .top-bar {
    height: 230px;
    padding: 5px; 
    opacity: 0;
    z-index: -5;
  }

  .top-bar--wrapper {
    height: 90%;
    flex-direction: column; 
    justify-content: space-between;
    bottom: unset;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%,-50%);
  }

  .top-bar__button.active {
    border-bottom: 2px solid transparent;
  }

  .top-bar__text {
    font-size: 13px; 
  }

  .show-menu {
    opacity: 0.85; 
    z-index: 5;
  }

  .top-bar li {
    height: 30px;
    text-align: center; 
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

<template lang="pug">
#top-bar
  input#menu-toggle(type="checkbox")
  label#trigger(for="menu-toggle")
  label#burger(for="menu-toggle")
  ul.top-bar
    li(v-for="(item, i) in topBarItems" :key="i")
      a(v-if="item.scrollTo" 
          class="top-bar__button" 
          v-scroll-to="{ element: '#' + item.scrollTo, duration: 500 }")
        span.top-bar__text(v-html="item.label")
      a(v-else :href="item.link" target="_blank" class="top-bar__button" :title="item.title")
        span.top-bar__text(v-html="item.label")
</template>

<script>
import Vue from 'vue'
import { returnStatement } from 'babel-types';
const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

export default {
	name: 'topBar',
	data: () => ({
		topBarItems: [
			{
				scrollTo: 'home',
				label: 'Home'
			},
			{
				scrollTo: 'about',
				label: 'About Me'
			},
			{
				scrollTo: 'projects',
				label: 'Projects'
			},
			{
				scrollTo: 'skills',
				label: 'Skills'
			},
			{
				scrollTo: 'xp',
				label: 'Xp'
			},
			{
				scrollTo: 'hobbies',
				label: 'Hobbies'
			},
			{
				scrollTo: 'contact',
				label: 'Contact'
			},
			{
				link: `./helene-developer-resume.pdf?v=3`,
				label: '<i class="icon icon-download"></i>',
				title: 'Download my resume'
			}
		]
  }),
  created () {
    document.addEventListener("click", function(event) {
      let menu = document.getElementsByClassName('top-bar')[0]
      // let buttons = document.getElementsByClassName('top-bar')[0].children
      let menuToggle = document.getElementById('menu-toggle')
      let menuIsOpen = menuToggle.checked
      const clickingInMenu = event.target === menu
      const clickingBurger = event.target === menuToggle
      
      if (!clickingBurger && !clickingInMenu && menuIsOpen) {
        menuToggle.checked = false
      }
    })
  }
}
</script>

<style lang="scss">
// =========================== Top bar =================================// 
$primary-color: black; 
// #4dd0e1

.top-bar {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 4;
  background-color: #ffffff;
  opacity: 0.85;
  box-shadow: 0 0 7px rgba(128,128,128, 0.5);
  display: flex; 
  &--wrapper {
    height: 68%;
    position: absolute;
    bottom: 0%;
    display: flex;
  }
  &__button {
    padding: 10px;
    padding-left: 13px;
    padding-right: 13px;
    font-family: lemon-milk-light, arial;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out;
  }
  &__text {
    transition: 0.3s ease-in-out;
  }
  &__button:hover &__text {
  color: $primary-color; 
  }
}

.top-bar li {
  position: relative;
  top: 29%;
}

.icon-download {
  font-size: 20px; 
  position: absolute;
  top: 19%;
  left: 0%;
  padding-left: 5px;
}

/* Top bar active state. */
.active {
 color: $primary-color; 
 border-bottom-color: $primary-color;
}
// ====================================================================// 

// =================== Burger menu for mobile screens =================//
#menu-toggle {
  display: none;
} 

@media screen and (max-width: 450px) {
  /* top-bar section. */
  .top-bar {
    height: 100%;
    width: 34%;
    position: fixed;
    left: 100%;
    padding-top: 80px;
    display: unset;
    animation: not-checked-anim 0.3s ease-in-out both;

    &__text {
      font-size: 13px; 
    }
    &__button {
      border: unset;
      border-left: 2px solid transparent;
      padding: 4px; 
      display: block; 
      text-align: left; 
    }
  }
  
  .icon-download {
    position: relative; 
  }
  
  .top-bar li {
    height: 30px;
    text-align: left; 
    top: unset;
  }

  #trigger, #burger, #burger:before, #burger:after {
    top: 20px;
    right: 20px;
    background-color: $primary-color;
    width: 30px;
    height: 4px;
    transition: 0.2s ease-in-out;
    z-index: 6;
  }

  #trigger {
    height: 25px;
    background: none;
    cursor: pointer;
  }

  #burger {
    position: fixed; 
    cursor: pointer;
    &::before {
    content: '';
      position: absolute;
      top: 10px;
      left: 0;
    }
    &::after {
    content: '';
      position: absolute;
      left: 0;
    }
  }

  #menu-toggle:checked + #trigger + #burger {
    transform: rotate(180deg);
    transition: 0.3s ease-in-out;
  }

  #menu-toggle:checked + #trigger + #burger:before {
    width: 20px;
    top: -2px;
    left: -8px;
    transform: rotate(135deg) translateX(-5px);
    transition: 0.3s ease-in-out;
  }

  #menu-toggle:checked + #trigger + #burger:after {
    width: 20px;
    top: 2px;
    left: -8px;
    transform: rotate(-135deg) translateX(-5px);
    transition: 0.3s ease-in-out;
  }

  #menu-toggle:checked + #trigger + #burger + .top-bar {
    animation: checked-anim 0.5s ease-in-out both;
  }

  .checked-anim {
    animation: checked-anim 0.5s ease-in-out both;
  }

  .not-checked-anim {
    animation: not-checked-anim 0.3s ease-in-out both;
  }

  @keyframes checked-anim {
    0% {
      transform: translateX(0%)
    }
    100% {
      transform: translateX(-100%)
    }
  }

  @keyframes not-checked-anim {
    0% {
      transform: translateX(-100%)
    }
    100% {
      transform: translateX(0%)
    }
  }

  .active {
    border-bottom-color: transparent;
    border-left-color: $primary-color;
  }
}
// ====================================================================// 
</style>

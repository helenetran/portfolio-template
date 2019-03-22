<template lang="pug">
  #top-bar
    input#menu-checkbox(type="checkbox")
    span.burger__element
    ul.menu
      li(v-for="(item, i) in menuItems" :key="i")
        a.menu__link(v-if="item.scrollTo" 
          v-scroll-to="{ element: '#' + item.scrollTo, duration: 500 }") {{item.label}}
        a.menu__link(v-else :href="item.link" target="_blank" :title="item.title")
          span(v-html="item.label")
</template>

<script>
import Vue from 'vue'
import { returnStatement } from 'babel-types';
import { close } from 'fs';
const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

export default {
	name: 'topBar',
	data: () => ({
		menuItems: [
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
      let menu = document.getElementsByClassName('menu')[0]
      let menuCheckbox = document.getElementById('menu-checkbox')
      let menuIsOpen = menuCheckbox.checked
      const clickingInMenu = event.target === menu
      const clickingMenuCheckbox = event.target === menuCheckbox
      if (!clickingInMenu && menuIsOpen && !clickingMenuCheckbox) {
        menuCheckbox.checked = false
      }
    })
  }
}
</script>

<style lang="scss">
// =========================== Top bar =================================// 
.menu {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0%;
  z-index: 6;
  background-color: #fff;
  opacity: 0.85;
  box-shadow: 0 0 7px rgba(128,128,128, 0.5);
  display: flex; 
  &__link {
    padding: 10px;
    color: rgba(0,0,0,0.4);
    font-family: lemon-milk-light, arial;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out;
  }
  &__link:hover {
  color: #ff8a80; 
  }
}

.menu li {
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

/* Menu active state for screen width > 450px. */
.active {
 color: #ff8a80; 
 border-bottom-color: #ff8a80;
}

#menu-checkbox {
  display: none;
} 

@media screen and (max-width: 600px) {
  .menu__link {
    padding: 10px 10px 10px 6px; 
  }
}

@media screen and (max-width: 450px) {
  .menu {
    height: 100%;
    width: 200px;
    position: fixed;
    left: 100%;
    padding-top: 80px;
    display: unset;
    z-index: 9; 
    animation: not-checked-anim 0.5s ease-in-out both;
    &__link {
      border: unset;
      border-left: 2px solid transparent;
      padding: 10px; 
      padding-left: 24px; 
      display: block; 
      text-align: left; 
    }
    & li {
      text-align: left; 
      top: unset;
      transition: 0.3s ease-in-out;
    }
    & li:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
  
  .active {
    border-bottom-color: transparent;
    border-left-color: #ff8a80;
  }

  .icon-download {
    position: relative; 
  }

  #menu-checkbox {
    display: block; 
    width: 40px;
    height: 35px;
    position: fixed;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: 0; 
    z-index: 11;
    -webkit-touch-callout: none;
  }

  .burger__element {
    display: block;
    position: fixed;
    top: 20px;
    right: 12px;
    background-color: #000;
    width: 30px;
    height: 4px;
    margin: 4px; 
    transition: 0.2s ease-in-out;
    z-index: 10;
    cursor: pointer;
    border-radius: 3px;
    &::before {
    content: '';
      position: absolute;
      top: 10px;
      left: 0;
      background-color: #000;
      width: 30px;
      height: 4px;
      border-radius: 3px;
    }
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      background-color: #000;
      width: 30px;
      height: 4px;
      border-radius: 3px;
    }
  }

  #menu-checkbox:checked ~ .burger__element {
    transform: rotate(180deg);
    transition: 0.3s ease-in-out;
  }

  #menu-checkbox:checked ~ .burger__element::before {
    width: 20px;
    top: 2px;
    left: -8px;
    transform: rotate(45deg) translateX(5px);
    transition: 0.3s ease-in-out;
  }

  #menu-checkbox:checked ~ .burger__element::after {
    width: 20px;
    top: 2px;
    left: -12px;
    -webkit-transform: rotate(-45deg) translateX(-5px);
    transform: rotate(-45deg) translateX(12px);
    transition: 0.3s ease-in-out;
  }

  #menu-checkbox:checked ~ .menu {
    animation: checked-anim 0.3s ease-in-out both;  
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
}
// ====================================================================// 
</style>

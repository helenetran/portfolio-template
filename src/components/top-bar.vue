<template lang="pug">
  #top-bar
    input#menu-checkbox(type="checkbox")
    label#burger(for="menu-checkbox")
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
      let burger = document.getElementById('burger')
      let menuCheckbox = document.getElementById('menu-checkbox')
      let menuIsOpen = menuCheckbox.checked
      const clickingInMenu = event.target === menu
      const clickingBurger = event.target === burger
      const clickingMenuCheckbox = event.target === menuCheckbox
      if (!clickingBurger && !clickingInMenu && menuIsOpen && !clickingMenuCheckbox) {
        menuCheckbox.checked = false
      }
    })
  }
}
</script>

<style lang="scss">
// =========================== Top bar =================================// 
$primary-color: black; 
// #4dd0e1

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
    font-family: lemon-milk-light, arial;
    text-align: center;
    position: relative;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out;
  }
  &__link:hover {
  color: $primary-color; 
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
 color: $primary-color; 
 border-bottom-color: $primary-color;
}

#menu-checkbox {
  display: none;
} 

@media screen and (max-width: 768px) {
  .menu__link {
    padding-left: 10px; 
    padding-right: 10px; 
  }
}

@media screen and (max-width: 450px) {
  .menu {
    height: 100%;
    width: 34%;
    position: fixed;
    left: 100%;
    padding-top: 80px;
    display: unset;
    animation: not-checked-anim 0.3s ease-in-out both;
    &__link {
      border: unset;
      border-left: 2px solid transparent;
      padding: 4px; 
      padding-left: 24px; 
      display: block; 
      text-align: left; 
    }
    & li {
      height: 30px;
      text-align: left; 
      top: unset;
    }
  }
  
  .active {
    border-bottom-color: transparent;
    border-left-color: $primary-color;
  }

  .icon-download {
    position: relative; 
  }

  #burger {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: transparent;
    transition: 0.2s ease-in-out;
    z-index: 7;
    cursor: pointer;
  }

  .burger__element {
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
    background-color: $primary-color;
    width: 30px;
    height: 4px;
    transition: 0.2s ease-in-out;
    z-index: 7;
    cursor: pointer;
    &::before {
    content: '';
      position: absolute;
      top: 10px;
      left: 0;
      background-color: $primary-color;
      width: 30px;
      height: 4px;
    }
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      background-color: $primary-color;
      width: 30px;
      height: 4px;
    }
  }

  #menu-checkbox:checked + #burger {
    transform: rotate(180deg);
    transition: 0.3s ease-in-out;
  }

  // #menu-checkbox:checked + #burger + .burger__element +.burger__element::before {
  //   width: 20px;
  //   top: -2px;
  //   left: -8px;
  //   transform: rotate(135deg) translateX(-5px);
  //   transition: 0.3s ease-in-out;
  // }

  // #menu-checkbox:checked + .burger__element::after {
  //   width: 20px;
  //   top: 2px;
  //   left: -8px;
  //   transform: rotate(-135deg) translateX(-5px);
  //   transition: 0.3s ease-in-out;
  // }

  #menu-checkbox:checked + #burger + .menu {
    animation: checked-anim 0.5s ease-in-out both;
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

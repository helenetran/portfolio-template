<template> 
	<div id="top-bar" class="top-bar">
		
    <input type="checkbox" id="menu-toggle"/>
    <label id="trigger" for="menu-toggle"></label>
    <label id="burger" for="menu-toggle"></label>
    
    <ul class="top-bar--wrapper" id="menu">
			<li v-for="(item, i) in topBarItems" :key="i">
				<a v-if="item.scrollTo" 
					 class="top-bar__button" 
					 v-scroll-to="{ element: '#' + item.scrollTo, duration: 500 }">
					<span class="top-bar__text" v-html="item.label"></span>
				</a>
				<a v-else :href="item.link" target="_blank" class="top-bar__button" :title="item.title">
					<span class="top-bar__text" v-html="item.label"></span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue'
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
	})
}
</script>

<style lang="scss">
// =========================== Top bar =================================// 
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
}

.top-bar--wrapper {
  height: 68%;
  position: absolute;
  bottom: 0%;
  display: flex;
}

.top-bar__button {
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

.top-bar__text {
  transition: 0.3s ease-in-out;
}

.top-bar__button:hover .top-bar__text {
 color: #4dd0e1; 
}

.icon-download {
  font-size: 20px; 
  position: absolute;
  top: 19%;
  left: 0%;
  padding-left: 5px;
}

/* Animation top menu. */
.active {
 color: #4dd0e1; 
 border-bottom-color: #4dd0e1;
}
// ====================================================================// 

// =================== Burger menu for mobile screens =================//
#menu-toggle {
  display: none;
} 

@media screen and (max-width: 450px) {
  /* top-bar section. */
  .top-bar {
    height: 60px;
    width: 16%; 
    left: unset;
    right: 0%; 
    padding: 5px;
    background-color: unset; 
    opacity: unset;
    box-shadow: unset; 
  }

  .top-bar--wrapper {
    height: 100vh;
    flex-direction: column; 
    justify-content: space-evenly;
    top: 0%;
    right: 0%; 
    bottom: unset;
    background-color: #ffffff;
    opacity: 0.85;
    box-shadow: 0 0 7px rgba(128,128,128, 0.5);
    animation: not-checked-anim 0.3s ease-in-out both;
    // display: none;
  }

  .top-bar__button {
    left: 50%;
    transform: translateX(-50%);
  }

  .top-bar__button.active {
    border-bottom: 2px solid transparent;
  }

  .top-bar__text {
    font-size: 13px; 
  }

  .top-bar li {
    height: 30px;
    text-align: center; 
  }

  li, a {
    display: none;
  }

  #trigger, #burger, #burger:before, #burger:after {
    position: absolute;
    top: 25px;
    left: 25px;
    background-color: #4dd0e1;
    width: 30px;
    height: 4px;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  #trigger {
    height: 25px;
    background: none;
  }

  #burger:before {
    content: '';
    top: 10px;
    left: 0;
  }

  #burger:after {
    content: '';
    top: 20px;
    left: 0;
  }

  #menu-toggle:checked + #trigger + #burger {
    top: 35px;
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

  #menu-toggle:checked + #trigger + #burger + .top-bar--wrapper {
    animation: checked-anim 1s ease-in-out both;
  }

  #menu-toggle:checked + #trigger ~ .top-bar--wrapper > li,
  #menu-toggle:checked + #trigger ~ .top-bar--wrapper {
    display: flex;
  }

  [type="checkbox"]:not(:checked), 
  [type="checkbox"]:checked {
    display: none;
  }

  @keyframes checked-anim {
    0% {
      width: 0px;
    }
    100% {
      width: 200px;
    }
  }

  @keyframes not-checked-anim {
    0% {
      width: 200px;
    }
    100% {
      width: 0px;
    }
  }
}
// ====================================================================// 
</style>

<template>
	<div id="top-bar" class="top-bar show-menu">
		<ul class="top-bar--wrapper">
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
</style>

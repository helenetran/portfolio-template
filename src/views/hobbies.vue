<template lang="pug">
	section.section--hobbies#hobbies
		.section--wrapper
			h1.hobbies__title HOBBIES & INTERESTS				
			.hobbies__wrapper
				.hobby(v-for="(hobby, i) in hobbiesItems"
						:key="i"
						:icon="hobby.icon"
						:title="hobby.title"
						:description="hobby.description")
					i.hobby__icon.icon(:class="hobby.icon")
					.hobby__text
						h3 {{hobby.title}}
						p {{hobby.description}}
</template>

<script>
export default {
  name: 'hobbies',
  data: () => ({
		hobbiesItems: [
			{
				icon:"icon-laptop",
				title:"PROGRAMMING",
				description:"Started programming in November 2018, love it so far!"
			},
			{
				icon:"icon-travel",
				title:"TRAVELLING",
				description:"Recently travelled around Europe, Asia & Australia (14 countries visited last year) - <3 Australia, that's why I decided to live in Melbourne for few years!"
			},
			{
				icon:"icon-roller",
				title:"ROLLER SKATING",
				description:"My favorite sport! I always enjoy a good ride every now & then."
			},
			{
				icon:"icon-volleyball",
				title:"VOLLEYBALL",
				description:"Started to play for the high school team, now playing for fun when I have the chance."
			},
			{
				icon:"icon-music",
				title:"PLAYING GUITAR",
				description:"From Red Hot Chili Peppers to Britney Spears - you name it :)"
			},
			{
				icon:"icon-cooking",
				title:"COOKING",
				description:"I looooove fooood! I mostly cook French, Italian & Vietnamese cuisine - but I sometimes also enjoy Indian, Japanese... and many more."
			},
			{
				icon:"icon-hiking",
				title:"HIKING",
				description:"Listenning to the sounds of the nature, spotting wild life, wandering over a great view."
			}
		],
  }),
  methods: {
    getImage (name) {
      return require(`../assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss">
.section--hobbies {
  background-color: #ff8a80c7;
  min-height: 640px; 
	&::after {
		border: 4em solid transparent;
		border-top-color: #d7ccc8;
	}
}

.hobbies__title {
	color: #fff;
}

.hobbies__wrapper {
  height: auto;
	width: 100%;
	position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
}

.hobby {
  height: 9vw;
  width: 9vw;
	text-align: center;
	&__icon {
		font-size: 7vw;
		color: #fff;
		margin: 0;
		transition: 0.3s ease-in-out;
		&:hover {
			color: #ffd54f; 
		}
		&:hover ~ .hobby__text {
			transform: translate(-50%, 5px);
			opacity: 1;
			z-index: 5;
		}		
	}
}

.hobby__text {
  height: auto;
  width: 180px;
  padding: 15px;
  background-color: #fff;
  text-align: left;
  position: relative;
  left: 50%; 
  transform: translateX(-50%);
  opacity: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
	&::after {
		content: "";
		height: 0; 
		width: 0; 
		border: 10px solid transparent; 
		border-bottom-color: #fff;
		position: absolute;
		bottom: 99%;
		left: 50%; 
		transform: translateX(-50%);
	}
	& h3 {
  color: #000000;
  margin-bottom: 10px;
	}
}

@media screen and (max-width: 768px) {
  /* Hobbies section. */
  .hobbies__wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hobby {
    height: 69px;
    width: 69px;
    padding: 17px;
    padding-bottom: 60px;
		&__text {
			width: 150px; 
			padding: 11px; 
		}
		&__icon {
			font-size: 50px; 
		}
	}	
}
@media screen and (max-width: 600px) {
  .section--hobbies {
    height: 112vh; 
  }
}

@media screen and (max-width: 450px) {
  .section--hobbies {
    height: 150vh;
  }
}
</style>

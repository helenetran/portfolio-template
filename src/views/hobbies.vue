<template lang="pug">
	section.section--hobbies#hobbies
		.section--wrapper
			h1.hobbies__title HOBBIES & INTERESTS				
			.hobbies__wrapper
				.hobby
					i.hobby__icon.icon.icon-laptop
					.hobby__text
						h3 PROGRAMMING
						p Started programming in November 2018, love it so far!
				.hobby
					i.hobby__icon.icon.icon-travel
					.hobby__text
						h3 TRAVELLING
						p Recently travelled around Europe, Asia & Australia - <i class="icon icon-love"> Australia, that's why I decided to live in Melbourne for few years! </i>- (14 countries visited last year).
				.hobby
					i.hobby__icon.icon.icon-roller
					.hobby__text
						h3 ROLLER SKATING
						p My favorite sport! I always enjoy a good ride every now & then.
				.hobby
					i.hobby__icon.icon.icon-volleyball
					.hobby__text
						h3 VOLLEYBALL
						p Started to play for the high school team, now playing for fun when I have the chance.
				.hobby
					i.hobby__icon.icon.icon-music
					.hobby__text
						h3 PLAYING GUITAR
						p From Red Hot Chili Peppers to Britney Spears - you name it :)
				.hobby
					i.hobby__icon.icon.icon-cooking
					.hobby__text
						h3 COOKING
						p I looooove fooood! I mostly cook French, Italian & Vietnamese cuisine - but I sometimes also enjoy Indian, Japanese... and many more.
				.hobby
					i.hobby__icon.icon.icon-hiking
					.hobby__text
						h3 HIKING
						p Listenning to the sounds of the nature, spotting wild life, wandering over a great view.
</template>

<script>
export default {
  name: 'hobbies',
  data: () => ({
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
  background-color: #4dd0e1;
  min-height: 640px; 
	&::after {
		border: 4em solid transparent;
		border-top-color: #d7ccc8;
	}
}

.hobbies__title {
	color: #ffffff;
}

.hobbies__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.hobby {
  height: 9vw;
  width: 9vw;
	&__icon {
		font-size: 8vw;
		color: #ffffff;
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
  background-color: #ffffff;
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
		border-bottom-color: #ffffff;
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
</style>
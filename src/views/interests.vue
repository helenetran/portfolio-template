<template lang="pug">
section#interests
	.section--wrapper
		h1.interests__title INTERESTS				
		.interests__wrapper
			.interest(v-for="(interest, i) in interests"
					:key="i"
					:icon="interest.icon"
					:title="interest.title"
					:description="interest.description")
				i.interest__icon.icon(:class="interest.icon")
				.interest__text
					h3 {{ interest.title }}
					p {{ interest.description }}
</template>

<script>
export default {
  data: () => ({
		interests: [
			{
				icon: 'icon-laptop',
				title: 'PROGRAMMING',
				description: 'Culpa exercitation eu ut pariatur exercitation eiusmod.'
			},
			{
				icon: 'icon-travel',
				title: 'TRAVELLING',
				description: 'Aliquip reprehenderit nostrud nostrud qui nisi deserunt labore ad ex est ex esse eu sunt.'
			},
			{
				icon: 'icon-roller',
				title: 'ROLLER SKATING',
				description: 'Eiusmod enim laboris tempor excepteur ad ut eiusmod.'
			},
			{
				icon: 'icon-cooking',
				title: 'COOKING',
				description: 'Quis sit dolor fugiat id sint aliqua.'
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
#interests {
  background-color: #2e7d32c7;
  min-height: 640px;
}

.interests__title {color: #fff;}

.interests__wrapper {
  height: auto;
	width: 100%;
	position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
}

.interest {
  height: 9vw;
  width: 9vw;
	text-align: center;
	&__icon {
		font-size: 7vw;
		color: #fff;
		margin: 0;
		transition: 0.3s ease-in-out;
		&:hover {color: #ffd54f;}
		&:hover ~ .interest__text {
			transform: translate(-50%, 5px);
			opacity: 1;
			z-index: 5;
		}		
	}
}

.interest__text {
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
  /* interests section. */
  .interests__wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .interest {
    height: 69px;
    width: 69px;
    padding: 17px;
    padding-bottom: 60px;
		&__text {
			width: 150px; 
			padding: 11px; 
		}
		&__icon {font-size: 50px;}
	}	
}
@media screen and (max-width: 600px) {
  #interests {height: 112vh;}
}

@media screen and (max-width: 450px) {
  #interests {height: 150vh;}
}
</style>

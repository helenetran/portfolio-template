<template>
	<section class="section--hobbies" id="hobbies">
		<div class="section--wrapper">
			<h1 class="hobbies__title">HOBBIES & INTERESTS</h1>				
			<div class="hobbies__wrapper">		
				<div class="hobby">
					<i class="hobby__icon icon icon-laptop"></i>
					<div class="hobby__text">
						<h3>PROGRAMMING</h3>
						<p>Started programming in November 2018, love it so far!</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-travel"></i>
					<div class="hobby__text">
						<h3>TRAVELLING</h3>
						<p>Recently travelled around Europe, Asia & Australia - <i class="icon icon-love"> Australia, that's why I decided to live in Melbourne for few years! </i>- (14 countries visited last year).</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-roller"></i>
					<div class="hobby__text">
						<h3>ROLLER SKATING</h3>
						<p>My favorite sport! I always enjoy a good ride every now & then.</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-volleyball"></i>
					<div class="hobby__text">
						<h3>VOLLEYBALL</h3>
						<p>Started to play for the high school team, now playing for fun when I have the chance.</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-music"></i>
					<div class="hobby__text">
						<h3>PLAYING GUITAR</h3>
						<p>From Red Hot Chili Peppers to Britney Spears - you name it :)</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-cooking"></i>
					<div class="hobby__text">
						<h3>COOKING</h3>
						<p>I looooove fooood! I mostly cook French, Italian & Vietnamese cuisine - but I sometimes also enjoy Indian, Japanese... and many more.</p>
					</div>
				</div>
				<div class="hobby">
					<i class="hobby__icon icon icon-hiking"></i>
					<div class="hobby__text">
						<h3>HIKING</h3>
						<p>Listenning to the sounds of the nature, spotting wild life, wandering over a great view.</p>
					</div>
				</div>
			</div>		
		</div>
	</section>
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

<style>
.section--hobbies {
  background-color: #4dd0e1;
  min-height: 640px; 
}

.section--hobbies::after {
  border: 4em solid #D7CCC8;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
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
}

.hobby__icon {
  font-size: 8vw;
  color: #ffffff;
  margin: 0;
  transition: 0.3s ease-in-out;
}

.hobby__icon:hover {
  color: #ffd54f; 
}

.hobby__icon:hover ~ .hobby__text {
  transform: translate(-50%, 5px);
  opacity: 1;
  z-index: 5;
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
}

.hobby__text::after {
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

.hobby__text h3 {
  color: #000000;
  margin-bottom: 10px;
}
</style>
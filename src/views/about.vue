<template>
	<section class="section--about-me" id="about"> 
		<div class="section--wrapper">
			<div class="about-me__text"> 
				<h1 class="about-me__title">ABOUT ME</h1>
				<div class="about-me__description">
					<p>Hi there!</p>
					<p>
						I have <strong>started programming last November</strong>… so far, so good!
						I play with <strong>HTML, CSS / SASS, JavaScript / jQuery & PHP</strong>. 
						Actually, this resume is my first website "handcoded with love" - I hope you will like it!
          </p>
					<p>
						You can visit my some of my projects <strong><a href="https://codepen.io/Helene-Andre/pen/mQrgZa" target="_blank"> @ codepen.io/Helene-Andre</a></strong>
					</p>
					<p>
						<strong>Based in Melbourne, I am looking for an opportunity to challenge myself while learning new things, sharing and having fun all along</strong>.
					</p>
				</div>
			</div>			
		</div>	
	</section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
.section--about-me {
  /* Padding for scroll animation. */
  padding-top: 15vh;
  height: 60vh; 
}

.section--about-me .section--wrapper {
  height: 80%;
  width: 70%;
  top: unset;
  position: absolute;
  margin-left: 15%;
  margin-right: 15%;
  bottom: 14%;
}

.about-me__title {
  color: #a1887f;
  position: relative;
  top: 0%; 
  margin-top: 15px;
}

.about-me__text {
  position: absolute;
  top: 50%; 
  transform: translateY(-50%);
  height: auto;
  width: 100%;
  font-size: 1em;
  font-family: 'Roboto', arial;
  font-weight: 300;
  text-align: justify;
  padding-top: 1em;
}

.about-me__description {
  height: auto; 
  width: 100%; 
  padding-top: 10px; 
  color: #7c796f;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.about-me__icon {
  cursor: pointer; 
}

.about-me__icon:hover {
  color: #4dd0e1; 
}
</style>

<template>
	<footer id="footer">
		<div class="footnote">
			<div class="footnote__text">Proudly made in Australia with </div>
			<div class="footnote__icon-wrapper">
				<div class="footnote__icon">
					<i class="icon icon-html"></i>
				</div>
				<div class="footnote__description">HTML</div>
			</div>

			<div class="footnote__icon-wrapper">
				<div class="footnote__icon">
					<i class="icon icon-css"></i>
				</div>
				<div class="footnote__description">CSS</div>
			</div>

			<div class="footnote__icon-wrapper">
				<div class="footnote__icon">
					<i class="icon icon-vue"></i>
				</div>
				<div class="footnote__description">Vue</div>
			</div>

			<div class="footnote__icon-wrapper">
				<div class="footnote__icon">
					<i class="icon icon-php"></i>
				</div>
				<div class="footnote__description">PHP</div>
			</div>

			<div class="footnote__icon-wrapper">
				<div class="footnote__icon ninja">
					<i class="icon icon-close"></i>
				</div>
				<div class="footnote__description">Crazy Keyboard Combos</div>
			</div>

			<div class="footnote__icon-wrapper">
				<div class="footnote__icon love">
					<i class="icon icon-love"></i>
				</div>
				<div class="footnote__description">Love</div>
			</div>
		</div>
	</footer>    
</template>

<script>
export default {
	name: 'footerSection',
	data: () => ({
  }),
}
</script>
<style>
footer {
  height: 9vh;
  position: relative; 
}

.footnote {
  position: absolute;
  right: 10px;
  bottom: 6px;
  display: flex;
  font-style: italic;
  opacity: 0.5;
}

.footnote div {
  padding: 3px; 
  font-size: 13px; 
  transition: 0.3s ease-in-out;   
}

.footnote__text {
  position: relative;
  bottom: -2px;
}

.footnote__icon-wrapper {
  width: 12px; 
  position: relative;
}

.footnote__icon {
  height: 12px;
  width: 12px; 
}

.footnote__icon:hover {
  opacity: 1; 
  color: #4dd0e1;
  transform: scale(1.2);
}

.footnote__icon .icon-php {
  font-size: 15px;
}

/* Animation icon ninja star. */
.ninja:hover {
  transform: rotate(-360deg) scale(1.2); 
}

/* Animation icon heart. */
.love:hover {
  animation: beat 1s infinite;
}

.footnote__icon:hover ~ .footnote__description {
  opacity: 1;
  transform: translate(-50%,-2px);
}

.footnote__description {
  height: auto;
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  font-size: 9px;
  background-color: white;
  border: 1px solid #eee;
  opacity: 0;
  z-index: -2;
  transition: 0.3s ease-in-out;
}

.footnote__description::after {
  content: "";
  height: 0;
  width: 0;
  border: 6px solid transparent;
  border-top-color: #ffffff;
  position: absolute;
  top: 97%; 
  left: 50%;
  transform: translateX(-50%);
}

.footnote__description::before {
  content: "";
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-top-color: #eee;
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
}

@keyframes beat {
  0% {
    transform: scale( .75 );
  }
  20% {
    transform: scale( 1 );
  }
  40% {
    transform: scale( .75 );
  }
  60% {
    transform: scale( 1 );
  }
  80% {
    transform: scale( .75 );
  }
  100% {
    transform: scale( .75 );
  }
}
</style>

<template lang="pug">
#footer
  .footnote
    .footnote__text Made in Australia with 
    .footnote__icon-wrapper(v-for="(item, i) in footnoteItems" :key="i")
      .footnote__icon(:class="item.class")
        i.icon(:class="item.icon")
      .footnote__description {{ item.description }} 
</template>

<script>
export default {
	data: () => ({
    footnoteItems: [
      { icon: 'icon-html', description: 'HTML' },
      { icon: 'icon-css', description: 'CSS' },
      { icon: 'icon-vue', description:'Vue' },
      { icon:'icon-php', description:'PHP' },
      { class:'ninja', icon:'icon-close', description:'Crazy Keyboard Combos' },
      { class:'love', icon:'icon-love', description:'Love' }
    ]
  }),
}
</script>

<style lang="scss">
footer {
  height: 9vh;
  position: relative; 
}

.footnote {
  position: absolute;
  right: 10px;
  display: flex;
  font-style: italic;
  opacity: 0.5;
  & div {
    padding: 2px; 
    font-size: 12px; 
    transition: 0.3s ease-in-out;   
  }
  &__text {
    position: relative;
    bottom: -2px;
  }
  &__icon-wrapper {position: relative;}
}

.footnote__icon {
  height: 12px;
  width: 12px;
  &:hover {
    opacity: 1; 
    color: #2e7d32;
    transform: scale(1.2);
  }
  & .icon-php {font-size: 15px;}
}

/* Animation icon ninja star. */
.ninja:hover {
  transform: rotate(-360deg) scale(1.2); 
  color: #ffd54f;
}

/* Animation icon heart. */
.love:hover {animation: beat 1s infinite;}

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
  &::after, &::before {
    height: 0;
    width: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: "";
    border: 6px solid transparent;
    border-top-color: #fff;
    top: 97%;
  }
  &::before {
    content: "";
    border: 7px solid transparent;
    border-top-color: #eee;
    top: 100%;
  }
}

@keyframes beat {
  0% {transform: scale(0.75);}
  20% {transform: scale(1);}
  40% {transform: scale(0.75);}
  60% {transform: scale(1);}
  80% {transform: scale(0.75);}
  100% {transform: scale(0.75);}
}

@media screen and (max-width: 450px) {
  .footnote {
    left: 50%; 
    transform: translateX(-50%);
    width: fit-content;
  }
}
</style>

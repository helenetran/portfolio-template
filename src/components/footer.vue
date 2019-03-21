<template lang="pug">
  #footer
    .footnote
      .footnote__text Proudly made in Australia with 
      .footnote__icon-wrapper(v-for="(item, i) in footnoteItems"
          :key="i"
          :icon="item.icon"
          :class="item.class"
          :description="item.description")
        .footnote__icon(:class="item.class")
          i.icon(:class="item.icon")
        .footnote__description {{item.description}} 

      .footnote__icon-wrapper
        .footnote__icon.ninja
          i.icon.icon-close
        .footnote__description Crazy Keyboard Combos
      .footnote__icon-wrapper
        .footnote__icon.love
          i.icon.icon-love
        .footnote__description Love  
</template>

<script>
export default {
	name: 'footerSection',
	data: () => ({
    footnoteItems: [
      {
        icon:"icon-html",
        description:"HTML"
      },
      {
        icon:"icon-css",
        description:"CSS"
      },
      {
        icon:"icon-vue",
        description:"Vue"
      },
      {
        icon:"icon-php",
        description:"PHP"
      },
      // {
      //   class:"ninja",
      //   icon:"icon-close",
      //   description:"Crazy Keyboard Combos"
      // },
      // {
      //   class:"love",
      //   icon:"icon-love",
      //   description:"Love"
      // }
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
    padding: 3px; 
    font-size: 13px; 
    transition: 0.3s ease-in-out;   
  }
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
  &:hover {
    opacity: 1; 
    color: #ff8a80;
    transform: scale(1.2);
  }
  & .icon-php {
    font-size: 15px;
  }
}

/* Animation icon ninja star. */
.ninja:hover {
  transform: rotate(-360deg) scale(1.2); 
  color: #ffd54f; 
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
  &::after {
    content: "";
    height: 0;
    width: 0;
    border: 6px solid transparent;
    border-top-color: #fff;
    position: absolute;
    top: 97%; 
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
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

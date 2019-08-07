<template lang="pug">
section#home
  .home__background
    .home__background--picture
      img(src="../assets/images/home/home-background.jpg" alt="plants background")
  .home__text
    .home__text--name John DOE
    .home__text--slogan Ad commodo
</template>

<script>
export default {
  methods: {
    getImage (name) {
      return require(`../assets/images/${name}`)
    }
  }
}
</script>

<style lang="scss">
// Height set to 101vh for the scroll animation.
#home { 
  height: 101vh; 
  padding: 0;
}

.home__background {
  position: absolute;
  height: 100%;
  width: 100%; 
  overflow: hidden;
  &--picture { 
    position: absolute;
    width: 100%;
    &::before {
      content: ''; 
      height: 100%; 
      width: 100%; 
      position: absolute; 
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0); 
      transition: 0.3s ease-in-out; 
    }
    & img {
      width: 100%; 
      min-width: 712px; 
      min-height: 645px; 
    }
  }
}

.scroll .home__background--picture::before {background-color: rgba(0, 0, 0, 0.2);}

.home__text {
  height: 150px;
  width: 400px;  
  position: absolute;
  text-align: center; 
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &--name {
    font-size: 50px;
    font-family: lemon-milk-light, arial;
    letter-spacing: 6px;
  }
  &--slogan {
    font-size: 22px;
    width: auto;
    margin-top: 14px;
    position: relative;
    font-weight: lighter;
    font-style: italic;
    &::before, &::after {
      content: '';
      height: 2px;
      width: 35px;
      position: absolute;
      right: 81%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
    }
    &::after {
      left: 81%;
      right: unset;
    }
  }
}

@media screen and (max-width: 450px) {
  .home__text {
    width: 275px; 
    &--name {font-size: 13vw;}
    &--slogan {font-size: 7vw;}
    &--slogan::before, &--slogan::after {
      opacity: 0;
      z-index: -1; 
    }
  }
}
</style>

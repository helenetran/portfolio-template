<template lang="pug">
  section#home.section--home
    .home__background--wrapper
      .home__background
        img.home__background--image(src="../assets/images/home/home-background.jpg" alt="home background laptop coffee")
    .home__title-wrapper
      .home__title
        .home__title--name Helene ANDRE
        .home__title--job Front-end Developer
    img.home__picture(:src="getImage('home/helene-andre-picture.jpg')" alt="Helene Andre's picture")
</template>

<script>
export default {
  name: 'home',
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
.section--home { 
  height: 92vh; 
  bottom: 8%;
  padding: 0;
  margin-bottom: 10vh; 
}

.home__background--wrapper {
  position: absolute;
  height: 100%;
  width: 100%; 
  overflow: hidden;
}

.home__background { 
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
  &--image {
    width: 100%; 
    min-width: 712px; 
    min-height: 645px; 
  }
}

.scroll .home__background::before {
  background-color: rgba(0, 0, 0, 0.2); 
}

.home__title-wrapper {
  height: 100%;
  width: 100%; 
  text-align: center; 
  color: #fff; 
}

.home__title {
  height: 150px;
  width: 400px;  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &--name {
    font-size: 50px;
    font-family: lemon-milk-light, arial;
  }
  &--job {
    font-size: 22px;
    width: auto;
    margin-top: 14px;
    position: relative;
    font-weight: lighter;
    font-style: italic;
    &::before {
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
      content: '';
      height: 2px;
      width: 35px;
      position: absolute;
      left: 81%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
    }
  }
}

.home__picture {
  width: 200px;
  position: absolute;
  bottom: calc(200px/-2);
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 25em;
  border: 6px solid #fff;
} 

@media screen and (max-width: 600px) {
  .home__picture {
    width: 176px;
    bottom: calc(176px/-2);
  }
}

@media screen and (max-width: 450px) {
  .home__title {
    width: 275px; 
  }

  .home__title--name {
    font-size: 13vw;
  }

  .home__title--job {
    font-size: 7vw; 
  }

  .home__title--job::before, 
  .home__title--job::after {
    opacity: 0;
    z-index: -1; 
  }
  .home__picture {
    width: 150px;
    bottom: calc(150px/-2);
  }
}
</style>

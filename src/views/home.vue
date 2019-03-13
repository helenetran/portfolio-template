<template>
  <section id="home" class="section--home">
    <div class="home__background--wrapper">
      <div class="home__background">
        <img class="home__background--image" src="../assets/images/home/home-background.jpg" alt="">
      </div>
    </div>
    <div class="home__title-wrapper">
      <div class="home__title">
        <div class="home__title--name">Helene ANDRE</div> 
        <div class="home__title--job">Front-end Developer</div>
      </div>
    </div>
    <img class="home__picture" :src="getImage('home/helene-andre-picture.jpg')" alt="Helene Andre's picture">
  </section>
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
/**=============================== home ================================**/
.section--home{
  bottom: 8%;
  height: 92vh; 
  margin-bottom: 10vh; 
  padding: 0; 
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
}

.home__background::before {
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

.home__background--image {
  width: 100%; 
  min-width: 712px; 
  min-height: 645px; 
}

.scroll .home__background::before {
  background-color: rgba(0, 0, 0, 0.2); 
}

.home__title-wrapper {
  height: 100%; 
  width: 100%; 
  // position: absolute;
  text-align: center; 
  color: #ffffff; 
}

.home__title {
  height: 150px;
  width: 400px;  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.home__title--name {
  font-size: 60px;
  font-family: lemon-milk-light, arial;
}

.home__title--job {
  font-size: 30px;
  width: auto;
  margin-top: 14px;
  position: relative;
  font-weight: 300;
  font-style: italic;
}

.home__title--job::before {
  content: '';
  height: 2px;
  width: 35px;
  position: absolute;
  right: 90%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
}

.home__title--job::after {
  content: '';
  height: 2px;
  width: 35px;
  position: absolute;
  left: 90%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
}

.home__picture {
  width: 17em;
  position: absolute;
  bottom: -18%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25em;
  border: 8px solid #ffffff; 
}
/**=====================================================================**/
</style>

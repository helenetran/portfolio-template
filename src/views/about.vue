<template lang="pug">
section.section--about-me#about
  .section--wrapper.about-me
    h1.about-me__title About Me
    .about-me__description
      p Hi there!
      p I am a former project manager from the pharmaceutical industry who have #[strong started programming last November]… so far, so good! #[strong I play with HTML, SCSS / SASS, JavaScript / jQuery / Vue, PHP & MySql].
      p You can visit some of my projects 
        a(href="https://codepen.io/Helene-Andre/pen/mQrgZa" target="_blank")  #[strong @ codepen.io/Helene-Andre]
        span  or 
        a(href="https://github.com/helene-andre" target="_blank")  #[strong @ github.com/helene-andre]          
      p Based in Melbourne, I am looking for an opportunity to challenge myself while #[strong learning new things, sharing and having fun all along].
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">
.section--about-me {
  padding-top: 15vh;
  height: 60vh; 
}

.about-me {
  position: absolute;
  height: 80%;
  width: 70%;
  top: unset;
  bottom: 14%;
  height: auto;
  width: 100%;
  font-size: 1em;
  font-family: 'Roboto', arial;
  font-weight: 300;
  text-align: justify;
  padding-top: 1em;
  &__title {
    color: #ff8a80;
    position: relative;
    top: 0%; 
    margin-top: 15px;
  }
  &__description {
    height: auto; 
    width: 100%; 
    padding-top: 10px; 
    color: #7c796f;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}

@media screen and (max-width: 450px){
  .about-me__description {
    padding-top: 0;
  }
}
</style>

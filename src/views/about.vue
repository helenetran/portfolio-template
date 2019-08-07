<template lang="pug">
section#about
  .about.section--wrapper
    h1.about__title About
    .about__description
      p Amet aliquip qui esse labore ad veniam quis nulla labore eu ea exercitation. Sit occaecat officia id irure tempor cillum excepteur proident qui. Quis Lorem do aute do culpa Lorem excepteur officia proident irure sint minim nostrud quis. Elit consequat ea minim ullamco eiusmod sint proident amet quis laboris incididunt. Officia sunt veniam nostrud id mollit excepteur. Sit qui nisi dolor commodo aliquip laboris sunt sunt ad aliquip proident.
      p Cillum veniam consectetur reprehenderit eiusmod sint nisi sint aute nisi cupidatat consectetur. Laboris occaecat dolore velit irure deserunt ut. Et consequat nulla occaecat ex sit. Proident pariatur enim aliquip nostrud eu dolore ad ut. Consectetur qui aliquip tempor aliqua laborum culpa. In deserunt consequat laboris enim aute occaecat consectetur dolore nisi eiusmod sunt anim.
      p Nostrud amet sunt in occaecat non fugiat sit fugiat. Culpa consectetur consequat nulla in sint aliqua excepteur do esse incididunt esse pariatur velit quis. Labore fugiat laborum consequat voluptate sunt.
</template>

<style lang="scss">
#about {
  padding-top: 15vh;
  height: auto;
}

.about {
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 1em;
  font-family: 'Roboto', arial;
  font-weight: 300;
  text-align: justify;
  padding: 0 0 20% 0;
  &__title {
    color: #2e7d32;
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
  .about__description {padding-top: 0;}
}
</style>

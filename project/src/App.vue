<template>
  <!--nav>
    <router-link to="/">Home</router-link> |
  </nav>-->
  <router-view/>
</template>

<script>

  export default {
    components: {
    
    }
  }
</script>

<style>
  @charset "UTF-8";

  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

  /* box-sizing: border-box; */

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font);
  }

  :root {
    --cor01: #15C3D6;
    --cor02: #FFD666;
    --cor03: #2E4A7D;
    --cor04: #EBF2F5;
    --cor05: #FFFFFF;
    --cor06: #f3e9e9;
    --cor07: #253e6d;
    --cor08: rgb(46, 74, 125, 0.8);
    --cor09: #3C5D95;

    --font: 'Nunito', sans-serif;

    font-size: 16px;
  }
</style>

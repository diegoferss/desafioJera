<template>
  <div id="profile">
    <!--<img src="" alt="" class="profile__profileImage">-->
    <div class="profile__profileImage"></div>
    <p class="profile__profileName">Diego</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 15px;
  }

  #profile:hover {
    cursor: pointer;
  }

  .profile__profileImage {
    width: 200px;
    height: 200px;
    background-color: blue;
  }

  .profile__profileName {
    margin-top: 10px;
    color: gray;
  }
</style>
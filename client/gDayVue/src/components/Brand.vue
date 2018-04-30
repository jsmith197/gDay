<template>
  <div class="container">
    <div class="jumbotron bg-primary text-center" id="top">
      <img src="../assets/gday-logo.png" class="img-fluid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data() {
    return {
      msg: 'gDay',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top{
  margin-bottom: 0px;
  border-radius: 0%;
}
.img-fluid {
    max-width: 300px;
    height: auto;
}


</style>

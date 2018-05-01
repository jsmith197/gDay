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
  padding-top: 0;
  padding-bottom: 0;
}
.img-fluid {
    max-width: 200px;
    height: auto;
}
.container {
    padding-right: 0px;
    padding-left: 0px;
}


</style>

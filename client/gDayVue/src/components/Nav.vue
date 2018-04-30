<template>
  <div class="container sticky-top">
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
  <span class="navbar-brand d-flex flex-fill" id="navbar"></span>
    <div class="navbar-collapse collapse">
        <ul class="navbar-nav justify-content-center d-flex flex-fill">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">About</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">Members</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">Schedule</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">Merchandise</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">Contact</a>
          </li>
        </ul>
    </div>
    <div class="d-flex flex-fill"> </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      msg: 'gDay',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primary{
    background-color: #FF8500
}
.navbar{
  padding: 0px
}
</style>

<template>

  <div class="container fixed-bottom " id="foot">
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand d-flex flex-fill"></span>
    <div class="navbar-collapse collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link " href="#">Facebook</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item">
            <a class="nav-link " href="#">Twitter</a>
          </li>
          <span class="dot"></span>
          <li class="nav-item active">
            <a class="nav-link" href="#">Contact us!<span class="sr-only">(current)</span></a>
          </li>
        </ul>
    </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'gDay',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  font-size: .8rem !important;
}
.navbar{
  padding: 0px;
}
.container {
    padding-right: 0px;
    padding-left: 0px;
}
</style>

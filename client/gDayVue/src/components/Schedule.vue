<template>
  <div class='container'>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <h2>{{ title }}</h2>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <body>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data() {
    return {
      title: 'Schedule'
    }
  }
}
</script>

<style scoped>
h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 900;
  font-size: 10px;
  font-size: 50px;
  text-align: center;
  color: #272727;
}
</style>

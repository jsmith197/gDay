<template>
  <div class='container'>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <h2>{{ title }}</h2>
      <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <div class="grid-container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Members',
  props: {
    people: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: 'Members'
    }
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 285px 285px 285px 285px;
  grid-template-rows: 250px;
  grid-gap: 10px;
  justify-content: center;
  margin: 4rem 4rem;
}

.item {
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 35px;
  background-color: #f93d66;
}

h2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 900;
  font-size: 10px;
  font-size: 50px;
  text-align: center;
  color: #272727;
}
</style>

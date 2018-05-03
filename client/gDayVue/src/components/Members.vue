<template>
  <div class="container">
    <p>{{people}}</p>
  </div>
</template>

<script>
export default {
  name: 'Members',
  data() {
    return {
      msg: 'gDay',
    };
  },
  props: ['people']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-primary {
    color: #2E1F27 !important;
}

</style>

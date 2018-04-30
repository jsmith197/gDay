<template>
  <div id="app">
    <Brand></Brand>
    <Nav></Nav>
    <Sample></Sample>
    <div class="progress container">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <Samples></Samples>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Brand from './components/Brand'
import Footer from './components/Footer'
import Sample from './components/Sample'
import Samples from './components/Samples'

export default {
  name: 'App',
  components: {
    Brand,
    Nav,
    Footer,
    Sample,
    Samples,
  },
};
</script>

<style>
#line{
  border-radius: 300%;
  width: 100%;
}
.bg-primary {
    background-color: #FF8500 !important;
}
.bg-danger {
    background-color: #2660a4 !important;
}
.progress{
  height: .25rem !important;
}
.dot {
  align-self: center;
  height: 3px;
  width: 3px;
  background-color: #e9ecef;
  border-radius: 50%;
  display: inline-block;
}

</style>

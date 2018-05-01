<template>
  <div id="app">
    <Brand></Brand>
    <Nav></Nav>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <About></About>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
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
import About from './components/About'

export default {
  name: 'App',
  components: {
    Brand,
    Nav,
    Footer,
    Sample,
    Samples,
    About,
  },
};
</script>

<style>
#line{
  border-radius: 300%;
  width: 100%;
  margin-left: 4.5;
  margin-right: 4.5;
}
.bg-primary {
    background-color: #FF8500 !important;
}
.bg-danger {
    background-color: #2660a4 !important;
}
.progress{
  height: .25rem !important;
  margin: 1.25rem auto;
}
.dot {
  align-self: center;
  height: 3px;
  width: 3px;
  background-color: #e9ecef;
  border-radius: 50%;
  display: inline-block;
}
@media (min-width: 276px){
  .progress {
      max-width: 250px;
  }
}
@media (min-width: 376px){
  .progress {
      max-width: 330px;
  }
}
@media (min-width: 576px){
  .container {
      max-width: 570px;
  }
  .progress {
      max-width: 530px;
  }
}
@media (min-width: 768px){
  .container {
    max-width: 720px;
  }
  .progress {
    max-width: 700px;
  }
}
@media (min-width: 992px){
  .container {
      max-width: 960px;
  }
  .progress {
      max-width: 940px;
  }
}
@media (min-width: 1200px) {
  .container{
    max-width: 1170px;
  }
  .progress {
      max-width: 1150px;
  }
}
</style>

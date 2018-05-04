<template>
  <div id="app">
    <Login v-if="login" :showLogin="showLogin"></Login>
    <Brand/>
    <Nav :showLogin="showLogin"></Nav>
    <About/>
    <Schedule/>
    <Samples/>
    <div v-if="login" v-on:click="deactivateLogin" class="bg-dark fixed-bottom" id="darkness"></div>
    <Members :people="people"/>
    <Merch/>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Login from './components/Login'
import Nav from './components/Nav'
import Brand from './components/Brand'
import About from './components/About'
import Schedule from './components/Schedule'
import Merch from './components/Merch'
import Samples from './components/Samples'
import Members from './components/Members'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Brand,
    Nav,
    Merch,
    Samples,
    About,
    Login,
    Members,
    Footer,
    Schedule
  },
  methods: {
    showLogin(result) {
      this.login = result
    },
    deactivateLogin(){
      this.login = false
    }
  },
  data () {
    return {
      login: false,
      people: [],
      apiURL: 'https://frozen-ravine-86831.herokuapp.com/'
    }
  },
  mounted () {
    fetch(this.apiURL)
    .then(response => response.json())
    .then(response => {
      this.people = response
    })
  }
}

</script>

<style>
#darkness{
  width: 100%;
  height: 100vh;
  opacity: .7;
  position: run-in;
  z-index: 10000000;
}
#line{
  border-radius: 300%;
  width: 100%;
  margin-left: 4.5;
  margin-right: 4.5;
}
.bg-dark{
  background-color: #333 !important
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

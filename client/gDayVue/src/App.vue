<template>
  <div id="app">
    <Login v-if="login" :showLogin="showLogin" :submit="submit" :people="people"></Login>
    <Brand></Brand>
    <Nav :showLogin="showLogin" :image="image"></Nav>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <About></About>
    <div class="progress">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <Schedule></Schedule>
    <div class="progress container">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <Members :people="people"></Members>
    <div class="progress container">
      <div class="progress-bar bg-danger" id="line"></div>
    </div>
    <Samples></Samples>
    <div v-if="login" v-on:click="showLogin(false)" class="bg-dark fixed-bottom" id="darkness"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from './components/Login'
import Nav from './components/Nav'
import Brand from './components/Brand'
import Footer from './components/Footer'
import Sample from './components/Sample'
import Samples from './components/Samples'
import About from './components/About'
import Schedule from './components/Schedule'
import Members from './components/Members'

export default {
  name: 'App',
  components: {
    Brand,
    Nav,
    Footer,
    Sample,
    Samples,
    About,
    Login,
    Schedule,
    Members,
  },
  methods: {
    showLogin(result) {
      this.login = result
    },
    getPpl(){
      fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.people = response
      })

    },
    submit(newUser) {
      this.showLogin(false)
      this.people.push(newUser)
      this.image = 'gday-button-inverse.png'
      // fetch(this.apiURL, {
      //   method: "POST",
      //   headers: new Headers({
      //     "content-type": "application/json",
      //   }),
      //   body: JSON.stringify(function() {
      //     return {
      //       data: {
      //         name: newUser.name,
      //         email:newUser.email,
      //         image:newUser.image,
      //         bio:newUser.bio,
      //         employer:newUser.employer,
      //         title:newUser.title,
      //         password:newUser.password,
      //         cohort:newUser.cohort,
      //       }
      //     }
      //   })
      //   }).then(response => {
      //     return response.json()
      // })
      // .then(function(data){
      // })
      //   .catch(console.error)

    },
  },
  data () {
    return {
      people: [],
      login: false,
      apiURL:'https://frozen-ravine-86831.herokuapp.com/',
      image: 'gday-button.png',
    }
  },
  mounted () {
    this.getPpl()

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

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
    <div class="d-flex flex-fill" id="filler2"></div>
    <div class="" id="login">
      <a class="nav-link"  href="#">
      {{login.question}}
      <div id="cover">

      </div>
        <img :src="'static/' + login.img"
        class="img-fluid"></a>
    </div>

</nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      login:{
        img: 'gday-button.png',
        question: "Login",
      },
      active: true,
    };
  },
    methods: {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  transition: color .5s ease-out !important;
}
li:hover{
  opacity: 1;
}

#login{
  padding: 0;
  z-index: 1;
  text-align: center;
}
.img-fluid {
    max-width: 50px;
    max-height: 50px;
    border-right: 2.5rem;
    border-bottom: .25rem;
    position: relative;
}
.primary{
    background-color: #FF8500
}
.navbar{
  padding: 0px
}
.container {
    padding-right: 0px;
    padding-left: 0px;
}
.dot{
  height: 5px !important;
  width: 5px !important;
}
ul{
  margin-left: 3rem;
}
#cover{
  align-self: center;
  height: 46px;
  width: 46px;
  background-color: #e9ecef;
  border-radius: 50%;
  position: absolute;
  margin-left: 2px;
  margin-top: 2px;
  z-index: 10000;
  opacity: 0;
  transition: .5s ease-out
}
#login a{
  transition: color .5s ease-out;
}
#login:hover #cover{
  color: #ac3911;
  opacity: 0.5;
}
@media (min-width: 576px){
  #navbar{
    margin-left: 0rem;
  }
  #login a{
    padding-left: 0rem;
  }
  #cover{
    padding-left: 0rem;
  }
  ul{
    margin-left: 0;
  }
}
@media (min-width: 768px){
  #navbar{
    margin-left: 1.5rem;
  }
  #filler2{
    display: none;
  }
  ul{
    margin-left: 3rem;
  }
}
@media (min-width: 992px){
  #navbar{
    margin-left: 4.5rem;
  }
}

</style>

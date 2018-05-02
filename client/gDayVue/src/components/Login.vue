<template>
    <div class="container sticky-top d-flex justify-content-center">
    <fieldset class="bg-secondary border border-dark">
    <div class="form-group d-flex justify-content-end">
      <button id="leave" type="button" name="button" class="btn btn-primary" v-on:click="activateLogin"><h6>x</h6></button>
    </div>
      <div class="form-group d-flex flex-row justify-content-between">
        <label class="col-form-label" id="head"><h6>Login or Create</h6></label>
        <div class="d-flex flex-row justify-content-between ml-auto p-2">
          <input type="text" class="form-control" id="fullLogin" placeholder="Name">
          <span id="filler"></span>
          <input type="password" class="form-control" id="fullLogin" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full name if you would">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="somethingsomething@somethingoranother.com">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="I.e. password">
      </div>
      <div class="d-flex flex-row">
        <div class="form-group">
          <label for="exampleInputPassword1">Title</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Position I.e. absolute">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Employer</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="If you have a job, unlike me">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Bio</label>
        <textarea class="form-control" rows="2" placeholder="Tell me about you"></textarea>
      </div>
      <div class="d-flex flex-row align-items-center justify-content-between">
        <div class="form-group">
          <label for="exampleInputFile">Photo</label>
          <input type="file" class="form-control-file" aria-describedby="fileHelp">
        </div>
        <div class="form-group d-flex flex-column justify-content-around">
          <label id="cTitle" for="exampleInputPassword1">Cohort</label>
          <span id="filler" class="d-flex flex-fill"></span>
          <div class="d-flex flex-row justify-content-start align-items-center">
            <h3 id="g">g </h3>
          <input type="number" class="form-control" id="cohort" placeholder="Num" min="0">
        </div>
        </div>
      </div>
      <div class="justify-content-center d-flex">

        <button id="create" type="submit" class="btn btn-primary" v-on:click="activateLogin">Create</button>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'gDay',
    };
  },
  props: [
    'showLogin'
  ],
  methods: {
    activateLogin () {
      this.showLogin(false)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
#fullLogin{
  max-width: 6rem;
}
#cTitle{
  padding-left: 1.1rem;
}
#g{
  padding-right: .2rem;
}
#leave{
  margin-top: 0.2rem;
  width: 40px;
  height: 25px;
}
#leave a{
  margin-bottom: 5rem;
}
#filler{
  min-width: .2rem;
}
#cohort{
  max-height: 50px;
  max-width: 100px;
  min-width: 75px;
  margin-bottom: .4rem;
}
#create{
  margin-top: .5rem;
  margin-left: 2rem;
}
.form-group {
  margin: 0rem 1.5rem;

}
.text-primary {
    color: #F79226 !important;
}
fieldset{
  max-height: 95vh;
  position: absolute;
  border-radius: 3%;
}
label{
font-size: 1rem;
margin-top: .4rem;
margin-bottom: 0rem;
}
button{
  margin-top: 2rem;
  margin-bottom: .5rem;
  margin-left: .5rem;
  border-radius: 5%;
}
.container{
    max-width: 50vw;
    z-index: 100000000;
    padding-top: 1rem;
}
@media screen and (orientation: landscape) {
  fieldset{
    overflow-y:scroll;
  }
  .container{
    max-width: 70vw;
  }
}
</style>

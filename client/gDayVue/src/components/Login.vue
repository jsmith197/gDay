<template>
    <div class="container sticky-top d-flex justify-content-center">
    <fieldset class="bg-secondary border border-dark">
    <div class="form-group d-flex justify-content-end">
      <button id="leave" type="button" name="button" class="btn btn-primary" v-on:click="leaveLogin"><h6>x</h6></button>
    </div>
      <div class="form-group d-flex flex-row justify-content-between">
        <label class="col-form-label" id="head"><h6>Login or Create</h6></label>
        <div class="d-flex flex-row justify-content-between ml-auto p-2">
          <input type="text" class="form-control" id="fullLogin" placeholder="Name">
          <span id="filler"></span>
          <input type="password" class="form-control" id="fullLogin" placeholder="Password">
        </div>
      </div>

      <div v-if="failure" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Attenetion!</h4>
        <p class="mb-0">The email you have entered is the same as someone elses please enter a different one or try to login.</p>
      </div>

    <form @submit.prevent="getImageURL">
      <div class="form-group">
        <label for="exampleInputPassword1">Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="person.name" placeholder="Full name if you would">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="person.email" aria-describedby="emailHelp" placeholder="somethingsomething@somethingoranother.com">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="person.password" placeholder="I.e. password">
      </div>
      <div class="d-flex flex-row">
        <div class="form-group">
          <label for="exampleInputPassword1">Title</label>
          <input type="text" class="form-control" id="exampleInputPassword1" v-model="person.title" placeholder="Position I.e. absolute">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Employer</label>
          <input type="text" class="form-control" id="exampleInputPassword1" v-model="person.employer" placeholder="If you have a job, unlike me">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Bio</label>
        <textarea class="form-control" rows="2" placeholder="Tell me about you" v-model="person.bio"></textarea>
      </div>
      <div class="d-flex flex-row align-items-center justify-content-between">
        <div class="form-group">
          <label for="exampleInputFile">Photo</label>
          <input type="file" class="form-control-file" @change="onFileChanged">
        </div>
        <div class="form-group d-flex flex-column justify-content-around">
          <label id="cTitle" for="exampleInputPassword1">Cohort</label>
          <span id="filler" class="d-flex flex-fill"></span>
          <div class="d-flex flex-row justify-content-start align-items-center">
            <h3 id="g">g </h3>
          <input type="number" class="form-control" id="cohort" placeholder="Num" min="0" v-model="person.cohort">
        </div>
        </div>
      </div>
      <div class="justify-content-center d-flex">

        <input type="submit" name="submit" value="Create" class="btn btn-primary">
      </div>
    </form>
    </fieldset>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      person:{
        name:"",
        email:"",
        image:"",
        bio:"",
        employer:"",
        title:"",
        password:"",
        cohort:"",
      },
      selectedImage: null,
      cloudName: 'geelicious',
      unsignedUploadPreset: 'cefmrwtx',
      failure: false,
    };
  },
  props: [
    'showLogin',
    'submit',
    'people',
  ],
  methods: {
    leaveLogin () {
      this.showLogin(false)
    },
    onFileChanged (event) {
      this.selectedImage = event.target.files[0]
    },
    activateLogin () {
      console.log(this.people);
      const newUser = {}
      newUser.name = this.name
      newUser.email = this.email
      newUser.image = this.image
      newUser.bio = this.bio
      newUser.employer = this.employer
      newUser.title = this.title
      newUser.password =this.password
      newUser.cohort= this.cohort
      this.people.forEach(function(person) {
        if (newUser.email === person.email) {
          this.failure = true
        }
      })

      this.submit(newUser)

    },
    getImageURL () {
      let url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`
      let self = this
      let fD = new FormData()
      fD.append('file', self.selectedImage)
      fD.append('upload_preset', self.unsignedUploadPreset)

      fetch(url, {
        method: "POST",
        headers: new Headers({

        }),
            body: fD

        }).then(response => {
          return response.json()
        })
        .then(function(data){
          self.person.image = data.secure_url
          self.activateLogin()
        })
        .catch(console.error)

    }
  },

}
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


.alert {
    position: absolute;
    padding: 0.75rem 4rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
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
  overflow-y: visible;
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

@media screen and (orientation: landscape) and (max-width: 576px) {
  fieldset{
    overflow-y:scroll;
  }
  .container{
    max-width: 70vw;
  }
}
</style>

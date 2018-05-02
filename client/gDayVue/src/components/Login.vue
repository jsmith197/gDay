<template>
    <div class="container sticky-top">
    <fieldset class="bg-secondary border border-dark">
      <div class="form-group row form-group d-flex flex-row justify-content-between">
        <label class="col-form-label" id="head"><h3>Login</h3></label>
          <button id="leave" type="button" name="button" class="btn btn-primary"><h6>x</h6></button>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1"><h6>Name</h6></label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full name if you would">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email but which one?">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="d-flex flex-row">
        <div class="form-group">
          <label for="exampleInputPassword1">Title</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Employer</label>
          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleTextarea">Bio</label>
        <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Tell me about you"></textarea>
      </div>
      <div class="d-flex flex-row align-items-center">
        <div class="form-group">
          <label for="exampleInputFile">Choose a Photo</label>
          <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
          <!-- <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small> -->
        </div>
        <div class="form-group d-flex flex-column justify-content-around">
          <label for="exampleInputPassword1">Cohort</label>
          <span id="filler" class="d-flex flex-fill"></span>
          <input type="number" class="form-control" id="cohort" placeholder="Num">
        </div>
      </div>
        <button id="create" type="submit" class="btn btn-primary justify-content-start d-flex">Create</button>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#leave{
  margin-top: 1rem;
  width: 40px;
  height: 25px;
}
#leave a{
  margin-bottom: 5rem;
}
#filler{
  min-width: .5rem;
}
#cohort{
  max-height: 50px;
  max-width: 100px;
  min-width: 60px;
  margin-bottom: .4rem;
}
#create{
  margin-top: .5rem;
  margin-left: 2rem;
}
.form-group {
  margin: 0rem 2rem;

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
}
</style>

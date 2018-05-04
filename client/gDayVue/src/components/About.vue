<template>
  <div class="container">
    <div class='row'>
      <div class='col s12 m5'>
        <div class='card-panel teal'>
          <h3 class='one'>Our Plan.</h3>
          <p>With the gDay web application our team sought to create a platform for bringing together gSchool <strong>alumni, developers,</strong> and <strong>support staff</strong>, for an annual two-day extravaganza — filled with tech talks, guest speakers, hackathons, product demos, workshops, an alumni picnic, and happy hour. We created this app to invoke a vision of what an official 'Galvanize Alumni Day' might look like.</p>
        </div>
      </div>  
    </div>
    <div class='row'>
      <div class='col s12 m5'>
        <div class='card-panel teal'>
          <h3 class='two'>The Tradition.</h3>
          <p>A huge part of the <strong>Galvanize experience</strong> is about networking with your peers and being involved in the tech community. Let's continue that tradition, post-graduation, by curating an opportunity to reconnect with friends, re-engage with our dynamic network of blossoming and seasoned professionals, and of course, celebrating the wondrous experience    in which we all share.</p>
        </div>
      </div>
    </div>
    <div class='row'>
      <div class='col s12 m5'>
        <div class='card-panel teal'>
          <h3 class='three'>Be Inspired.</h3>
          <p>gDay is more than a reunion, it’s about appreciating and continuing to enhance your professional growth, while being introduced to new concepts and technologies! Workshops will range from topics like DevOps and UX design, to "what's new in tech," and even the hottest new tech being covered in the curriculum Galvanize curriculum.</p>
          <br/>
          <p>Please submit your event inqueries and speaker suggestions <strong><a class='link' href="#">here!</a></strong></p>
          <br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About'
    };
  }
};
</script>

<style scoped>
#top {
  margin-bottom: 0px;
  border-radius: 0%;
}

.container {
  text-align: left;
}

p {
  padding-left: 2rem;
  font-size: 30px;
}

h2 {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 900;
  font-size: 40px;
  text-align: center;
  color: #272727;
}

h3 {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 900;
  font-size: 30px;
  padding-top: 3rem;
  text-align: center;
  color: #F79226;
  margin-left: 1em;
}
</style>
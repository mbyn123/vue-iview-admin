<template>
  <div id="app">
   <home/>
   <landingpage/>
  </div>
</template>

<script>
import landingpage from "./components/LandingPage"
import home from "./components/Home"
export default {
  name: 'app',
  components: {
    home,
    landingpage
  }
}
</script>

<style>

</style>
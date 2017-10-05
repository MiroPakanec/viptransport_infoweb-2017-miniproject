<template>
  <v-app light>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar';

export default {
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style>
.btn-stan {
  border: 1px solid #917d61;
  background-color: white;
}

.btn-stan:hover {
  background-color: #917d61;
  border: 1px solid white;
}
</style>




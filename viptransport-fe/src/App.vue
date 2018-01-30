<template>
  <v-app light>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

export default {
  components: {
    'nav-bar': Navbar,
    'v-footer': Footer
  }
}
</script>

<style>
@font-face {
  font-family: r-thin;
  src: url('./stylus/fonts/Raleway-Regular.ttf');
}

body {

  font-family: r-thin;
}

p {
  font-size: 16px;
}

.bg-darker {

  background-color: #f7f1e8;
}

.btn-stan {
  border: 1px solid white;

  background-color: white;
}

.btn-stan:hover {
  border: 1px solid #917d61;
}

.txt-brown{
  color: #3a311f;
}

.small {
  font-size: 12px;
}

.no-padding {
  padding: 0;
}

.no-side-padding {
  padding-left: 0;
  padding-right: 0;
}
</style>




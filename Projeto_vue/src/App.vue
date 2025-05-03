<script setup>
import Carregamento from './components/Carregamento.vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Carregamento></Carregamento>
    <Header ></Header>
    <router-view ></router-view>
    <Footer></Footer>
  </div>
  
</template>

<style scoped>

</style>

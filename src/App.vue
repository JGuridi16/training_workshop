<template>
  <div id="app">
    <Navbar />
    <Form msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Form from './components/Form.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Form,
  }
}
</script>

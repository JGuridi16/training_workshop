<template>
    <b-navbar type="is-light">
        <template #brand>
            <b-navbar-item>
                <img alt="Vue logo" src="@/assets/logo.png"/>
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#" v-show="showHome">
                Home
            </b-navbar-item>
            <b-navbar-item href="#" v-if="!showHome">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
            <b-button v-on:click="showHome = !showHome" type="is-danger">None</b-button>
        </template>
        </b-navbar>
</template>
<script>
export default {
  name: 'Navbar',
  components: {},
  data: () => {
      return {
          showHome: false,
      }
  },
}
</script>
<style scoped>
</style>

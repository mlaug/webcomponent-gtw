<template>
  <div id="app">
    <personen-schaden schaden="session" action="http://www.google.de"/>
  </div>
</template>

<script>

  import PersonenSchaden from './components/PersonenSchaden.vue'

  export default {
    name: 'app',
    components : [PersonenSchaden]
  }

</script>

<style>

</style>

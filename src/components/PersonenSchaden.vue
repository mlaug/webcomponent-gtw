<template>
  <div>
    <p>Dynamic prop value: {{schaden}}</p>
    <p>Dynamic prop value: {{resourceurl}}</p>

    <form v-bind:action="action" method="POST">
      <input type="submit" value="trigger action"/>
      <input type="hidden" v-model="input" name="input"/>
    </form>

    <a href="#clear" @click="clearCache">clear cache</a>
    <input type="text" placeholder="type something" v-model="input"/>

    <a href="#ajax" @click="sendCall">call</a>

  </div>
</template>

<script>

  import axios from 'axios'

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  export default {
    props: ['schaden', 'action', 'resourceurl'],

    data: function () {
      return {
        input: getParameterByName("resetportlets") == null ? window.window.localStorage.getItem(this.schaden) : ""
      }
    },

    methods: {

      clearCache: function () {
        console.log("clearing cache")
        logoutTimer.setKeepAlive()
      },

      sendCall: function () {
        axios.post(this.resourceurl, {}).then(() => {
          console.log("success")
        }).catch((err) => {
          console.log(err)
        })
      }

    },

    watch: {

      input: {
        handler: function () {
          window.localStorage.setItem(this.schaden, this.input)
        }
      }

    }

  }

</script>

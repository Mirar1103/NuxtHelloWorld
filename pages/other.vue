<template>
  <div class="container">
    <div>
      <Header />
      <Logo />
      <h1 class="title">
        {{page.header}}
      </h1>
      <div class="links">
        <h2 class="subtitle">
          {{page.description}}
        </h2>
      </div>
      <div>
        <img width="245" viewBox="0 0 452 342" :src=page.image />
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    head() {
      return {
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      };
    },

    async asyncData({ $content, app }) {
      const page = await $content('info/'+`${app.i18n.locale}/other`).fetch()

      return {
        page
      }
    },

   



  }


</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

{
  data() {
    return {
      textInput: 'Wert',
      array: [ 1, 2, 3, 4, 5 ],
      length: 0,
      counterMethod: 0,
      counterComputed: 0,
      filter: ''
    }
  },
  computed: {
    lengthOfTextInput: function() {
      this.counterComputed++
      return this.textInput.length
    },
    filteredArray: function() {
      return this.array.filter(function(val) {
        return val <= this.filter
      }.bind(this))
    }
  },
  methods: {
    calculateLength: function() {
      this.counterMethod++
      return this.textInput.length
    },
    resetTextInput: function() {
      this.textInput = ''
    }
  }}

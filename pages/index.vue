<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{page.title}}
      </h1>
      <div class="links">
        <a href="https://nuxtjs.org/"
           target="_blank"
           rel="noopener noreferrer"
           class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js"
           target="_blank"
           rel="noopener noreferrer"
           class="button--grey">
          GitHub
        </a>
      </div>
      <div>
        <input v-model="textInput" @blur="resetTextInput()">
        {{ calculateLength() }} {{ lengthOfTextInput }} {{ counterComputed + ' ' + counterMethod }} 

        <div>
          <input placeholder="Filter" v-model="filter">
          <p v-for="val in filteredArray">
            Text {{ val }}
          </p>
        </div>

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
  
    async asyncData({ $content }) {
      const page = await $content('info/index').fetch()

      return {
        page
      }
    },

    data() {
      return {
        textInput: 'Wert',
        array: [1, 2, 3, 4, 5],
        length: 0,
        counterMethod: 0,
        counterComputed: 0,
        filter: ''
      }
    },
    computed: {
      lengthOfTextInput: function () {
        this.counterComputed++
        return this.textInput.length
      },
      filteredArray: function () {
        return this.array.filter(function (val) {
          return val >= this.filter
        }.bind(this))
      }
    },
    methods: {
      calculateLength: function () {
        this.counterMethod++
        return this.textInput.length
      },
      resetTextInput: function () {
        this.textInput = 'Wert'
      }
    }



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

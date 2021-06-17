<template>
  <div class="container">
    <div>
      <template>
        <svg class="NuxtLogo" width="245" height="180" viewBox="0 0 452 342" :xmlns= "page.image">
          <path d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z"
                fill="#00C58E" />
          <path d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z"
                fill="#108775" />
          <path d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z"
                fill="#2F495E" />
        </svg>
      </template>
      <h1 class="title">
        {{page.header}}
      </h1>
      <div class="links">
        <h2 class="subtitle">
          {{page.description}}
        </h2>
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

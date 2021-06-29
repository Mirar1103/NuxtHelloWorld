<template>
  <div>
    <Menu-collapse :page = pageData />
    <Footer/>
  </div>
</template>
<script>
  export default {
    async asyncData({ $content, params, redirect }) {
      return await $content('menu/' + `${params.lang}/header_text`).fetch().then((pageData) => {
        return {
          pageData
        }
      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'en' } })
      })
    }
  }
</script>

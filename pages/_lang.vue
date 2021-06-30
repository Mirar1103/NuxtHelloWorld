<template>
  <div>
    <Menu-collapse :page = "pageData" />
    <Footer :page = "footerData" />
  </div>
</template>
<script>
  export default {
    async asyncData({ $content, params, redirect }) {
      const pageData = await $content('menu/' + `${params.lang}/header_text`).fetch().then((pageData) => {
        return pageData
        
      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'en' } })
      })
      const footerData = await $content('footer/' + `${params.lang}/footer_text`).fetch().then((page) => {
        return page
        
      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'en' } })
      })
      return {
        pageData,
        footerData
      }
    },
  }
</script>

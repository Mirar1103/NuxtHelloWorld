<template>
  <div>
    <div class="container">
      <div class="shape-top">
      </div>
      <div class="shape-left">
      </div>
      <div class="row">
        <div class="col-lg-6 header-padding-button mt-2 order-3 order-lg-1">
          <h1 class="pb-4">
            <b>
              {{page.customComponent1.titleBold}}
            </b>
            {{page.customComponent1.subtitle}}
          </h1>
          <h3 class="pb-4">{{page.customComponent1.description}}</h3>
          <h3 class="pb-4">
            <div class="pb4-list">
              <div class="pb4-icon">
                <p class="material-icons align-text-top icon-biz"></p>
              </div>
              <div class="pb4">
                <p>{{page.customComponent1.listElement1}}</p>
              </div>
            </div>
            <div class="pb4-list">
              <div class="pb4-icon">
                <p class="material-icons align-text-top icon-biz"></p>
              </div>
              <div class="pb4">
                <p>{{page.customComponent1.listElement2}}</p>
              </div>
            </div>
            <div class="pb4-list">
              <div class="pb4-icon">
                <p class="material-icons align-text-top icon-biz"></p>
              </div>
              <div class="pb4">
                <p>{{page.customComponent1.listElement3}}</p>
              </div>
            </div>
            <div class="pb4-list">
              <div class="pb4-icon">
                <p class="material-icons align-text-top icon-biz"></p>
              </div> <div class="pb4">
                <p>{{page.customComponent1.listElement4}}</p>
              </div>
            </div>
          </h3>
          <div class="row pb-4 d-flex justify-content-left ">
            <div class="col-12 col-xl-4">
              <a :href="page.customComponent1.buttonLink" role="button" aria-pressed="true" class="btn btn-block btn-CTA2">{{page.customComponent1.Button}}</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 header-img-padding order-1 order-lg-3">
          <img :src="page.customComponent1.image" alt="CIB coSys" class="img-fluid">
        </div>
      </div>
    </div>
    <GridImageTop :page="page.gridImageTop1" />
  </div>
</template>
<script>
  export default {
    async asyncData({ $content, params, redirect }) {
      const page = await $content('mockPage/' + `${params.lang}/cosys`).fetch().then((pageData) => {
        return pageData

      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'de' } })
      })
      return {
        page
      }
    },

    head() {
      return {
        title: this.page.name,
        meta: [
        ]
      }
    }
  }
</script>

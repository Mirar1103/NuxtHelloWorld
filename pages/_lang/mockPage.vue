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
      CIB coSys:
        </b>
      effiziente Vorlagen für die individuelle Kunden-Korrespondenz
      </h1>
    <h3 class="pb-4">CIB coSys verwaltet die gesamte Korrespondenz im Unternehmen. Aus intelligenten Vorlagen erzeugen Sie hochwertige und vielfältige Dokumente, um mit Ihren Kunden individuell und effizient zu kommunizieren.</h3>
    <h3 class="pb-4">
      <div class="pb4-list">
      <div class="pb4-icon">
        <p class="material-icons align-text-top icon-biz"></p>
        </div>
      <div class="pb4">
        <p>Hochzuverlässig und voll integrierbar</p>
        </div>
        </div>
      <div class="pb4-list">
      <div class="pb4-icon">
        <p class="material-icons align-text-top icon-biz"></p>
        </div>
      <div class="pb4">
        <p>Kosten- und zeitsparend</p>
        </div>
        </div>
      <div class="pb4-list">
      <div class="pb4-icon">
        <p class="material-icons align-text-top icon-biz"></p>
        </div>
      <div class="pb4">
        <p>Sicher und hocheffizient</p>
        </div>
        </div>
      <div class="pb4-list">
      <div class="pb4-icon">
        <p class="material-icons align-text-top icon-biz"></p>
        </div> <div class="pb4"><p>Benutzerfreundlich und barrierefrei</p>
           </div>
        </div>
      </h3>
    <div class="row pb-4 d-flex justify-content-left ">
      <div class="col-12 col-xl-4">
      <a href="#Bewertung" role="button" aria-pressed="true" class="btn btn-block btn-CTA2">Mehr erfahren</a>
        </div>
      </div>
      </div>
    <div class="col-lg-6 header-img-padding order-1 order-lg-3">
    <img src="~/static/img/HG_CIB_cosys.svg" alt="CIB coSys" class="img-fluid">
      </div>
    </div>
  </div>
    <GridImageTop :page ="page.gridImageTop1"/>
</div>
</template>
<script>
  export default {
    async asyncData({ $content, params, redirect }) {
      const page = await $content('mockPage/' + `${params.lang}/cosys_mock`).fetch().then((pageData) => {
        return pageData

      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'en' } })
      })
      return {
        page
      }
    },
  }
</script>

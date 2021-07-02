<template>

  <div id="Kanal" class="section">
  <div class="container">
    <div class="section-title">
      <h2>{{page.title}}</h2>
      </div> <article class="desktop ie">
    <div class="row mb-md-4 text-center justify-content-between">
    <div>
      <img :src="page.image1" :alt="page.altText1" width="auto" height="150" class="mb-3">
      <p class="card-title font-weight-bold">{{page.header1}}</p>
      </div>
    <div>
      <img :src="page.image2" :alt="page.altText2" width="auto" height="150" class="mb-3">
      <p class="card-title font-weight-bold">{{page.header2}}</p>
      </div>
    <div>
      <img :src="page.image3" :alt="page.altText3" width="auto" height="150" class="mb-3">
      <p class="card-title font-weight-bold">{{page.header3}}</p>
      </div>
    <div>
      <img :src="page.image4" :alt="page.altText4" width="auto" height="150" class="mb-3">
      <p class="card-title font-weight-bold">{{page.header4}}</p>
      </div>
    <div>
      <img :src="page.image5" :alt="page.altText5" width="auto" height="150" class="mb-3">
      <p class="card-title font-weight-bold">{{page.header5}}</p>
      </div>
      </div>
         </article>
    <article class="mobile">
    <div class="mb-md-4 text-center" style="margin: 0px auto;">
      <div class="row justify-content-around" style="margin: 0px auto;">
      <div>
        <img :src="page.image1" :alt="page.altText1" width="auto" height="80" class="mb-3">
        <p class="card-title font-weight-bold">{{page.header1}}</p>
        </div>
      <div>
        <img :src="page.image2" :alt="page.altText2" width="auto" height="80" class="mb-3">
        <p class="card-title font-weight-bold">{{page.header2}}</p>
        </div>
      <div>
        <img :src="page.image3" :alt="page.altText3" width="auto" height="80" class="mb-3">
        <p class="card-title font-weight-bold">{{page.header3}}</p>
        </div>
        </div>
      <div class="row" style="justify-content: space-evenly; margin: 0px auto;">
      <div>
        <img :src="page.image4" :alt="page.altText4" width="auto" height="80" class="mb-3">
        <p class="card-title font-weight-bold">{{page.header4}}</p>
        </div>
      <div>
        <img :src="page.image5" :alt="page.altText5" width="auto" height="80" class="mb-3">
        <p class="card-title font-weight-bold">{{page.header5}}</p>
        </div>
        </div>
      </div>
      </article>
    </div>
  </div>

</template>
<script>
  export default {

    props: ['page'],

  }
</script>

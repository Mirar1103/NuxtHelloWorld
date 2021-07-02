<template>

  <div id="Vorteile" class="section">
    <div class="container">
      <div class="section-title">
        <h2>{{page.title}}</h2>
      </div>
      <div class="row mb-md-4 mx-4">
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image1" :alt="page.altText1" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header1}}</p>
              <p class="card-text">
                {{page.description1}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image2" :alt="page.altText2" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header2}}</p>
              <p class="card-text">
                {{page.description2}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image3" :alt="page.altText3" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header3}}</p>
              <p class="card-text">
                {{page.description3}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image4" :alt="page.altText4" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header4}}</p>
              <p class="card-text">
                {{page.description4}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image5" :alt="page.altText5" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header5}}</p>
              <p class="card-text">
                {{page.description5}}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row mb-4 justify-content-between">
            <div class="pb-3" style="margin: 0px auto;">
              <img :src="page.image6" :alt="page.altText6" width="auto" height="60">
            </div>
            <div class="col-9 text-left" style="margin: 0px auto;">
              <p class="card-title font-weight-bold text-left">{{page.header6}}</p>
              <p class="card-text">
                {{page.description6}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

    props: ['page'],

  }
</script>

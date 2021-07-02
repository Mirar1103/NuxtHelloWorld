<template>

  <div id="Funktionen" class="section text-center light-bg">
    <div class="container">
      <h2 class="jumbotron-heading section-title">{{page.title}}</h2> <div class="row">
        <div class="col-lg-3">
          <img :src="page.image1" alt="Effiziente Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header1}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description1}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image2" alt="individuelle Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header2}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description2}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image3" alt="Kontrolle und Sicherheit" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header3}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description3}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image4" alt="Omnikanale Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header4}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description4}}
          </p>
        </div>
      </div> <div class="row pt-4">
        <div class="col-lg-3">
          <img :src="page.image5" alt="Unabhängiges Arbeiten" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header5}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description5}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image6" alt="Vorlagenverwaltung" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header6}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description6}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image7" alt="Integration" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header7}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description7}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image8" alt="zentrale Formatsteuerung" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header8}}
          </h3> <p class="card-text text-left pt-2">
            {{page.description8}}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {

    props: ['page'],

  }</script>

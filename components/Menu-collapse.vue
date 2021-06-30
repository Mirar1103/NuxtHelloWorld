<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-menu pt-1">

      <a href="/index.html">
        <picture class="btn-pointer">
          <source media="(min-width: 1200px)" srcset="/img/CIB_Logo.svg" height="38" class="btn-pointer" alt="logo">
          <source media="(max-width: 768px)" srcset="/img/CIB_Logo.svg" class="btn-pointer" alt="logo">
          <img src="/img/CIB_Logo.svg" height="38" class="btn-pointer" alt="logo">
        </picture>
      </a>

      <b-button class="nav-link pb-0" v-b-toggle.collapse-1 variant="primary">{{page.title1}}</b-button>
      <b-collapse id="collapse-1" class="dropdown-menu" accordion="menu-accordion">
        <div class="bg-menu">
          <p class="megamenu-title">
            <span class="material-icons material-icons-red"
                  style="font-size: 30px; vertical-align: sub;">{{page.title1}}</span>

          </p>

          <div class="row">
            <div class="col-md-3">
              <div class="col-megamenu">

                <ul class="list-unstyled">
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header1}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description1}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header2}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description2}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header3}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description3}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header4}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description4}}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="col-megamenu">

                <ul class="list-unstyled">
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header5}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description5}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header6}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description6}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <!-- Removed items-->
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="col-megamenu">

                <ul class="list-unstyled">
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header7}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description7}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header8}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description8}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <!-- Removed items-->
                </ul>
              </div>
            </div>
            <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
              <div class="col-megamenu">

                <ul class="list-unstyled">
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header9}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description9}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header10}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description10}}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          {{page.section1.header11}}
                        </p>
                        <p class="megamenu-description">
                          {{page.section1.description11}}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
      <b-button class="nav-link pb-0" v-b-toggle.collapse-2 variant="primary">{{page.title2}}</b-button>
      <b-collapse id="collapse-2" class="dropdown-menu" accordion="menu-accordion">
        <b-card>
          <div>
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">{{page.title2}}</span>
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header1}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description1}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header2}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description2}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header3}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description3}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header4}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description4}}
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header5}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description5}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header6}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description6}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <!-- Removed items-->
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header7}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description7}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header8}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description8}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <!-- Removed items-->
                  </ul>
                </div>
              </div>
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header9}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description9}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header10}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description10}}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.section2.header11}}
                          </p>
                          <p class="megamenu-description">
                            {{page.section2.description11}}
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-collapse>
      <b-button class="nav-link pb-0" v-b-toggle.collapse-lang variant="primary">Language</b-button>
      <b-collapse id="collapse-lang" class="dropdown-menu" accordion="menu-accordion">
        <div class="left self-end">

          <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
            <div class="col-megamenu">

              <ul class="list-unstyled">
                <li v-if="$route.params.lang !== 'en'">

                  <nuxt-link class="text-md ..." :to="{ params: { lang: 'en' } }">EN</nuxt-link>
                </li>
                <li v-if="$route.params.lang !== 'de'">
                  <nuxt-link class="text-md ..." :to="{ params: { lang: 'de' } }">DE</nuxt-link>
                </li>
                <li v-if="$route.params.lang !== 'fr'">
                  <nuxt-link class="text-md ..." :to="{ params: { lang: 'fr' } }">FR</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-collapse>
    </nav>
    <br />
    <Nuxt-child />
  </div>

</template>
<script>
  export default {

    props: ['page'],
    
  }
</script>

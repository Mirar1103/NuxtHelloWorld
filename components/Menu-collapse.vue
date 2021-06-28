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

      <b-button class="nav-link pb-0 red_on_black" v-b-toggle.collapse-1 variant="primary">Solutions</b-button>
      <b-collapse id="collapse-1" class="dropdown-menu" accordion="menu-accordion" >
        <div class="bg-menu">
          <p class="red_on_black">
            <span class="red_on_black"
                  style="font-size: 30px; vertical-align: sub;">title</span>
            
          </p>

          <div class="row">
            <div class="col-md-3">
              <div class="col-megamenu">

                <ul class="list-unstyled">
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Processing
                        </p>
                        <p class="megamenu-description">
                          text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Generation
                        </p>
                        <p class="megamenu-description">
                          text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Receipt
                        </p>
                        <p class="megamenu-description">
                          Text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Archiving
                        </p>
                        <p class="megamenu-description">
                          Text
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
                          Recognition
                        </p>
                        <p class="megamenu-description">
                          Text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Prep
                        </p>
                        <p class="megamenu-description">
                          text
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
                          Display
                        </p>
                        <p class="megamenu-description">
                          Text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Distribution
                        </p>
                        <p class="megamenu-description">
                          Text
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
                          Institutes
                        </p>
                        <p class="megamenu-description">
                          Text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Consultant
                        </p>
                        <p class="megamenu-description">
                          Text
                        </p>
                      </div>
                    </a>
                  </li>
                  <li class="megamenu-field">
                    <a href="#">
                      <div class="p-2">
                        <p class="megamenu-Sub-title">
                          Instituions
                        </p>
                        <p class="megamenu-description">
                          text
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
      <b-button class="nav-link pb-0" v-b-toggle.collapse-2 variant="primary">Products</b-button>
      <b-collapse id="collapse-2" class="dropdown-menu" accordion="menu-accordion">
        <b-card>
          <div>
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">emoji_objects</span>
              title
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Processing
                          </p>
                          <p class="megamenu-description">
                            text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Generation
                          </p>
                          <p class="megamenu-description">
                            text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Receipt
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Archiving
                          </p>
                          <p class="megamenu-description">
                            Text
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
                            Recognition
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Prep
                          </p>
                          <p class="megamenu-description">
                            text
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
                            Display
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Distribution
                          </p>
                          <p class="megamenu-description">
                            Text
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
                            Institutes
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Consultant
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Instituions
                          </p>
                          <p class="megamenu-description">
                            text
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

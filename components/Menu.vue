<template>

  <!-- Nav Menu -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-menu pt-1">

    <a href="/index.html">
      <picture class="btn-pointer">
        <source media="(min-width: 1200px)" srcset="/img/CIB_Logo.svg" height="38" class="btn-pointer" alt="logo">
        <source media="(max-width: 768px)" srcset="/img/CIB_Logo.svg" class="btn-pointer" alt="logo">
        <img src="/img/CIB_Logo.svg" height="38" class="btn-pointer" alt="logo">
      </picture>
    </a>

    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="icon-bar top-bar"></span>
      <span class="icon-bar middle-bar"></span>
      <span class="icon-bar bottom-bar"></span>
    </button>

    <div class="collapse navbar-collapse menu" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto pl-3">
        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="Solutions">
            {{page.title1}}
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">emoji_objects</span>
              {{page.title1}}
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            {{page.header1}}
                          </p>
                          <p class="megamenu-description">
                            {{page.description1}}
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
        </li>

        <!-- Products -->
        <!--onClick="gtag('event', 'action', {'event_category': 'Produkte-menu', 'event_label': 'Produkte','value': 'value'});"-->
        <li class="nav-item dropdown has-megamenu hr">
          <b-button :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    aria-controls="collapse-4"
                    @click="visible = !visible">Toggle Collapse</b-button>
          <b-collapse visible id="collapse-3">

            <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
              <p class="megamenu-title">
                <span class="material-icons material-icons-red"
                      style="font-size: 30px; vertical-align: sub;">dashboard</span>
                Title
              </p>

              <div class="row">
                <div class="col-md-4">
                  <div class="col-megamenu">

                    <ul class="list-unstyled">
                      <li class="megamenu-field">
                        <a href="#">
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/img/CIB_coSys.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              CoSys
                            </p>
                          </div>
                        </a>
                      </li>

                      <li class="megamenu-field">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <img src="/images/product/CIB_pdf_brewer.svg" height="30">
                          </p>
                          <p class="megamenu-description">
                            Brewer
                          </p>
                        </div>
                      </li>

                      <li class="megamenu-field">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <img src="/images/product/CIB_fluXkomprimator.svg" height="30">
                          </p>
                          <p class="megamenu-description">
                            Flux
                          </p>
                        </div>
                      </li>

                      <li class="megamenu-field">
                        <a href=''>
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/images/product/CIB_fairBrieft.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              FairBrieft
                            </p>
                          </div>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
                <div class="col-md-4 p-0">
                  <div class="col-megamenu">

                    <ul class="list-unstyled">
                      <li class="megamenu-field">
                        <a href=''>
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/images/product/CIB_doXiview.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              doXieview
                            </p>
                          </div>
                        </a>
                      </li>

                      <li class="megamenu-field">
                        <a href=''>
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/images/product/CIB_doXigate.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              DoxiGate
                            </p>
                          </div>
                        </a>
                      </li>

                      <li class="megamenu-field">
                        <a href=''>
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/images/product/CIB_doXisafe.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              doXieSafe
                            </p>
                          </div>
                        </a>
                      </li>

                      <!-- Removed items-->

                    </ul>
                  </div>
                </div>
                <div class="col-md-4 p-0">
                  <div class="col-megamenu">

                    <ul class="list-unstyled">

                      <li class="megamenu-field">
                        <a href=''>
                          <div class="p-2">
                            <p class="megamenu-Sub-title">
                              <img src="/images/product/CIB_kanzlei_app.svg" height="30">
                            </p>
                            <p class="megamenu-description">
                              KanzleiApp
                            </p>
                          </div>
                        </a>
                      </li>

                      <!-- Removed items-->

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </b-collapse>
        </li>

        <!-- CIB consulting -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="CIB consulting">
            Consulting
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">miscellaneous_services</span>
              Title
            </p>

            <div class="row">

              <div class="col-md-3">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <b> Intro</b>
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">thumb_up_alt</span>
                            <b> Credentials</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">miscellaneous_services</span>
                            <b> Development</b>
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">miscellaneous_services</span>
                            <b> ProjectSupport</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">miscellaneous_services</span>
                            <b> OutSourcing</b>
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">miscellaneous_services</span>
                            <b> JOBexchnage_Experts</b>
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

              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Support -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="Service">
            Service
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">support_agent</span>
              CIB Support
            </p>

            <div class="row">

              <div class="col-md-3">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <b> Support</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">build</span>
                            <b> Maintenance</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">thumb_up_alt</span>
                            <b> Credentials</b>
                          </p>
                          <p class="megamenu-description">
                            text
                          </p>
                        </div>
                      </a>
                    </li>
                    <!--<li class="megamenu-field">
                        <a href="#">
                            <div class="p-2">
                                <p class="megamenu-Sub-title">
                                    <span class="material-icons material-icons-red"
                                        style="vertical-align: sub;">contact_support</span>
                                    <b> {{T "menuSupport_INQUIRY"}}</b></p>
                                <p class="megamenu-description">
                                    {{T "menuSupport_INQUIRYText"}}</p>
                            </div>
                        </a>
                    </li>-->
                  </ul>
                </div>
              </div>

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">


                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="https://elearning.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">cast_for_education</span>
                            eLearning
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">grading</span>
                            <b> Dokumentationen</b>
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <!--<li class="megamenu-field">
                        <a href="#">
                            <div class="p-2">
                                <p class="megamenu-Sub-title">
                                    <span class="material-icons material-icons-red"
                                        style="vertical-align: sub;">assignment</span>
                                    <b> {{T "menuSupport_FAQ"}}</b></p>
                                <p class="megamenu-description">
                                    {{T "menuSupport_FAQText"}}</p>
                            </div>
                        </a>
                    </li>-->
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">support_agent</span>
                            <b> HOTLINE</b>
                          </p>
                          <p class="megamenu-description">
                            Support
                          </p>
                          <p class="megamenu-Sub-title">
                            Hotline
                          </p>
                          <p class="megamenu-Sub-title">
                            Email
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Beratung -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="Adviser">
            Adviser
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">support_agent</span>
              Title
            </p>

            <div class="row">

              <div class="col-md-3">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <b> IntroTitle</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">miscellaneous_services</span>
                            <b> Migration</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">vertical_split</span>
                            <b> TemplateServie</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">spa</span>
                            ProjectSupport
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">
                              school
                            </span>
                            SeminarsTraining
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


              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">
                              school
                            </span>
                            AdviceOffer
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
            </div>
          </div>
        </li>

        <!-- F&E -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="Projects">
            Projects
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">biotech</span>
              Title
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Intro
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            PoP
                          </p>
                          <p class="megamenu-description">
                            text
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            hilano
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="http://crowdsource-test:8080/crowdsource/#/home">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            crowdsource
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="https://deeper.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            DeepER
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            More
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

              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Jobboerse -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="Job börse">
            Career
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">extension</span>
              Title
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            Jobboerse
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
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">person_pin</span>
                            Student
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">person_pin</span>
                            Students
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">person_pin</span>
                            Experienced
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href="https://www.ciblabs.es/talento/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            in Spain
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
              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">person_pin</span>
                            Changers
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="">

                      <section>
                        <div class="container mt-0 text-left">
                          <div class="row justify-content-left">
                            <div class="col-md-5 col-lg-8">
                              <p class="megamenu-description">
                                Contact
                              </p>
                              <label class="sr-only"
                                     for="input1-signin-01">Name</label>
                              <input class="form-control my-3 bg-light" id="input1-signin-01"
                                     type="text" placeholder='name_'>
                              <label class="sr-only"
                                     for="input2-signin-01">Email</label>
                              <input class="form-control my-3 bg-light" id="input2-signin-01"
                                     type="email" placeholder='mail'>
                              <label class="sr-only"
                                     for="input2-signin-01">Message</label>
                              <div class="file-input pl-0">
                                <input type="file" name="file[]" id="file" accept=".pdf"
                                       multiple />

                                <span class="button">SelectedFiles</span>
                                <br />
                                <label class="label" id="selected-files"
                                       data-js-label>No files</label>

                              </div>

                              <a class="btn btn-CTA1"
                                 href='' target="_blank">
                                Send
                              </a>
                              <p class="pt-1 megamenu-description"
                                 style="font-size: 10px!important;">
                                SubText
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                    </li>

                  </ul>

                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- About Us -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="About Us">
            Companies
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">apartment</span>
              About Us
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href='#'>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <b> Guideline}</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">person_pin</span>
                            <b> History</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">thumb_up_alt</span>
                            <b> Credentials</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">supervisor_account</span>
                            <b> Membership</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">add_location_alt</span>
                            <b> MediaCenter</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">date_range</span>
                            <b>Termin</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="#">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">supervised_user_circle</span>
                            <b> Sponsoring</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">accessibility_new</span>
                            <b> Social Engagement</b>
                          </p>
                          <p class="megamenu-description">
                            text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href=''>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">masks</span>
                            <b> AntiVirus Program</b>
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
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">support</span>
                            <b> Action</b>
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
                            <img class="" width="30" style="vertical-align: sub;" src="/img/fourmi.svg">
                            <b> Fourmi</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="">

                      <section>
                        <div class="container text-left">
                          <div class="row justify-content-left">
                            <div class="col-md-5 col-lg-8">
                              <p class="megamenu-Sub-title">
                                <span class="material-icons material-icons-red"
                                      style="vertical-align: sub;">how_to_reg</span>
                                <b> Contact</b>
                              </p>
                              <p class="megamenu-description">
                                Text
                              </p>
                              <label class="sr-only"
                                     for="input1-signin-01">Name</label>
                              <input class="form-control my-3 bg-light" id="input1-signin-01"
                                     type="text" placeholder='name'>
                              <label class="sr-only"
                                     for="input2-signin-01">E mail</label>
                              <input class="form-control my-3 bg-light" id="input2-signin-01"
                                     type="email" placeholder='mail'>
                              <label class="sr-only"
                                     for="input2-signin-01">Message</label>
                              <input class="form-control my-3 bg-light" id="input2-signin-01"
                                     type="text" placeholder='Message'>
                              <a class="btn btn-CTA1"
                                 href='' target="_blank">
                                Send
                              </a>
                              <p class="pt-1 megamenu-description"
                                 style="font-size: 10px!important;">
                                Text
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Blog -->

        <li class="nav-item dropdown has-megamenu hr">
          <a class="nav-link pb-0" data-toggle="dropdown"
             href="CIB blog">
            Blog
          </a>
          <div class="dropdown-menu megamenu-dropdown-menu megamenu" role="menu">
            <p class="megamenu-title">
              <span class="material-icons material-icons-red"
                    style="font-size: 30px; vertical-align: sub;">rss_feed</span>
              text
            </p>

            <div class="row">
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">

                    <li class="megamenu-field">
                      <a href='#'>
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <b> Title</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="https://blog.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b> CIBblog</b>
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="https://azubiblog.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b> azubiBlog</b>
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="http://homealone.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b> HoemaloneBlog</b>
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

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">
                  <ul class="list-unstyled">
                    <li class="megamenu-field">
                      <a href="https://iotblog.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b>IoTBlog</b>
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="https://pdfbrewerblog.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b> PDFbrewerblog</b>
                          </p>
                          <p class="megamenu-description">
                            Text
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="megamenu-field">
                      <a href="https://devblog.cib.de/">
                        <div class="p-2">
                          <p class="megamenu-Sub-title">
                            <span class="material-icons material-icons-red"
                                  style="vertical-align: sub;">rss_feed</span>
                            <b> devblog</b>
                          </p>
                          <p class="megamenu-description">
                            devblogText
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3" style="border-left: 1px solid #e1e7ec;">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                    <li class="">

                      <section>
                        <div class="container text-left">
                          <div class="row justify-content-left">
                            <div class="col-md-5 col-lg-8">
                              <p class="megamenu-Sub-title">
                                <span class="material-icons material-icons-red"
                                      style="vertical-align: sub;">how_to_reg</span>
                                <b> Reg</b>
                              </p>
                              <p class="megamenu-description">
                                Text
                              </p>
                              <label class="sr-only" for="input1-signin-01">Email</label>
                              <input class="form-control my-3 bg-light" id="input1-signin-01"
                                     type="email" placeholder="Email">
                              <label class="sr-only" for="input2-signin-01">Password</label>
                              <input class="form-control my-3 bg-light" id="input2-signin-01"
                                     type="password" placeholder="Password">
                              <a class="btn btn-CTA1"
                                 href='' target="_blank">
                                RegButton
                              </a>
                              <p class="pt-1 megamenu-description"
                                 style="font-size: 10px!important;">
                                Text
                              </p>
                            </div>
                          </div>
                        </div>
                      </section>

                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="col-megamenu">

                  <ul class="list-unstyled">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <!-- Button -->

        <div class="navbar-collapse" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item center">
              <a class="btn btn-CTA1"
                 href='' target="_blank">
                <img src="/img/icon_cib_cash_white.svg" style="vertical-align: sub;" class="img-fluid pr-2"
                     height="18">
              </a>
            </li>
          </ul>
        </div>

        <li class="nav-item dropdown">
          <a class="nav-link" href="index.html" id="navbarDropdownMenuLink" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <span class="material-icons" style="vertical-align: middle;">language</span>
          </a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <ul class="flex lang-switch justify-around">
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
            <!-- Level two dropdown
            <div class="dropdown-submenu">
                <a class="dropdown-item" tabindex="-1" href="#">{{T "menuchoose_country"}}</a>
                <ul class="dropdown-menu dropdown-menu-right">
                    <li class="dropdown-item"><a href="#">{{T "menu_country_germany"}}</a></li>
                    <li class="dropdown-item"><a href="#">{{T "menu_country_spain"}}</a></li>
                </ul>
            </div> -->
          </div>
        </li>
        <
      </ul>
    </div>

  </nav>

</template>
<script>
  export default {
    data() {
      return {
        visible: true
      }
    },
    async asyncData({ $content, params, redirect }) {
      return await $content('menu/' + `${params.lang}/header_text`).fetch().then((page) => {
        return {
          page
        }
      }, (error) => {
        console.log(error)
        redirect({ params: { lang: 'en' } })
      })
    },
  }
</script>

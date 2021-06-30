<template>

  <div id="Links" class="bg-color-page section-last section-mobile footer-text">
    <div class="container d-none d-md-block">
      <div class="row mb-5">
        <div class="col">
          <span class="footer-text-title">{{page.column1.section1.header}}</span>
        <ul class="custom-list-footer">
          <li>
            <a :href = "page.column1.section1.link1">{{page.column1.section1.name1}}</a>
            </li>
          <li>
            <a :href="page.column1.section1.link2">{{page.column1.section1.name2}}</a>
            </li>
          </ul>
        <span class="footer-text-title">{{page.column1.section2.header}}</span>
        <ul class="custom-list-footer">
            <li>
              <a :href="page.column1.section2.link1" target="_blank">{{page.column1.section2.name1}}</a>
            </li>
            <li>
              <a :href="page.column1.section2.link2" target="_blank">
                {{page.column1.section2.name2}}
              </a>
            </li>
            <li><a :href="page.column1.section2.link3" target="_blank">{{page.column1.section2.name3}}</a></li>
          </ul>
        </div> <div class="col">
                 <span class="footer-text-title">{{page.column2.header}}</span> <ul class="custom-list-footer">
            <li><a :href="page.column2.link1" target="_blank">{{page.column2.name1}}</a></li>
            <li><a :href="page.column2.link2" target="_blank">{{page.column2.name2}}</a></li>
            <li><a :href="page.column2.link3" target="_blank">{{page.column2.name3}}</a></li>
            <li><a :href="page.column2.link4" target="_blank">{{page.column2.name4}}</a></li>
            <li><a :href="page.column2.link5" target="_blank">{{page.column2.name5}}</a></li>
            <li><a :href="page.column2.link6" target="_blank">{{page.column2.name6}}</a></li>
            <li><a :href="page.column2.link7" target="_blank">{{page.column2.name7}}</a></li>
            <li><a :href="page.column2.link8" target="_blank">{{page.column2.name8}}</a></li>
            <li><a :href="page.column2.link9" target="_blank">{{page.column2.name9}}</a></li>
            <li>
              <a :href="page.column2.link10" target="_blank">
                {{page.column2.name10}}
              </a>
            </li>
            <li><a :href="page.column2.link11" target="_blank">{{page.column2.name11}}</a></li>
            <li>
              <a :href="page.column2.link12" target="_blank">
                {{page.column2.name12}}
              </a>
            </li>
            <li>
              <a :href="page.column2.link13" target="_blank">
                {{page.column2.name13}}
              </a>
            </li>
          </ul>
        </div> <div class="col">
                 <span class="footer-text-title">{{page.column3.section1.header}}</span>
          <ul class="custom-list-footer">
            <li>
              <a :href="page.column3.section1.link1" target="_blank">{{page.column3.section1.name1}}</a>
            </li>
            <li>
              <a :href="page.column3.section1.link2" target="_blank">{{page.column3.section1.name2}}</a>
            </li>
            <li>
              <a :href="page.column3.section1.link3" target="_blank">{{page.column3.section1.name3}}</a>
            </li>
            <li>
              <a :href="page.column3.section1.link4" target="_blank">{{page.column3.section1.name4}}</a>
            </li>
            <li>
              <a :href="page.column3.section1.link5" target="_blank">{{page.column3.section1.name5}}</a>
            </li>
            <li>
              <a :href="page.column3.section1.link6" target="_blank">{{page.column3.section1.name6}}</a>
            </li>
          </ul>
          <span class="footer-text-title mt-5">{{page.column3.section2.header}}</span>
          <ul class="custom-list-footer">
            <li>{{page.column3.section2.contactTimes}}</li>
            <li>
              <a :href="page.column3.section2.numberHref">{{page.column3.section2.number}}</a>
            </li>
            <li>
              <a :href="page.column3.section2.mailHref">
                {{page.column3.section2.mail}}
              </a>
            </li>
          </ul>
          <span class="footer-text-title mt-5">{{page.column3.section3.header}}</span>
          <ul class="custom-list-footer">
            <li>
              <a :href="page.column3.section3.link1" target="_blank">{{page.column3.section3.name1}}</a>
            </li>
            <li>
              <a :href="page.column3.section3.link2" target="_blank">{{page.column3.section3.name2}}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="row justify-content-end">
            <a href="https://www.cib.de/de/startseite.html" title="cib.de" target="_blank">
              <img src="~/static/img/CIB_Logo.svg" height="50" width="auto" alt="logo" class="img-fluid footer-icon-cib">
            </a>
          </div>
          <div class="row mt-4 justify-content-end">
            <span class="social-links mr-1">
              <a href="https://twitter.com/CIBsoftwareGmbH" title="Twitter" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="mdi-twitter" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor">
                  </path>
                </svg>
              </a>
            </span>
            <span class="social-links mr-1">
              <a href="https://www.youtube.com/user/CIBSoftwareGmbH" title="YouTube" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="mdi-youtube" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z" fill="currentColor">
                  </path>
                </svg>
              </a>
            </span>
            <span class="social-links mr-1">
              <a href="https://www.linkedin.com/company/cib/" title="LinkedIn" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="cib:linkedin-in" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                  <path d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z" fill="currentColor">
                  </path>
                </svg>
              </a>
            </span>
            <span class="social-links">
              <a href="https://www.xing.com/companies/cibunternehmensgruppe" title="Xing" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="cib-xing" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                  <path d="M24.25 0c-.688 0-.99.432-1.234.88c0 0-9.943 17.63-10.271 18.208c.021.031 6.557 12.031 6.557 12.031c.229.411.583.88 1.292.88h4.604c.281 0 .5-.104.62-.292c.115-.203.115-.464-.016-.719l-6.505-11.885a.034.034 0 0 1 0-.031L29.521 1.009c.125-.255.125-.521.005-.714s-.333-.297-.609-.297zM4.865 6.318c-.281 0-.516.099-.63.292c-.12.198-.104.453.026.708l3.12 5.396c.005.016.005.026 0 .031L2.48 21.401c-.13.25-.125.51 0 .703c.115.193.318.313.599.313h4.615c.693 0 1.021-.464 1.26-.885l4.979-8.813l-3.172-5.542c-.229-.422-.578-.88-1.281-.88H4.865z" fill="currentColor">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-color-page container d-md-none">
      <div class="row ml-2">
        <ul class="custom-list-footer footer-list-mobile">
          <li>
            <a data-toggle="collapse" data-target="#beratung" href="#">
              <span class="footer-text-title">Beratung und Lizensierung</span>
            </a>
            <div id="beratung" class="collapse">
              <ul class="custom-list-footer">
                <li>
                  <a href="+49 89 143 60 - 300">+49 89 143 60 - 300</a>
                </li>
                <li>
                  <a href="mailto:produktberatung@cib.de">produktberatung@cib.de</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" data-target="#cosys" href="#">
              <span class="footer-text-title">Services</span>
            </a>
            <div id="cosys" class="collapse">
              <ul class="custom-list-footer">
                <li>
                  <a href="https://flow.cib.de/" target="_blank">CIB flow</a>
                </li>
                <li>
                  <a href="https://www.cib.de/de/berater/vorlagen-service.html" target="_blank">CIB Vorlagenservice</a>
                </li>
                <li>
                  <a href="https://www.cib.de/de/berater.html" target="_blank">CIB Berater</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" data-target="#komplettloesungen" href="#">
              <span class="footer-text-title">CIB Lösungen</span>
            </a>
            <div id="komplettloesungen" class="collapse">
              <ul class="custom-list-footer">
                <li><a href="https://cosys.cib.de/" target="_blank">CIB coSys</a></li>
                <li><a href="https://www.doxisafe.me/" target="_blank">CIB doXisafe</a></li>
                <li><a href="https://doxigate.cib.de/" target="_blank">CIB doXigate</a></li>
                <li><a href="https://doxiview.cib.de/showcase/" target="_blank">CIB doXiview</a></li>
                <li><a href="https://doxisign.cib.de/" target="_blank">CIB doXisign</a></li>
                <li><a href="https://einvoice.cib.de/" target="_blank">CIB eInvoice</a></li>
                <li><a href="https://pdfbrewer.cib.de/" target="_blank">CIB pdf brewer</a></li>
                <li><a href="https://kanzlei-app.cib.de/" target="_blank">CIB kanzlei app</a></li>
                <li><a href="https://fairbrieft.cib.de/" target="_blank">CIB fairBrieft</a></li>
                <li><a href="https://fluxkomprimator.cib.de" target="_blank">CIB fluXkomprimator</a></li>
                <li><a href="https://deeper.cib.de/" target="_blank">CIB deepER</a></li>
                <li><a href="https://www.cib.de/de/produkte/cib-zugferd-sdk.html" target="_blank">CIB ZUGFeRD SDK</a></li>
                <li>
                  <a href="https://libreoffice.cib.de/" target="_blank">
                    LibreOffice powered by
                    CIB
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" data-target="#unternehmen" href="#">
              <span class="footer-text-title">Unternehmen</span>
            </a>
            <div id="unternehmen" class="collapse">
              <ul class="custom-list-footer">
                <li>
                  <a href="https://www.cib.de/de/startseite.html" target="_blank">CIB.de</a>
                </li>
                <li>
                  <a href="https://cash.cib.de" target="_blank">CIB cash</a>
                </li>
                <li>
                  <a href="https://karriere.cib.de" target="_blank">CIB karriere</a>
                </li>
                <li>
                  <a href="https://blog.cib.de/" target="_blank">CIB blog</a>
                </li>
                <li>
                  <a href="https://ciblabs.es" target="_blank">CIB in Spain</a>
                </li>
                <li>
                  <a href="https://corona.cib.de/" target="_blank">CIB antivirus</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" data-target="#support" href="#">
              <span class="footer-text-title">CIB Support</span>
            </a>
            <div id="support" class="collapse">
              <ul class="custom-list-footer">
                <li>Mo-Fr 8:00 - 19:00</li>
                <li>
                  <a href="tel:+34828128820">+49 89 143 60 - 111</a>
                </li>
                <li>
                  <a href="mailto:cibsupport@cib.de">
                    cibsupport@cib.de
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" data-target="#scanner" href="#">
              <span class="footer-text-title mt-5">CIB Scannerbox</span>
            </a>
            <div id="scanner" class="collapse">
              <ul class="custom-list-footer">
                <li>
                  <a href="https://doxicrate.cib.de/" target="_blank">CIB doXicrate</a>
                </li>
                <li>
                  <a href="https://doxibox.cib.de/" target="_blank">CIB doXibox</a>
                </li>
              </ul>
            </div>
          </li>
          <div class="row d-flex align-items-end justify-content-center mt-4 mb-5">
            <div class="mr-2 order-2 order-lg-2 pl-3">
              <a href="https://www.cib.de/de/startseite.html" title="cib.de" target="_blank">
                <img src="~/static/img/CIB_Logo.svg" height="50"  alt="logo" class="img-fluid footer-icon-cib">
              </a>
            </div> <div class="order-1 order-lg-1">
              <span class="social-links mr-1">
                <a href="https://twitter.com/CIBsoftwareGmbH" title="Twitter" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="mdi-twitter" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor">
                    </path>
                  </svg>
                </a>
              </span>
              <span class="social-links mr-1">
                <a href="https://www.youtube.com/user/CIBSoftwareGmbH" title="YouTube" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="mdi-youtube" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z" fill="currentColor">
                    </path>
                  </svg>
                </a>
              </span>
              <span class="social-links mr-1">
                <a href="https://www.linkedin.com/company/cib/" title="LinkedIn" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="cib:linkedin-in" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                    <path d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z" fill="currentColor">
                    </path>
                  </svg>
                </a>
              </span>
              <span class="social-links">
                <a href="https://www.xing.com/companies/cibunternehmensgruppe" title="Xing" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="cib-xing" data-inline="false" class="iconify" style="transform: rotate(360deg);">
                    <path d="M24.25 0c-.688 0-.99.432-1.234.88c0 0-9.943 17.63-10.271 18.208c.021.031 6.557 12.031 6.557 12.031c.229.411.583.88 1.292.88h4.604c.281 0 .5-.104.62-.292c.115-.203.115-.464-.016-.719l-6.505-11.885a.034.034 0 0 1 0-.031L29.521 1.009c.125-.255.125-.521.005-.714s-.333-.297-.609-.297zM4.865 6.318c-.281 0-.516.099-.63.292c-.12.198-.104.453.026.708l3.12 5.396c.005.016.005.026 0 .031L2.48 21.401c-.13.25-.125.51 0 .703c.115.193.318.313.599.313h4.615c.693 0 1.021-.464 1.26-.885l4.979-8.813l-3.172-5.542c-.229-.422-.578-.88-1.281-.88H4.865z" fill="currentColor">
                    </path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </ul>
      </div>
    </div> <div class="bg-color footer-copyright py-5 text-center">
      <a href="https://www.cib.de/de/startseite.html" target="_blank" class="col copyrigth-text-link px-2">cib.de</a>
      <a href="#" id="cookiesBtn" onclick="buttonCookies()" data-backdrop="static" data-keyboard="false" class="col copyrigth-text-link px-2">Cookies</a>
      <a href="https://www.doxisafe.me/#/safe/retrieve/eagb" target="_blank" class="col copyrigth-text-link px-2">AGB</a>
      <a href="https://www.cib.de/de/datenschutz.html" target="_blank" class="col copyrigth-text-link px-2">Datenschutz</a>
      <a href="https://www.cib.de/de/impressum.html" target="_blank" class="col copyrigth-text-link px-2">Impressum</a>
      <br>
      <br>
      <a class="copyrigth-text">Ⓒ CIB, 2021</a>
    </div>
    <a id="back-to-top" href="#" role="button" data-placement="left" class="btn btn-toTop btn-outline-toTop back-to-top" style="display: inline;">
      <span class="material-icons">publish</span>
    </a>
  </div>

</template>
<script>
  export default {

    props: ['page'],

  }
</script>

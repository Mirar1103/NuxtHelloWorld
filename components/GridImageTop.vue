<template>

  <div id="Funktionen" class="section text-center light-bg">
    <div class="container">
      <h2 class="jumbotron-heading section-title">{{page.title}}</h2> <div class="row">
        <div class="col-lg-3">
          <img src="~/static/img/Effiziente_Kommunikationsprozesse_illu.svg" alt="Effiziente Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            {{page.header1}}
          </h3> <p class="card-text text-left pt-2 mb-6">
            {{page.description1}}
          </p>
        </div> <div class="col-lg-3">
          <img :src="page.image2" alt="individuelle Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Personalisierte Kommunikation
          </h3> <p class="card-text text-left pt-2 mb-6">
            Sprechen Sie Ihre Kunden gezielt an. Mit individuellen und automatisiert erzeugten Korrespondenzen verbessern Sie ihre Kommunikation und erhöhen die Kundenzufriedenheit.
          </p>
        </div> <div class="col-lg-3">
          <img src="~/static/img//Geführte Kontrolle_und_Sicherheit_illu.svg" alt="Kontrolle und Sicherheit" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Kontrolle und Sicherheit
          </h3> <p class="card-text text-left pt-2 mb-6">
            Je nach Korrespondenz können Dokument-Freigabeworkflows aktiviert und Grafiken eingefügt werden. Dadurch behalten Sie den Überblick und erhöhen Sicherheit und Qualität.
          </p>
        </div> <div class="col-lg-3">
          <img src="~/static/img//Omnikanale_Kommunikation_illu.svg" alt="Omnikanale Kommunikation" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Omnikanale Kommunikation
          </h3> <p class="card-text text-left pt-2 mb-6">
            Kunden und Geschäftspartner werden über den gewünschten Kommunikationskanal kontaktiert, ganz egal ob gedruckt oder digital.
          </p>
        </div>
      </div> <div class="row pt-4">
        <div class="col-lg-3">
          <img src="~/static/img//Unabhängiges_Arbeiten_Mitarbeiter_illu.svg" alt="Unabhängiges Arbeiten" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Unabhängiges Arbeiten
          </h3> <p class="card-text text-left pt-2 mb-6">
            CIB coSys lässt sich von überall nutzen: Natürlich auch im Home-Office und Außendienst. Verzichten Sie auf teure, zusätzliche Software am Arbeitsplatz!
          </p>
        </div> <div class="col-lg-3">
          <img src="~/static/img//Effiziente_Vorlagenverwaltung_illu.svg" alt="Vorlagenverwaltung" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Effiziente Vorlagenverwaltung
          </h3> <p class="card-text text-left pt-2 mb-6">
            Gesetzeskonforme Vorlagen ohne Programmierkenntnisse erstellen und pflegen. Änderungen am Vorlagenbestand lassen sich jederzeit nachvollziehen.
          </p>
        </div> <div class="col-lg-3">
          <img src="~/static/img//Volle_Integration_illu.svg" alt="Integration" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Volle Integration
          </h3> <p class="card-text text-left pt-2 mb-6">
            CIB coSys lässt sich leicht in Ihre bestehende Architektur integrieren. Die Anbindung erfolgt über standardisierte Webservices.
          </p>
        </div> <div class="col-lg-3">
          <img src="~/static/img//Alle Ausgabeformate_zentral_gesteuert_illu.svg" alt="zentrale Formatsteuerung" width="340" height="200" class="img-fluid"> <h3 class="text-left card-title font-weight-bold pt-3" style="line-height: 1.2;">
            Alle Ausgabeformate zentral gesteuert
          </h3> <p class="card-text text-left pt-2">
            Ob barrierefreie oder archivtaugliche PDF-Dokumente - bei der Erzeugung des Dokuments entscheiden Sie über das Format.
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>export default {

    props: ['page'],

  }</script>

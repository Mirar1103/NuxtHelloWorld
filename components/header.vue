<template>
  <header class="topnav h-54px p-2 border-b-2 border-gray-200">
      <div class="left self-end">

          <ul class="flex lang-switch justify-around">
            <li v-if="$i18n.locale !== 'en'">
              <nuxt-link class="text-md ..." :to="switchLocalePath('en')">EN</nuxt-link>
            </li>
            <li v-if="$i18n.locale !== 'es'">
              <nuxt-link class="text-md ..." :to="switchLocalePath('de')">DE</nuxt-link>
            </li>
            <li v-if="$i18n.locale !== 'fr'">
              <nuxt-link class="text-md ..." :to="switchLocalePath('fr')">FR</nuxt-link>
            </li>
          </ul>

        
      </div>
      <div>
        <NuxtLink to="/">
          index
        </NuxtLink>
      </div>
  </header>
</template>

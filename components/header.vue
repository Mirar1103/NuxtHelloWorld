<template>
  <header class="topnav h-54px p-2 border-b-2 border-gray-200">
      <div class="left self-end">

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

        
      </div>
      <div>
        <NuxtLink to="/start">
          index
        </NuxtLink>
      </div>
  </header>
</template>


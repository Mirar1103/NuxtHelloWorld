import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '~/pages/_lang/index'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions, config) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: fixRoutes(options.routes)
  })
}

function fixRoutes(defaultRoutes) {
  // default routes that come from `pages/`
  return defaultRoutes;
}

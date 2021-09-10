// import node_modules
import Vue from 'vue'

// Vue.extend
export const everyPagePre = Vue.extend({
  computed: {
    identifiers() {
      return ['PagePre']
    },
    identifier() {
      return (this as any).identifiers.join('/')
    },
  },
})

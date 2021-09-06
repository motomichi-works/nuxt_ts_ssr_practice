// import node_modules
import Vue from 'vue'

// Vue.extend
export const everyPagePresentational = Vue.extend({
  computed: {
    identifiers() {
      return ['PagePresentational']
    },
    joinedIdentifiers() {
      return (this as any).identifiers.join('/')
    },
  },
})

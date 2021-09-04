// import node_modules
import Vue from 'vue'

// Vue.extend
export const everyLayout = Vue.extend({
  computed: {
    identifiers() {
      return ['Layout']
    },
    joinedIdentifiers() {
      return (this as any).identifiers.join('/')
    },
  },
})

// import node_modules
import Vue from 'vue'

// Vue.extend
export const everyPagePre = Vue.extend({
  computed: {
    identifier() {
      return 'PagePre'
    },
  },
})

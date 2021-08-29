<template>
  <PagePresentational0001 page-heading-text="トップページ">
    <div>
      <ul>
        <li><NuxtLink to="/qiita_items/">qiita_items/index</NuxtLink></li>
        <li><NuxtLink to="/styleguides/">styleguides/index</NuxtLink></li>
      </ul>
    </div>
  </PagePresentational0001>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/organisms
import PagePresentational0001 from '~/components/pages/page_presentational_0001/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePresentational0001,
  },
})
</script>

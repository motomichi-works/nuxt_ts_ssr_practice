<template>
  <PagePreGeneralPurpose0001 page-heading-text="index">
    <List0002
      :identifiers="['Nav']"
      :items="[
        [
          {
            tagName: 'NuxtLink',
            text: 'styleguides/index',
            to: '/styleguides/',
            className: '',
          },
        ],
        [
          {
            tagName: 'NuxtLink',
            text: 'qiita_items/index',
            to: '/qiita_items/',
            className: '',
          },
        ],
      ]"
    />
  </PagePreGeneralPurpose0001>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/orgs
import PagePreGeneralPurpose0001 from '~/components/common/page_presentationals/page_pre_general_purpose_0001.vue'
import List0002 from '~/components/common/molecules_and_atoms/list_0002.vue'

// Vue.extend
export default Vue.extend({
  components: {
    PagePreGeneralPurpose0001,
    List0002,
  },
})
</script>

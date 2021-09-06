<template>
  <OrgPresentational0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="List0002"
  >
    <List0002
      :identifiers="[...identifiers, 'List0002']"
      :items="[
        [
          {
            tagName: 'span',
            text: 'spanタグを入れたい場合',
            className: '付与したいクラス名を半角スペース区切りで',
          },
        ],
        [
          {
            tagName: 'NuxtLink',
            text: 'NuxtLinkタグを入れたい場合/',
            className: '付与したいクラス名を半角スペース区切りで',
            to: '#',
          },
          {
            tagName: 'a',
            text: 'aタグを入れたい場合/',
            className: '付与したいクラス名を半角スペース区切りで',
            href: '#',
            isTargetBlank: true,
          },
          {
            tagName: 'span',
            text: 'spanタグを入れたい場合',
            className: '付与したいクラス名を半角スペース区切りで',
          },
          {
            tagName: 'div',
            text: 'divタグを入れたい場合',
            className: '付与したいクラス名を半角スペース区切りで',
          },
        ],
      ]"
    />
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/common/org_presentationals/org_presentational_0001.vue'

// import components/molecules_and_atoms
import List0002 from '~/components/common/molecules_and_atoms/list_0002.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgList0002Showcase',
  components: {
    OrgPresentational0001,
    List0002,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>

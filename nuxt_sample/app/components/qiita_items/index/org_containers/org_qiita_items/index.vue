<template>
  <OrgPresentational0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="qiitaのAPIから取得したitem情報のサンプル"
  >
    <ul v-if="qiitaItems.length > 0">
      <li
        v-for="(item, index) in qiitaItems"
        :key="`item.created_at__${index}`"
      >
        <p v-if="item.created_at">
          {{ item.created_at }}
        </p>
      </li>
    </ul>
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/common/org_presentationals/org_presentational_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgQiitaItems',
  components: {
    OrgPresentational0001,
  },
  mixins: [everyChild],
  props: {
    qiitaItems: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>
<style lang="scss" scoped></style>

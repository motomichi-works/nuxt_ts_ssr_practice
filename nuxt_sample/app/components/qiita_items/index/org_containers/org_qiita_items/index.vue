<template>
  <OrgPresentational0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="qiitaのAPIから取得したitem情報のサンプル"
  >
    <List0001
      v-if="createdAtItems.length > 0"
      :identifiers="[...identifiers, 'CreatedAtList']"
      :items="createdAtItems"
    />
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/common/org_presentationals/org_presentational_0001/index.vue'
import List0001 from '~/components/common/molecules_and_atoms/list_0001/index.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgQiitaItems',
  components: {
    OrgPresentational0001,
    List0001,
  },
  mixins: [everyChild],
  props: {
    qiitaItems: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => [],
    },
  },
  computed: {
    createdAtItems() {
      return this.qiitaItems.map((item) => {
        return item.created_at
      })
    },
  },
})
</script>
<style lang="scss" scoped></style>

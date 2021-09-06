<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="qiitaのAPIから取得したitem情報のサンプル"
  >
    <List0001
      v-if="createdAtItems.length > 0"
      :identifiers="[...identifiers, 'CreatedAtList']"
      :items="createdAtItems"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'
import List0001 from '~/components/common/molecules_and_atoms/list_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgQiitaItems',
  components: {
    OrgGeneralPurpose0001Presentational,
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

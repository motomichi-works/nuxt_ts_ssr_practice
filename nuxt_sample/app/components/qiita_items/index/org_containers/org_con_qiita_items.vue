<template>
  <OrgPreShared0001
    :identifier="identifier"
    org-heading-text="qiitaのAPIから取得したitem情報のサンプル"
  >
    <List0001
      v-if="createdAtItems.length > 0"
      :identifier="`${identifier}/CreatedAtList`"
      :items="createdAtItems"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'
import List0001 from '~/components/common/molecules_and_atoms/list_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgQiitaItems',
  components: {
    OrgPreShared0001,
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

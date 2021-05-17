<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">Badge0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <Badge0001 :identifiers="[...identifiers, 'Badge0001']" text="必須" />
      <Badge0001
        :identifiers="[...identifiers, 'Badge0001A']"
        text="任意"
        :modifier-classes="['badge-0001--bg-color-gray']"
      />
    </div>
  </section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'

import Badge0001 from '~/components/common/badge-0001/index.vue'

export default Vue.extend({
  name: 'Badge0001Container',
  components: {
    Badge0001,
  },
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
  },
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

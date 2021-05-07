<template>
  <section class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">badge-0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <div>
        <Badge0001 text="必須" />
      </div>
      <div>
        <Badge0001
          text="任意"
          :modifier-classes="['badge-0001--bg-color-gray']"
        />
      </div>
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
    moduleIds: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

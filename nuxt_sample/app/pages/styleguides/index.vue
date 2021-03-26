<template>
  <div class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">
        styleguides/index.vue
      </h1>
    </div>
    <div class="l-contents-type-0001__body">
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Badge0001 from '~/components/common/badge-0001/index.vue'
export default Vue.extend({
  components: {
    Badge0001,
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// layouts
@import '~/assets/scss/layouts/l-contents-type-0001';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

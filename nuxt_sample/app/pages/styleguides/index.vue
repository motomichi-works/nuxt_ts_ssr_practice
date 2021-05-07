<template>
  <div class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">
        styleguides/index.vue
      </h1>
    </div>
    <div class="l-contents-type-0001__body">
      <Badge0001Container :module-ids="['Badge0001Container']" />
      <FieldHeading0001Container :module-ids="['FieldHeading0001Container']" />
      <FontAwesome5Container :module-ids="['FontAwesome5Container']" />
      <BasicField0001Container :module-ids="['BasicField0001Container']" />
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">FieldErrorMessages0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <FieldErrorMessages0001
            :error-messages="[
              'エラーメッセージサンプル1',
              'エラーメッセージサンプル2',
            ]"
          />
        </div>
      </section>
      <BasicFieldUnit0001Container
        :module-ids="['BasicFieldUnit0001Container']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Badge0001Container from '~/components/pages/styleguides/badge-0001-container/index.vue'
import FontAwesome5Container from '~/components/pages/styleguides/font-awesome-5-container/index.vue'
import BasicField0001Container from '~/components/pages/styleguides/basic-field-0001-container/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001Container from '~/components/pages/styleguides/field-heading-0001-container/index.vue'
import BasicFieldUnit0001Container from '~/components/pages/styleguides/basic-field-unit-0001-container/index.vue'

export default Vue.extend({
  components: {
    Badge0001Container,
    FontAwesome5Container,
    BasicField0001Container,
    FieldErrorMessages0001,
    FieldHeading0001Container,
    BasicFieldUnit0001Container,
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

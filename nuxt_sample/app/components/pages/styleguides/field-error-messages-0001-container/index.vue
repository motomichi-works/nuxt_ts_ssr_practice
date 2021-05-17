<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">FieldErrorMessages0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <FieldErrorMessages0001
        :identifiers="[...identifiers, 'FieldErrorMessages0001']"
        :error-messages="[
          'エラーメッセージサンプル1',
          'エラーメッセージサンプル2',
        ]"
      />
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

// mixins
import base from '~/mixins/base'

import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'

export default Vue.extend({
  name: 'FieldErrorMessages0001Container',
  components: {
    FieldErrorMessages0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

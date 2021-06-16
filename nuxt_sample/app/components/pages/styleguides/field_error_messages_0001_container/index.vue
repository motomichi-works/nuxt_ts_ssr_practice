<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="FieldErrorMessages0001"
      />
    </div>
    <div class="container-0001__body">
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
// import node_modules
import Vue from 'vue'

// import components/common
import FieldErrorMessages0001 from '~/components/common/field_error_messages_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'FieldErrorMessages0001Container',
  components: {
    FieldErrorMessages0001,
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">FieldHeading0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <FieldHeading0001
        :identifiers="[...identifiers, 'FieldHeading0001']"
        text="h2見出し"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'FieldHeading0001A']"
        text="h3見出し"
        tag-name="h3"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'FieldHeading0001B']"
        text="h2見出し"
        :is-required="false"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'FieldHeading0001C']"
        text="h2見出し"
        :is-required="false"
        tag-name="h3"
      />
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

// mixins
import base from '~/mixins/base'

import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

export default Vue.extend({
  name: 'FieldHeading0001Container',
  components: {
    FieldHeading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

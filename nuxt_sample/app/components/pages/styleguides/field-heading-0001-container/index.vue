<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="FieldHeading0001"
      />
    </div>
    <div class="container-0001__body">
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
// import node_modules
import Vue from 'vue'

// components
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'FieldHeading0001Container',
  components: {
    FieldHeading0001,
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container-0001';
</style>

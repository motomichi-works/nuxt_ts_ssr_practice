<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Badge0001"
      />
    </div>
    <div class="container-0001__body">
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
// import node_modules
import Vue from 'vue'

// components
import Badge0001 from '~/components/common/badge-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001Container',
  components: {
    Badge0001,
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container-0001';
</style>

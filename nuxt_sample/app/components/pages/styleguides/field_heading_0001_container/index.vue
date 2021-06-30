<template>
  <section :data-selector="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="FieldHeading0001"
      />
    </div>
    <div class="container-0001__body">
      <FieldHeading0001
        :identifiers="[...identifiers, 'fieldHeading']"
        text="h2見出し"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'fieldHeadingA']"
        text="h3見出し"
        tag-name="h3"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'fieldHeadingB']"
        text="h2見出し"
        :is-required="false"
      />
      <FieldHeading0001
        :identifiers="[...identifiers, 'fieldHeadingC']"
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

// import components/common
import FieldHeading0001 from '~/components/common/field_heading_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'FieldHeading0001Container',
  components: {
    FieldHeading0001,
    Heading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

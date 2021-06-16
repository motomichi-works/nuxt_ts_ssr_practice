<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Heading0001"
      />
    </div>
    <div class="container-0001__body">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv1の見出し"
        :modifier-classes="['heading-0001--lv-1']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv2の見出し"
        :modifier-classes="['heading-0001--lv-2']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv3の見出し"
        :modifier-classes="['heading-0001--lv-3']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv4の見出し"
        :modifier-classes="['heading-0001--lv-4']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv5の見出し"
        :modifier-classes="['heading-0001--lv-5']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv6の見出し"
        :modifier-classes="['heading-0001--lv-6']"
        :tag-name="'h2'"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import every from '~/mixins/common/every'

// Vue.extend
export default Vue.extend({
  name: 'Heading0001Container',
  components: {
    Heading0001,
  },
  mixins: [every],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

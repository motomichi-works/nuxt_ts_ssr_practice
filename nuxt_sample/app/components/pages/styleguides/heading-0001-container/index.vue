<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">Heading0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv1の見出し"
        :modifier-classes="['mod-heading-0001--lv-1']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv2の見出し"
        :modifier-classes="['mod-heading-0001--lv-2']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv3の見出し"
        :modifier-classes="['mod-heading-0001--lv-3']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv4の見出し"
        :modifier-classes="['mod-heading-0001--lv-4']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv5の見出し"
        :modifier-classes="['mod-heading-0001--lv-5']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="Lv6の見出し"
        :modifier-classes="['mod-heading-0001--lv-6']"
        :tag-name="'h2'"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import base from '~/mixins/base'

// components
import Heading0001 from '~/components/common/heading-0001/index.vue'

// Vue.extend
export default Vue.extend({
  name: 'Heading0001Container',
  components: {
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

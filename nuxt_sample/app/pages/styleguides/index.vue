<template>
  <div :data-selector="identifierStr" class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">
        styleguides/index.vue
      </h1>
    </div>
    <div class="l-contents-type-0001__body">
      <component
        :is="component.name"
        v-for="component in components"
        :key="component.identifiers.join('__')"
        :identifiers="component.identifiers"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Badge0001Container from '~/components/pages/styleguides/badge-0001-container/index.vue'
import FontAwesome5Container from '~/components/pages/styleguides/font-awesome-5-container/index.vue'
import BasicField0001Container from '~/components/pages/styleguides/basic-field-0001-container/index.vue'
import FieldErrorMessages0001Container from '~/components/pages/styleguides/field-error-messages-0001-container/index.vue'
import FieldHeading0001Container from '~/components/pages/styleguides/field-heading-0001-container/index.vue'
import BasicFieldUnit0001Container from '~/components/pages/styleguides/basic-field-unit-0001-container/index.vue'

export default Vue.extend({
  components: {
    Badge0001Container,
    BasicField0001Container,
    BasicFieldUnit0001Container,
    FieldErrorMessages0001Container,
    FieldHeading0001Container,
    FontAwesome5Container,
  },
  computed: {
    identifierStr() {
      return 'Contents'
    },
    components() {
      const componentNames = [
        'Badge0001Container',
        'BasicField0001Container',
        'BasicFieldUnit0001Container',
        'FieldErrorMessages0001Container',
        'FieldHeading0001Container',
        'FontAwesome5Container',
      ] as const

      const components = componentNames.map((name) => {
        return { name, identifiers: [name] }
      })

      return components
    },
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

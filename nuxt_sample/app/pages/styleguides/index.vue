<template>
  <div :data-selector="identifierStr" class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <Heading0001
        :identifiers="[identifierStr, 'Heading0001']"
        text="styleguides/index.vue"
        :modifier-classes="['heading-0001--lv-1']"
        :tag-name="'h1'"
      />
    </div>
    <div class="l-contents-type-0001__body">
      <component
        :is="component.name"
        v-for="component in components"
        :key="component.identifiers.join('_')"
        :identifiers="component.identifiers"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// import components/pages
import Badge0001Container from '~/components/pages/styleguides/badge_0001_container/index.vue'
import BasicField0001Container from '~/components/pages/styleguides/basic_field_0001_container/index.vue'
import BasicFieldUnit0001Container from '~/components/pages/styleguides/basic_field_unit_0001_container/index.vue'
import FieldErrorMessages0001Container from '~/components/pages/styleguides/field_error_messages_0001_container/index.vue'
import FieldHeading0001Container from '~/components/pages/styleguides/field_heading_0001_container/index.vue'
import FontAwesome5Container from '~/components/pages/styleguides/font_awesome_5_container/index.vue'
import Heading0001Container from '~/components/pages/styleguides/heading_0001_container/index.vue'
import SelectField0001Container from '~/components/pages/styleguides/select_field_0001_container/index.vue'
import SelectFieldUnit0001Container from '~/components/pages/styleguides/select_field_unit_0001_container/index.vue'

// Vue.extend
export default Vue.extend({
  components: {
    Heading0001,
    Badge0001Container,
    BasicField0001Container,
    BasicFieldUnit0001Container,
    FieldErrorMessages0001Container,
    FieldHeading0001Container,
    FontAwesome5Container,
    Heading0001Container,
    SelectField0001Container,
    SelectFieldUnit0001Container,
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
        'Heading0001Container',
        'SelectField0001Container',
        'SelectFieldUnit0001Container',
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
// layouts
@import '~/assets/scss/layouts/l_contents_type_0001';
</style>

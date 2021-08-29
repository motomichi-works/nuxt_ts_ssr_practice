<template>
  <PagePresentational0001 page-heading-text="styleguides/index.vue">
    <component
      :is="component.name"
      v-for="component in components"
      :key="component.identifiers.join('/')"
      :identifiers="component.identifiers"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :realtime-errors-obj="realtimeErrorsObj"
      :is-tainted-obj="isTaintedObj"
      @input-field="$_handleInputField"
      @change-field="$_handleChangeFieldOrBlurField"
      @blur-field="$_handleChangeFieldOrBlurField"
    />
  </PagePresentational0001>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// settings
import { namespace } from '~/settings/pages/styleguides/index'

// store, store types
import {
  FieldValueObj,
  RealtimeErrorsObj,
  IsTaintedObj,
} from '~/store/styleguides/index'

// import components/molecules_and_atoms
import PagePresentational0001 from '~/components/pages/page_presentational_0001/index.vue'

// import components/organisms
import Badge0001Showcase from '~/components/organisms/badge_0001_showcase/index.vue'
import BasicField0001Showcase from '~/components/organisms/basic_field_0001_showcase/index.vue'
import BasicFieldUnit0001Showcase from '~/components/organisms/basic_field_unit_0001_showcase/index.vue'
import FieldErrorMessages0001Showcase from '~/components/organisms/field_error_messages_0001_showcase/index.vue'
import FieldHeading0001Showcase from '~/components/organisms/field_heading_0001_showcase/index.vue'
import FontAwesome5Showcase from '~/components/organisms/font_awesome_5_showcase/index.vue'
import Heading0001Showcase from '~/components/organisms/heading_0001_showcase/index.vue'
import SelectField0001Showcase from '~/components/organisms/select_field_0001_showcase/index.vue'
import SelectFieldUnit0001Showcase from '~/components/organisms/select_field_unit_0001_showcase/index.vue'

// mixins
import mappedChangeFieldValue from '~/mixins/common/methods/mapped_change_field_value'
import mappedChangeRealtimeErrors from '~/mixins/common/methods/mapped_change_realtime_errors'
import mappedChangeIsTainted from '~/mixins/common/methods/mapped_change_is_tainted'
import handleInputField from '~/mixins/common/methods/handle_input_field'
import handleChangeFieldOrBlurField from '~/mixins/common/methods/handle_change_field_or_blur_field'

// Vue.extend
export default Vue.extend({
  components: {
    PagePresentational0001,
    Badge0001Showcase,
    BasicField0001Showcase,
    BasicFieldUnit0001Showcase,
    FieldErrorMessages0001Showcase,
    FieldHeading0001Showcase,
    FontAwesome5Showcase,
    Heading0001Showcase,
    SelectField0001Showcase,
    SelectFieldUnit0001Showcase,
  },
  mixins: [
    mappedChangeFieldValue,
    mappedChangeRealtimeErrors,
    mappedChangeIsTainted,
    handleInputField,
    handleChangeFieldOrBlurField,
  ],
  computed: {
    namespace() {
      return namespace
    },
    fieldValueObj(): FieldValueObj {
      return this.$store.getters[`${this.namespace}/fieldValueObj`]
    },
    realtimeErrorsObj(): RealtimeErrorsObj {
      return this.$store.getters[`${this.namespace}/realtimeErrorsObj`]
    },
    isTaintedObj(): IsTaintedObj {
      return this.$store.getters[`${this.namespace}/isTaintedObj`]
    },
    components() {
      const componentNames = [
        'Badge0001Showcase',
        'BasicField0001Showcase',
        'BasicFieldUnit0001Showcase',
        'FieldErrorMessages0001Showcase',
        'FieldHeading0001Showcase',
        'FontAwesome5Showcase',
        'Heading0001Showcase',
        'SelectField0001Showcase',
        'SelectFieldUnit0001Showcase',
      ] as const

      const components = componentNames.map((name) => {
        return { name, identifiers: [name] }
      })

      return components
    },
  },
})
</script>

<style lang="scss" scoped></style>

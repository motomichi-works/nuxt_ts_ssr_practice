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

// import components/common
import PagePresentational0001 from '~/components/common/page_presentational_0001/index.vue'

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

<style lang="scss" scoped></style>

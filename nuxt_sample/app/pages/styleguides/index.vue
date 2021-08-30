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
import OrgBadge0001Showcase from '~/components/organisms/styleguides/org_badge_0001_showcase/index.vue'
import OrgBasicField0001Showcase from '~/components/organisms/styleguides/org_basic_field_0001_showcase/index.vue'
import OrgBasicFieldUnit0001Showcase from '~/components/organisms/styleguides/org_basic_field_unit_0001_showcase/index.vue'
import OrgFieldErrorMessages0001Showcase from '~/components/organisms/styleguides/org_field_error_messages_0001_showcase/index.vue'
import OrgFieldHeading0001Showcase from '~/components/organisms/styleguides/org_field_heading_0001_showcase/index.vue'
import OrgFontAwesome5Showcase from '~/components/organisms/styleguides/org_font_awesome_5_showcase/index.vue'
import OrgHeading0001Showcase from '~/components/organisms/styleguides/org_heading_0001_showcase/index.vue'
import OrgSelectField0001Showcase from '~/components/organisms/styleguides/org_select_field_0001_showcase/index.vue'
import OrgSelectFieldUnit0001Showcase from '~/components/organisms/styleguides/org_select_field_unit_0001_showcase/index.vue'

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
    OrgBadge0001Showcase,
    OrgBasicField0001Showcase,
    OrgBasicFieldUnit0001Showcase,
    OrgFieldErrorMessages0001Showcase,
    OrgFieldHeading0001Showcase,
    OrgFontAwesome5Showcase,
    OrgHeading0001Showcase,
    OrgSelectField0001Showcase,
    OrgSelectFieldUnit0001Showcase,
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
        'OrgBadge0001Showcase',
        'OrgBasicField0001Showcase',
        'OrgBasicFieldUnit0001Showcase',
        'OrgFieldErrorMessages0001Showcase',
        'OrgFieldHeading0001Showcase',
        'OrgFontAwesome5Showcase',
        'OrgHeading0001Showcase',
        'OrgSelectField0001Showcase',
        'OrgSelectFieldUnit0001Showcase',
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

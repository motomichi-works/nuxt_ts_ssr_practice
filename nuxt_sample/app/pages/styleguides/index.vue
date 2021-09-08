<template>
  <PagePreGeneralPurpose0001 page-heading-text="styleguides/index">
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
  </PagePreGeneralPurpose0001>
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
} from '~/store/styleguidesIndex'

// import components/molecules_and_atoms
import PagePreGeneralPurpose0001 from '~/components/common/page_presentationals/page_pre_general_purpose_0001.vue'

// import components/orgs
import OrgConBadge0001Showcase from '~/components/styleguides/index/org_containers/org_con_badge_0001_showcase.vue'
import OrgConBasicField0001Showcase from '~/components/styleguides/index/org_containers/org_con_basic_field_0001_showcase.vue'
import OrgBasicFieldUnit0001Showcase from '~/components/styleguides/index/org_containers/org_basic_field_unit_0001_showcase.vue'
import OrgFieldErrorMessages0001Showcase from '~/components/styleguides/index/org_containers/org_field_error_messages_0001_showcase.vue'
import OrgFieldHeading0001Showcase from '~/components/styleguides/index/org_containers/org_field_heading_0001_showcase.vue'
import OrgFontAwesome5Showcase from '~/components/styleguides/index/org_containers/org_font_awesome_5_showcase.vue'
import OrgHeading0001Showcase from '~/components/styleguides/index/org_containers/org_heading_0001_showcase.vue'
import OrgList0001Showcase from '~/components/styleguides/index/org_containers/org_list_0001_showcase.vue'
import OrgList0002Showcase from '~/components/styleguides/index/org_containers/org_list_0002_showcase.vue'
import OrgSelectField0001Showcase from '~/components/styleguides/index/org_containers/org_select_field_0001_showcase.vue'
import OrgSelectFieldUnit0001Showcase from '~/components/styleguides/index/org_containers/org_select_field_unit_0001_showcase.vue'

// mixins
import { mappedChangeFieldValue } from '~/mixins/common/page_containers/methods/mapped_change_field_value'
import { mappedChangeRealtimeErrors } from '~/mixins/common/page_containers/methods/mapped_change_realtime_errors'
import { mappedChangeIsTainted } from '~/mixins/common/page_containers/methods/mapped_change_is_tainted'
import { handleInputField } from '~/mixins/common/page_containers/methods/handle_input_field'
import { handleChangeFieldOrBlurField } from '~/mixins/common/page_containers/methods/handle_change_field_or_blur_field'

// Vue.extend
export default Vue.extend({
  components: {
    PagePreGeneralPurpose0001,
    OrgConBadge0001Showcase,
    OrgConBasicField0001Showcase,
    OrgBasicFieldUnit0001Showcase,
    OrgFieldErrorMessages0001Showcase,
    OrgFieldHeading0001Showcase,
    OrgFontAwesome5Showcase,
    OrgHeading0001Showcase,
    OrgList0001Showcase,
    OrgList0002Showcase,
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
        'OrgConBadge0001Showcase',
        'OrgConBasicField0001Showcase',
        'OrgBasicFieldUnit0001Showcase',
        'OrgFieldErrorMessages0001Showcase',
        'OrgFieldHeading0001Showcase',
        'OrgFontAwesome5Showcase',
        'OrgHeading0001Showcase',
        'OrgList0001Showcase',
        'OrgList0002Showcase',
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

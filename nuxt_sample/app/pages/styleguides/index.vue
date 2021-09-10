<template>
  <PagePreShared0001 page-heading-text="styleguides/index">
    <component
      :is="component.name"
      v-for="component in components"
      :key="component.identifier"
      :identifier="component.identifier"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :realtime-errors-obj="realtimeErrorsObj"
      :is-tainted-obj="isTaintedObj"
      @input-field="$_handleInputField"
      @change-field="$_handleChangeFieldOrBlurField"
      @blur-field="$_handleChangeFieldOrBlurField"
    />
  </PagePreShared0001>
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
import PagePreShared0001 from '~/components/common/page_presentationals/page_pre_shared_0001.vue'

// import components/orgs
import OrgConBadge0001Showcase from '~/components/styleguides/index/org_containers/org_con_badge_0001_showcase.vue'
import OrgConBasicField0001Showcase from '~/components/styleguides/index/org_containers/org_con_basic_field_0001_showcase.vue'
import OrgConBasicFieldUnit0001Showcase from '~/components/styleguides/index/org_containers/org_con_basic_field_unit_0001_showcase.vue'
import OrgConFieldErrorMessages0001Showcase from '~/components/styleguides/index/org_containers/org_con_field_error_messages_0001_showcase.vue'
import OrgConFieldHeading0001Showcase from '~/components/styleguides/index/org_containers/org_con_field_heading_0001_showcase.vue'
import OrgConFontAwesome5Showcase from '~/components/styleguides/index/org_containers/org_con_font_awesome_5_showcase.vue'
import OrgConHeading0001Showcase from '~/components/styleguides/index/org_containers/org_con_heading_0001_showcase.vue'
import OrgConList0001Showcase from '~/components/styleguides/index/org_containers/org_con_list_0001_showcase.vue'
import OrgConList0002Showcase from '~/components/styleguides/index/org_containers/org_con_list_0002_showcase.vue'
import OrgConRadioField0001Showcase from '~/components/styleguides/index/org_containers/org_con_radio_field_0001_showcase.vue'
import OrgConSelectField0001Showcase from '~/components/styleguides/index/org_containers/org_con_select_field_0001_showcase.vue'
import OrgConSelectFieldUnit0001Showcase from '~/components/styleguides/index/org_containers/org_con_select_field_unit_0001_showcase.vue'

// mixins
import { mutateFieldValue } from '~/mixins/common/page_containers/methods/mutate_field_value'
import { mutateRealtimeErrors } from '~/mixins/common/page_containers/methods/mutate_realtime_errors'
import { mutateIsTainted } from '~/mixins/common/page_containers/methods/mutate_is_tainted'
import { handleInputField } from '~/mixins/common/page_containers/methods/handle_input_field'
import { handleChangeFieldOrBlurField } from '~/mixins/common/page_containers/methods/handle_change_field_or_blur_field'

// Vue.extend
export default Vue.extend({
  components: {
    PagePreShared0001,
    OrgConBadge0001Showcase,
    OrgConBasicField0001Showcase,
    OrgConBasicFieldUnit0001Showcase,
    OrgConFieldErrorMessages0001Showcase,
    OrgConFieldHeading0001Showcase,
    OrgConFontAwesome5Showcase,
    OrgConHeading0001Showcase,
    OrgConList0001Showcase,
    OrgConList0002Showcase,
    OrgConRadioField0001Showcase,
    OrgConSelectField0001Showcase,
    OrgConSelectFieldUnit0001Showcase,
  },
  mixins: [
    mutateFieldValue,
    mutateRealtimeErrors,
    mutateIsTainted,
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
        'OrgConBasicFieldUnit0001Showcase',
        'OrgConFieldErrorMessages0001Showcase',
        'OrgConFieldHeading0001Showcase',
        'OrgConFontAwesome5Showcase',
        'OrgConHeading0001Showcase',
        'OrgConList0001Showcase',
        'OrgConList0002Showcase',
        'OrgConRadioField0001Showcase',
        'OrgConSelectField0001Showcase',
        'OrgConSelectFieldUnit0001Showcase',
      ] as const

      const components = componentNames.map((name) => {
        const identifier = name.replace('Con', 'Pre')
        return { name, identifier }
      })

      return components
    },
  },
})
</script>

<style lang="scss" scoped></style>

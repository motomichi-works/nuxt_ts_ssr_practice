<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="RadioField0001">
    <RadioField0001
      :identifier="`${identifier}/RadioField0001A`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :has-realtime-errors="
        realtimeErrorsObj['styleguides[radio_field_0001_a]'].length > 0
      "
      :is-tainted-obj="isTaintedObj"
      :block-class-name="'radioField0001'"
      :modifiers="[]"
      :name="'styleguides[radio_field_0001_a]'"
      :shared-key="'styleguides[radio_field_0001_a]'"
      :is-disabled="false"
      :is-readonly="false"
      :options="[
        { label: '選択肢1', value: 'value1' },
        { label: '選択肢2', value: 'value2' },
      ]"
      :combination-field="null"
      @blur-field="$_emitBlurField"
      @change-field="$_emitChangeField"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import RadioField0001 from '~/components/common/molecules_and_atoms/radio_field_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgConRadioField0001Showcase',
  components: {
    OrgPreShared0001,
    RadioField0001,
  },
  mixins: [everyChild, containingTheField],
})
</script>
<style lang="scss" scoped></style>

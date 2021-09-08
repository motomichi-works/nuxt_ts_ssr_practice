<template>
  <OrgPreShared0001
    :identifiers="[...identifiers]"
    org-heading-text="SelectField0001"
  >
    <SelectField0001
      :identifiers="[...identifiers, 'SelectField0001A']"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :has-realtime-errors="
        realtimeErrorsObj['styleguides[select_field_0001_a]'].length > 0
      "
      :is-tainted-obj="isTaintedObj"
      :modifiers="[]"
      :validator-names-that-depends-on-dynamic-options="[]"
      :name="'styleguides[select_field_0001_a]'"
      :shared-key="'styleguides[select_field_0001_a]'"
      :is-disabled="false"
      :is-readonly="false"
      :options="[
        { label: '選択してください', value: '' },
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
import SelectField0001 from '~/components/common/molecules_and_atoms/select_field_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgConSelectField0001Showcase',
  components: {
    OrgPreShared0001,
    SelectField0001,
  },
  mixins: [everyChild, containingTheField],
})
</script>
<style lang="scss" scoped></style>

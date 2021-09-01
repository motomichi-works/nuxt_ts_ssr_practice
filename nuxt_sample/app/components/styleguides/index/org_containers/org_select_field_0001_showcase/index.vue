<template>
  <OrgPresentational0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="SelectField0001"
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
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/shared/org_presentationals/org_presentational_0001/index.vue'

// import components/molecules_and_atoms
import SelectField0001 from '~/components/shared/molecules_and_atoms/select_field_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/org_containers/shared/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgSelectField0001Showcase',
  components: {
    OrgPresentational0001,
    SelectField0001,
  },
  mixins: [everyChild, containingTheField],
})
</script>
<style lang="scss" scoped></style>

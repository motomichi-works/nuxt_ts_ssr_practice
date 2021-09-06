<template>
  <OrgGeneralPurpose0001Presentational
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="BasicField0001"
  >
    <BasicField0001
      :identifiers="[...identifiers, 'basicFieldA']"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :has-realtime-errors="
        realtimeErrorsObj['styleguides[basic_field_0001_a]'].length > 0
      "
      :is-tainted-obj="isTaintedObj"
      :modifiers="[]"
      :validator-names-that-depends-on-dynamic-options="[]"
      :name="'styleguides[basic_field_0001_a]'"
      :shared-key="'styleguides[basic_field_0001_a]'"
      :is-disabled="false"
      :is-readonly="false"
      :placeholder="'プレースホルダー'"
      :maxlength="'100'"
      :left-icon="fa.search"
      :right-icon="fa.search"
      :combination-field="null"
      @blur-field="$_emitBlurField"
      @input-field="$_emitInputField"
    />
  </OrgGeneralPurpose0001Presentational>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgGeneralPurpose0001Presentational from '~/components/common/org_presentationals/org_general_purpose_0001_presentational.vue'

// import components/molecules_and_atoms
import BasicField0001 from '~/components/common/molecules_and_atoms/basic_field_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgBasicField0001Showcase',
  components: {
    OrgGeneralPurpose0001Presentational,
    BasicField0001,
  },
  mixins: [everyChild, containingTheField],
  computed: {
    fa() {
      return {
        search: faSearch,
      }
    },
  },
})
</script>
<style lang="scss" scoped></style>

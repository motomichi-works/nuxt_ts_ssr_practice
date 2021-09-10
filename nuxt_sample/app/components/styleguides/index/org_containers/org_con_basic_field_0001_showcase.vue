<template>
  <OrgPreShared0001 :identifier="identifier" org-heading-text="BasicField0001">
    <BasicField0001
      :identifier="`${identifier}/BasicFieldA`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :has-realtime-errors="
        realtimeErrorsObj['styleguides[basic_field_0001_a]'].length > 0
      "
      :is-tainted-obj="isTaintedObj"
      :modifiers="[]"
      :name="'styleguides[basic_field_0001_a]'"
      :shared-key="'styleguides[basic_field_0001_a]'"
      :type="'text'"
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
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import BasicField0001 from '~/components/common/molecules_and_atoms/basic_field_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgConBasicField0001Showcase',
  components: {
    OrgPreShared0001,
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

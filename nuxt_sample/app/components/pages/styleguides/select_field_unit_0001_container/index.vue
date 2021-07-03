<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="SelectFieldUnit0001"
      />
    </div>
    <div class="container-0001__body">
      <SelectFieldUnit0001
        :identifiers="[...identifiers, 'SelectFieldUnit0001A']"
        :namespace="namespace"
        :field-value-obj="fieldValueObj"
        :realtime-errors-obj="realtimeErrorsObj"
        :is-tainted-obj="isTaintedObj"
        :field-modifiers-obj="{ field01: [] }"
        :validator-names-that-depends-on-dynamic-options-obj="{ field01: [] }"
        :name-property-obj="{
          field01: 'styleguides[select_field_unit_0001_a]',
        }"
        :shared-key="'styleguides[select_field_unit_0001_a]'"
        :is-disabled="false"
        :is-readonly="false"
        :options-obj="{
          field01: [
            { label: '選択してください', value: '' },
            { label: 'SelectFieldUnitAの選択肢1', value: 'value1' },
            { label: 'SelectFieldUnitAの選択肢2', value: 'value2' },
          ],
        }"
        :descriptions="['説明文1', '説明文2']"
        :heading-text="'セレクトフィールドユニット0001A'"
        :badge-type="'required'"
        @on-blur-field="emitOnBlurField"
        @on-change-field="emitOnChangeField"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/common
import SelectFieldUnit0001 from '~/components/common/select_field_unit_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001Container',
  components: {
    SelectFieldUnit0001,
    Heading0001,
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
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

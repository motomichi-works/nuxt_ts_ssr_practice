<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="BasicFieldUnit0001"
      />
    </div>
    <div class="container-0001__body">
      <BasicFieldUnit0001
        :identifiers="[...identifiers, 'basicFieldUnitEmail']"
        :namespace="namespace"
        :field-value-obj="fieldValueObj"
        :realtime-errors-obj="realtimeErrorsObj"
        :is-tainted-obj="isTaintedObj"
        :field-modifiers-obj="{ field1: [] }"
        :validator-names-that-depends-on-dynamic-options="['customEmail']"
        :name-property="'styleguides[basic_field_unit_0001_email]'"
        :shared-key="'styleguides[basic_field_unit_0001_email]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder-obj="{ field1: 'placeholder@example.com' }"
        :maxlength-obj="{ field1: '100' }"
        :left-icon-obj="{ field1: fa.search }"
        :right-icon-obj="{ field1: fa.search }"
        :descriptions="['例: placeholder@example.com']"
        :heading-text="'メールアドレス'"
        :badge-type="'required'"
        @on-blur-field="emitOnBlurField"
        @on-input-field="emitOnInputField"
      />
      <BasicFieldUnit0001
        :identifiers="[...identifiers, 'basicFieldUnitNameKana']"
        :namespace="namespace"
        :field-value-obj="fieldValueObj"
        :realtime-errors-obj="realtimeErrorsObj"
        :is-tainted-obj="isTaintedObj"
        :field-modifiers-obj="{ field1: [] }"
        :validator-names-that-depends-on-dynamic-options="['katakana']"
        :name-property="'styleguides[basic_field_unit_0001_name_kana]'"
        :shared-key="'styleguides[basic_field_unit_0001_name_kana]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder-obj="{ field1: 'サンプル タロウ' }"
        :maxlength-obj="{ field1: '100' }"
        :left-icon-obj="{ field1: fa.search }"
        :right-icon-obj="{ field1: fa.search }"
        :descriptions="['例: サンプル タロウ']"
        :heading-text="'お名前（カナ）'"
        :badge-type="'required'"
        @on-blur-field="emitOnBlurField"
        @on-input-field="emitOnInputField"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/common
import BasicFieldUnit0001 from '~/components/common/basic_field_unit_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001Container',
  components: {
    BasicFieldUnit0001,
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

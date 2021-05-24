<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="SelectFieldUnit0001"
      />
    </div>
    <div class="container-0001__body">
      <SelectFieldUnit0001
        :identifiers="[...identifiers, 'SelectFieldUnit0001A']"
        :field-modifiers="['select-field-0001--size-md']"
        :validator-names="['presence']"
        :value="fieldValues['styleguides[select_field_unit_0001_a]']"
        :name-property="'styleguides[select_field_unit_0001_a]'"
        :is-disabled="false"
        :is-readonly="false"
        :options="[
          { label: '選択してください', value: '' },
          { label: 'SelectFieldUnitAの選択肢1', value: 'value1' },
          { label: 'SelectFieldUnitAの選択肢2', value: 'value2' },
        ]"
        :descriptions="['説明文1', '説明文2']"
        :heading-text="'セレクトフィールドユニットA'"
        :is-required="true"
        :realtime-errors="
          realtimeErrors['styleguides[select_field_unit_0001_a]']
        "
        @on-blur-field="onBlurField"
        @on-change-field="onChangeField"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/common
import SelectFieldUnit0001 from '~/components/common/select-field-unit-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'
import formBase from '~/mixins/form_base'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001Container',
  components: {
    SelectFieldUnit0001,
    Heading0001,
  },
  mixins: [base, formBase],
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
@import '~/assets/scss/modules/container-0001';
</style>

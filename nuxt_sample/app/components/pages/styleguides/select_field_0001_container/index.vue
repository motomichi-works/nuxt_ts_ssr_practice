<template>
  <section :data-selector="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="SelectField0001"
      />
    </div>
    <div class="container-0001__body">
      <SelectField0001
        :identifiers="[...identifiers, 'SelectField0001A']"
        :namespace="namespace"
        :prev-values-for-validator-options="prevValuesForValidatorOptions"
        :modifiers="['select-field-0001--size-md']"
        :validator-names="['presence']"
        :value="fieldValues['styleguides[select_field_0001_a]']"
        :name-property="'styleguides[select_field_0001_a]'"
        :is-disabled="false"
        :is-readonly="false"
        :options="[
          { label: '選択してください', value: '' },
          { label: '選択肢1', value: 'value1' },
          { label: '選択肢2', value: 'value2' },
        ]"
        :has-realtime-errors="realtimeErrors.length > 0"
        @on-blur-field="emitOnBlurField"
        @on-change-field="emitOnChangeField"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import SelectField0001 from '~/components/common/select_field_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectField0001Container',
  components: {
    SelectField0001,
    Heading0001,
  },
  mixins: [everyChild, containingTheField],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

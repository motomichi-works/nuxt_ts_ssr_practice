<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
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
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/molecules_and_atoms
import SelectField0001 from '~/components/molecules_and_atoms/select_field_0001/index.vue'
import Heading0001 from '~/components/molecules_and_atoms/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgSelectField0001Showcase',
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

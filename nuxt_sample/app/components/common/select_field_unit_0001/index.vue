<template>
  <section
    :data-joined-identifiers="joinedIdentifiers"
    class="selectFieldUnit0001"
  >
    <div
      v-if="headingText.length > 0"
      class="selectFieldUnit0001__headingWrapper"
    >
      <FieldHeading0001
        :identifiers="[...identifiers, 'heading']"
        :text="headingText"
        :badge-type="badgeType"
      />
    </div>
    <div class="selectFieldUnit0001__body">
      <div class="selectFieldUnit0001__fieldWrapper">
        <SelectField0001
          :identifiers="[...identifiers, 'selectField']"
          :namespace="namespace"
          :field-value-obj="fieldValueObj"
          :realtime-errors-obj="realtimeErrorsObj"
          :is-tainted-obj="isTaintedObj"
          :modifiers="fieldModifiers"
          :validator-names-that-depends-on-dynamic-options="
            validatorNamesThatDependsOnDynamicOptions
          "
          :name-property="nameProperty"
          :shared-key="sharedKey"
          :is-disabled="isDisabled"
          :is-readonly="isReadonly"
          :options="options"
          @on-blur-field="emitOnBlurField"
          @on-change-field="emitOnChangeField"
        />
      </div>
      <ul v-if="descriptions.length > 0" class="selectFieldUnit0001__descGroup">
        <li
          v-for="desc in descriptions"
          :key="desc"
          class="selectFieldUnit0001__descItem"
          v-text="desc"
        />
      </ul>
    </div>
    <div
      v-if="hasRealtimeErrors"
      class="selectFieldUnit0001__errorMessagesWrapper"
    >
      <FieldErrorMessages0001
        :identifiers="[...identifiers, 'fieldErrorMessages']"
        :error-messages="realtimeErrors"
      />
    </div>
  </section>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/common
import SelectField0001 from '~/components/common/select_field_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import fieldUnitBase from '~/mixins/common/field_unit_base'
import fieldUnitThatIncludesOneField from '~/mixins/common/field_unit_that_includes_one_field'

// types
import { Option } from '~/mixins/common/select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
  },
  mixins: [everyChild, fieldUnitBase, fieldUnitThatIncludesOneField],
  props: {
    options: {
      type: Array as PropType<Option[]>,
      required: false,
      default: () => [{ label: '選択してください', value: '' }],
    },
  },
})
</script>

<style lang="scss" scoped>
.selectFieldUnit0001 {
  &:not(:first-child) {
    margin-top: 48px;
  }
  .selectFieldUnit0001__headingWrapper {
  }
  .selectFieldUnit0001__body {
    margin-top: 8px;
    padding: 8px;
    background-color: #dddddd;
    border-radius: 4px;
  }
  .selectFieldUnit0001__fieldWrapper {
  }
  .selectFieldUnit0001__descGroup {
    margin-top: 8px;
    padding: 0 4px;
  }
  .selectFieldUnit0001__descItem {
    color: #555555;
    font-size: 14px;
  }
  .selectFieldUnit0001__errorMessagesWrapper {
    margin-top: 8px;
  }
}
</style>

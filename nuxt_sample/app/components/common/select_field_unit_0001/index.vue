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
      <ul class="selectFieldUnit0001__mainContentsRow">
        <li class="selectFieldUnit0001__plainTextColumn01">テキスト01</li>
        <li class="selectFieldUnit0001__fieldColumn01">
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
        </li>
        <li class="selectFieldUnit0001__plainTextColumnLast">テキストLast</li>
      </ul>
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
import Vue from 'vue'

// import components/common
import SelectField0001 from '~/components/common/select_field_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import fieldUnitBase from '~/mixins/common/field_unit_base'
import fieldUnitForContainingOneSelectFieldOrRadioField from '~/mixins/common/field_unit_for_containing_one_select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
  },
  mixins: [
    everyChild,
    fieldUnitBase,
    fieldUnitForContainingOneSelectFieldOrRadioField,
  ],
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
  .selectFieldUnit0001__mainContentsRow {
    display: flex;
    align-items: center;
    & > li:not(:first-child) {
      margin-left: 0.5em;
    }
  }
  .selectFieldUnit0001__fieldColumn01 {
    flex: 1 1 100%;
  }
  .selectFieldUnit0001__plainTextColumnLast,
  .selectFieldUnit0001__plainTextColumn01 {
    white-space: nowrap;
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

<template>
  <section
    :data-joined-identifiers="joinedIdentifiers"
    class="basicFieldUnit0001"
  >
    <div
      v-if="headingText.length > 0"
      class="basicFieldUnit0001__headingWrapper"
    >
      <FieldHeading0001
        :identifiers="[...identifiers, 'heading']"
        :text="headingText"
        :badge-type="badgeType"
      />
    </div>
    <div class="basicFieldUnit0001__body">
      <ul class="basicFieldUnit0001__mainContentsRow">
        <li class="basicFieldUnit0001__plainTextColumn01">テキスト01</li>
        <li class="basicFieldUnit0001__fieldColumn01">
          <BasicField0001
            :identifiers="[...identifiers, 'field01']"
            :namespace="namespace"
            :field-value-obj="fieldValueObj"
            :realtime-errors-obj="realtimeErrorsObj"
            :is-tainted-obj="isTaintedObj"
            :modifiers="fieldModifiersObj.field01"
            :validator-names-that-depends-on-dynamic-options="
              validatorNamesThatDependsOnDynamicOptionsObj.field01
            "
            :name-property="nameProperty"
            :shared-key="sharedKey"
            :is-disabled="isDisabled"
            :is-readonly="isReadonly"
            :placeholder="placeholderObj.field01"
            :maxlength="maxlengthObj.field01"
            :left-icon="leftIconObj.field01"
            :right-icon="rightIconObj.field01"
            @on-blur-field="emitOnBlurField"
            @on-input-field="emitOnInputField"
          />
        </li>
        <li class="basicFieldUnit0001__plainTextColumnLast">テキストLast</li>
      </ul>
      <ul v-if="descriptions.length > 0" class="basicFieldUnit0001__descGroup">
        <li
          v-for="desc in descriptions"
          :key="desc"
          class="basicFieldUnit0001__descItem"
          v-text="desc"
        />
      </ul>
    </div>
    <div
      v-if="hasRealtimeErrors"
      class="basicFieldUnit0001__errorMessagesWrapper"
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

// mixins
import everyChild from '~/mixins/common/every_child'
import fieldUnitBase from '~/mixins/common/field_unit_base'
import basicFieldUnit from '~/mixins/common/basic_field_unit'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  mixins: [everyChild, fieldUnitBase, basicFieldUnit],
})
</script>

<style lang="scss" scoped>
.basicFieldUnit0001 {
  &:not(:first-child) {
    margin-top: 48px;
  }
  .basicFieldUnit0001__headingWrapper {
  }
  .basicFieldUnit0001__body {
    margin-top: 8px;
    padding: 8px;
    background-color: #dddddd;
    border-radius: 4px;
  }
  .basicFieldUnit0001__mainContentsRow {
    display: flex;
    align-items: center;
    & > li:not(:first-child) {
      margin-left: 0.5em;
    }
  }
  .basicFieldUnit0001__fieldColumn01 {
    flex: 1 1 100%;
  }
  .basicFieldUnit0001__plainTextColumnLast,
  .basicFieldUnit0001__plainTextColumn01 {
    white-space: nowrap;
  }
  .basicFieldUnit0001__descGroup {
    margin-top: 8px;
    padding: 0 4px;
  }
  .basicFieldUnit0001__descItem {
    color: #555555;
    font-size: 14px;
  }
  .basicFieldUnit0001__errorMessagesWrapper {
    margin-top: 8px;
  }
}
</style>

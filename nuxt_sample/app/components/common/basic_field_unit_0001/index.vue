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
      <div
        v-if="combinationField.nameProperty !== null"
        class="basicFieldUnit0001__combinationFieldWrapper"
      >
        <input
          v-model="combinationFieldValue"
          type="hidden"
          :name="combinationField.nameProperty"
        />
      </div>
      <ul class="basicFieldUnit0001__mainContentsGroup">
        <template v-for="(item, index) in items">
          <li
            v-if="item.nameProperty !== null || item.plainText !== null"
            :key="`${item.nameProperty}${index}`"
            :class="`basicFieldUnit0001__item${index}`"
          >
            <div class="basicFieldUnit0001__itemBody">
              <div
                v-if="item.nameProperty !== null"
                class="basicFieldUnit0001__fieldWrapper"
              >
                <BasicField0001
                  :identifiers="[...identifiers, `field${item.nameProperty}`]"
                  :namespace="namespace"
                  :field-value-obj="fieldValueObj"
                  :is-tainted-obj="isTaintedObj"
                  :realtime-errors="item.realtimeErrors"
                  :modifiers="item.fieldModifiers"
                  :validator-names-that-depends-on-dynamic-options="
                    item.validatorNamesThatDependsOnDynamicOptions
                  "
                  :name-property="item.nameProperty"
                  :shared-key="item.sharedKey"
                  :is-disabled="item.isDisabled"
                  :is-readonly="item.isReadonly"
                  :placeholder="item.placeholder"
                  :maxlength="item.maxlength"
                  :left-icon="item.leftIcon"
                  :right-icon="item.rightIcon"
                  @on-blur-field="emitOnBlurField"
                  @on-input-field="emitOnInputField"
                />
              </div>
              <div
                v-if="item.plainText !== null"
                class="basicFieldUnit0001__plainTextWrapper"
                v-text="item.plainText"
              />
            </div>
          </li>
        </template>
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
    <template v-for="item in items">
      <div
        v-if="item.realtimeErrors.length > 0"
        :key="item.nameProperty"
        class="basicFieldUnit0001__errorMessagesWrapper"
      >
        <FieldErrorMessages0001
          :identifiers="[...identifiers, 'fieldErrorMessages']"
          :error-messages="item.realtimeErrors"
        />
      </div>
    </template>
    <div
      v-if="isVisibleCombinationFieldRealtimeErrors"
      class="basicFieldUnit0001__errorMessagesWrapper"
    >
      <FieldErrorMessages0001
        :identifiers="[...identifiers, 'combinationFieldErrorMessages']"
        :error-messages="combinationFieldRealtimeErrors"
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
import emitOnInputCombinationField from '~/mixins/common/methods/emit_on_input_combination_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  mixins: [
    everyChild,
    fieldUnitBase,
    basicFieldUnit,
    emitOnInputCombinationField,
  ],
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
  .basicFieldUnit0001__mainContentsGroup {
    display: flex;
  }
  [class^='basicFieldUnit0001__item'] {
    flex: 1 1 100%;
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
  .basicFieldUnit0001__itemSubHeading {
  }
  .basicFieldUnit0001__itemBody {
    display: flex;
    align-items: center;
  }
  .basicFieldUnit0001__fieldWrapper {
    flex: 1 1 100%;
  }
  .basicFieldUnit0001__plainTextWrapper {
    flex: 1 1;
    white-space: nowrap;
  }
  .basicFieldUnit0001__fieldWrapper + .basicFieldUnit0001__plainTextWrapper {
    margin-left: 8px;
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

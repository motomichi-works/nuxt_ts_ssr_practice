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
      <ul class="selectFieldUnit0001__mainContentsGroup">
        <template v-for="(item, index) in items">
          <li
            v-if="item.nameProperty !== null || item.plainText !== null"
            :key="`${item.nameProperty}${index}`"
            :class="`selectFieldUnit0001__item${index}`"
          >
            <div class="selectFieldUnit0001__itemBody">
              <div
                v-if="item.nameProperty !== null"
                class="selectFieldUnit0001__fieldWrapper"
              >
                <SelectField0001
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
                  :options="item.options"
                  @on-blur-field="emitOnBlurField"
                  @on-change-field="emitOnChangeField"
                />
              </div>
              <div
                v-if="item.plainText !== null"
                class="selectFieldUnit0001__plainTextWrapper"
                v-text="item.plainText"
              />
            </div>
          </li>
        </template>
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
    <template v-for="item in items">
      <div
        v-if="item.realtimeErrors.length > 0"
        :key="item.nameProperty"
        class="selectFieldUnit0001__errorMessagesWrapper"
      >
        <FieldErrorMessages0001
          :identifiers="[...identifiers, 'fieldErrorMessages']"
          :error-messages="item.realtimeErrors"
        />
      </div>
    </template>
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
import selectFieldUnitOrRadioFieldUnit from '~/mixins/common/select_field_unit_or_radio_field_unit'
import emitOnInputCombinationField from '~/mixins/common/methods/emit_on_input_combination_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
  },
  mixins: [
    everyChild,
    fieldUnitBase,
    selectFieldUnitOrRadioFieldUnit,
    emitOnInputCombinationField,
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
  .selectFieldUnit0001__mainContentsGroup {
    display: flex;
  }
  [class^='selectFieldUnit0001__item'] {
    flex: 1 1 100%;
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
  .selectFieldUnit0001__itemSubHeading {
  }
  .selectFieldUnit0001__itemBody {
    display: flex;
    align-items: center;
  }
  .selectFieldUnit0001__fieldWrapper {
    flex: 1 1 100%;
  }
  .selectFieldUnit0001__plainTextWrapper {
    flex: 1 1;
    white-space: nowrap;
  }
  .selectFieldUnit0001__fieldWrapper + .selectFieldUnit0001__plainTextWrapper {
    margin-left: 8px;
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

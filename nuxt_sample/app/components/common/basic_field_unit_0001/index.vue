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
        <template v-for="indexStr in ['01', '02', '03', '04']">
          <li
            :key="`textColumn${indexStr}`"
            :class="`basicFieldUnit0001__plainTextColumn${indexStr}`"
          >
            テキスト01
          </li>
          <li
            v-if="namePropertyObj[`field${indexStr}`] !== undefined"
            :key="`fieldColumn${indexStr}`"
            :class="`basicFieldUnit0001__fieldColumn${indexStr}`"
          >
            <BasicField0001
              :identifiers="[...identifiers, `field${indexStr}`]"
              :namespace="namespace"
              :field-value-obj="fieldValueObj"
              :realtime-errors-obj="realtimeErrorsObj"
              :is-tainted-obj="isTaintedObj"
              :modifiers="fieldModifiersObj[`field${indexStr}`]"
              :validator-names-that-depends-on-dynamic-options="
                validatorNamesThatDependsOnDynamicOptionsObj[`field${indexStr}`]
              "
              :name-property="namePropertyObj[`field${indexStr}`]"
              :shared-key="sharedKey"
              :is-disabled="isDisabled"
              :is-readonly="isReadonly"
              :placeholder="placeholderObj[`field${indexStr}`]"
              :maxlength="maxlengthObj[`field${indexStr}`]"
              :left-icon="leftIconObj[`field${indexStr}`]"
              :right-icon="rightIconObj[`field${indexStr}`]"
              @on-blur-field="emitOnBlurField"
              @on-input-field="emitOnInputField"
            />
          </li>
        </template>
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
  [class^='basicFieldUnit0001__fieldColumn0'] {
    flex: 1 1 100%;
  }
  .basicFieldUnit0001__plainTextColumnLast,
  [class^='basicFieldUnit0001__plainTextColumn0'] {
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

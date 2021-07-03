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
        <template v-for="indexStr in ['01', '02', '03', '04']">
          <li
            v-if="textColumnContentObj[`field${indexStr}`] !== undefined"
            :key="`textColumn${indexStr}`"
            :class="`selectFieldUnit0001__plainTextColumn${indexStr}`"
            v-text="textColumnContentObj[`field${indexStr}`]"
          />
          <li
            v-if="namePropertyObj[`field${indexStr}`] !== undefined"
            :key="`fieldColumn${indexStr}`"
            :class="`selectFieldUnit0001__fieldColumn${indexStr}`"
          >
            <SelectField0001
              :identifiers="[...identifiers, `selectField${indexStr}`]"
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
              :options="optionsObj[`field${indexStr}`]"
              @on-blur-field="emitOnBlurField"
              @on-change-field="emitOnChangeField"
            />
          </li>
        </template>
        <li
          v-if="textColumnContentObj.last !== undefined"
          class="selectFieldUnit0001__plainTextColumnLast"
          v-text="textColumnContentObj.last"
        />
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
import selectFieldUnitOrRadioFieldUnit from '~/mixins/common/select_field_unit_or_radio_field_unit'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
  },
  mixins: [everyChild, fieldUnitBase, selectFieldUnitOrRadioFieldUnit],
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
  [class^='selectFieldUnit0001__fieldColumn0'] {
    flex: 1 1 100%;
  }
  .selectFieldUnit0001__plainTextColumnLast,
  [class^='selectFieldUnit0001__plainTextColumn0'] {
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

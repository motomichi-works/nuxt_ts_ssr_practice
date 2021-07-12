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
      <ul class="basicFieldUnit0001__mainContentsGroup">
        <template v-for="indexStr in ['01', '02', '03', '04']">
          <li
            v-if="
              namePropertyObj[`item${indexStr}`] !== undefined ||
              textColumnContentObj[`item${indexStr}`] !== undefined
            "
            :key="`item${indexStr}`"
            :class="`basicFieldUnit0001__item${indexStr}`"
          >
            <div v-if="namePropertyObj[`item${indexStr}`] !== undefined">
              <BasicField0001
                :identifiers="[...identifiers, `field${indexStr}`]"
                :namespace="namespace"
                :field-value-obj="fieldValueObj"
                :realtime-errors-obj="realtimeErrorsObj"
                :is-tainted-obj="isTaintedObj"
                :modifiers="fieldModifiersObj[`item${indexStr}`]"
                :validator-names-that-depends-on-dynamic-options="
                  validatorNamesThatDependsOnDynamicOptionsObj[
                    `item${indexStr}`
                  ]
                "
                :name-property="namePropertyObj[`item${indexStr}`]"
                :shared-key="sharedKey"
                :is-disabled="isDisabled"
                :is-readonly="isReadonly"
                :placeholder="placeholderObj[`item${indexStr}`]"
                :maxlength="maxlengthObj[`item${indexStr}`]"
                :left-icon="leftIconObj[`item${indexStr}`]"
                :right-icon="rightIconObj[`item${indexStr}`]"
                @on-blur-field="emitOnBlurField"
                @on-input-field="emitOnInputField"
              />
            </div>
            <div
              v-if="textColumnContentObj[`item${indexStr}`] !== undefined"
              class="basicFieldUnit0001__plainTextWrapper"
              v-text="textColumnContentObj[`item${indexStr}`]"
            />
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
  .basicFieldUnit0001__mainContentsGroup {
    display: flex;
    align-items: center;
    & > li:not(:first-child) {
      margin-left: 0.5em;
    }
  }
  // [class^='basicFieldUnit0001__item0'] {
  //   flex: 1 1 100%;
  // }
  // .basicFieldUnit0001__item00,
  // [class^='basicFieldUnit0001__plainText0'] {
  //   white-space: nowrap;
  // }
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

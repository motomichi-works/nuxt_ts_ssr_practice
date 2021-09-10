<template>
  <section :data-identifier="identifier" class="basicFieldUnit0001">
    <div
      v-if="headingText.length > 0"
      class="basicFieldUnit0001__headingWrapper"
    >
      <FieldHeading0001
        :identifier="`${identifier}/FieldHeading`"
        :text="headingText"
        :badge-type="badgeType"
      />
    </div>
    <div class="basicFieldUnit0001__body">
      <div
        v-if="combinationField !== null"
        class="basicFieldUnit0001__combinationFieldWrapper"
      >
        <input
          type="hidden"
          :value="fieldValueObj[combinationField.sharedKey]"
          :name="combinationField.name"
        />
      </div>
      <ul class="basicFieldUnit0001__mainContentsGroup">
        <template v-for="(item, index) in items">
          <li
            v-if="item.field || item.plainText"
            :key="`item${index}`"
            :class="`basicFieldUnit0001__item${index}`"
          >
            <div class="basicFieldUnit0001__itemBody">
              <div v-if="item.field" class="basicFieldUnit0001__fieldWrapper">
                <BasicField0001
                  :identifier="`${identifier}/Field${index}`"
                  :namespace="namespace"
                  :field-value-obj="fieldValueObj"
                  :is-tainted-obj="isTaintedObj"
                  :has-realtime-errors="
                    item.field.realtimeErrors.length > 0 ||
                    hasCombinationFieldRealtimeErrors
                  "
                  :modifiers="item.field.fieldModifiers"
                  :name="item.field.name"
                  :type="item.field.type"
                  :shared-key="item.field.sharedKey"
                  :is-disabled="item.field.isDisabled"
                  :is-readonly="item.field.isReadonly"
                  :placeholder="item.field.placeholder"
                  :maxlength="item.field.maxlength"
                  :left-icon="item.field.leftIcon"
                  :right-icon="item.field.rightIcon"
                  :combination-field="combinationField"
                  @blur-field="$_emitBlurField"
                  @input-field="$_emitInputField"
                />
              </div>
              <div
                v-if="item.plainText"
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
    <template v-for="(item, index) in items">
      <div
        v-if="item.field && item.field.realtimeErrors.length > 0"
        :key="`item${index}`"
        class="basicFieldUnit0001__errorMessagesWrapper"
      >
        <FieldErrorMessages0001
          :identifier="`${identifier}/FieldErrorMessages${index}`"
          :error-messages="item.field.realtimeErrors"
        />
      </div>
    </template>
    <div
      v-if="hasCombinationFieldRealtimeErrors"
      class="basicFieldUnit0001__errorMessagesWrapper"
    >
      <FieldErrorMessages0001
        :identifier="`${identifier}/CombinationFieldErrorMessages`"
        :error-messages="combinationField.realtimeErrors"
      />
    </div>
  </section>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { basicFieldUnit } from '~/mixins/common/molecules_and_atoms/basic_field_unit'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  mixins: [everyChild, basicFieldUnit],
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

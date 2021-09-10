<template>
  <section :data-identifier="identifier" class="selectFieldUnit0001">
    <div
      v-if="headingText.length > 0"
      class="selectFieldUnit0001__headingWrapper"
    >
      <FieldHeading0001
        :identifier="`${identifier}/FieldHeading`"
        :text="headingText"
        :badge-type="badgeType"
      />
    </div>
    <div class="selectFieldUnit0001__body">
      <div
        v-if="combinationField !== null"
        class="selectFieldUnit0001__combinationFieldWrapper"
      >
        <input
          type="hidden"
          :value="fieldValueObj[combinationField.sharedKey]"
          :name="combinationField.name"
        />
      </div>
      <ul class="selectFieldUnit0001__mainContentsGroup">
        <template v-for="(item, index) in items">
          <li
            v-if="item.field || item.plainText"
            :key="`item${index}`"
            :class="`selectFieldUnit0001__item${index}`"
          >
            <div class="selectFieldUnit0001__itemBody">
              <div v-if="item.field" class="selectFieldUnit0001__fieldWrapper">
                <SelectField0001
                  :identifier="`${identifier}/Field${index}`"
                  :namespace="namespace"
                  :field-value-obj="fieldValueObj"
                  :is-tainted-obj="isTaintedObj"
                  :has-realtime-errors="
                    item.field.realtimeErrors.length > 0 ||
                    hasCombinationFieldRealtimeErrors
                  "
                  :block-class-name="'selectField0001'"
                  :modifiers="item.field.fieldModifiers"
                  :name="item.field.name"
                  :shared-key="item.field.sharedKey"
                  :is-disabled="item.field.isDisabled"
                  :is-readonly="item.field.isReadonly"
                  :options="item.field.options"
                  :combination-field="combinationField"
                  @blur-field="$_emitBlurField"
                  @change-field="$_emitChangeField"
                />
              </div>
              <div
                v-if="item.plainText"
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
    <template v-for="(item, index) in items">
      <div
        v-if="item.field && item.field.realtimeErrors.length > 0"
        :key="`item${index}`"
        class="selectFieldUnit0001__errorMessagesWrapper"
      >
        <FieldErrorMessages0001
          :identifier="`${identifier}/FieldErrorMessages${index}`"
          :error-messages="item.field.realtimeErrors"
        />
      </div>
    </template>
    <div
      v-if="hasCombinationFieldRealtimeErrors"
      class="selectFieldUnit0001__errorMessagesWrapper"
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

// import components/molecules_and_atoms
import SelectField0001 from '~/components/common/molecules_and_atoms/select_field_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { selectFieldUnitOrRadioFieldUnit } from '~/mixins/common/molecules_and_atoms/select_field_unit_or_radio_field_unit'

// Vue.extend
export default Vue.extend({
  name: 'SelectFieldUnit0001',
  components: {
    SelectField0001,
  },
  mixins: [everyChild, selectFieldUnitOrRadioFieldUnit],
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

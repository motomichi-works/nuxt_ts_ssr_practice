<template>
  <section :data-selector="joinedIdentifiers" class="basicFieldUnit0001">
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
      <div class="basicFieldUnit0001__fieldWrapper">
        <BasicField0001
          :identifiers="[...identifiers, 'field']"
          :namespace="namespace"
          :field-value-obj="fieldValueObj"
          :realtime-errors-obj="realtimeErrorsObj"
          :modifiers="fieldModifiers"
          :validator-names-that-depends-on-dynamic-options="
            validatorNamesThatDependsOnDynamicOptions
          "
          :name-property="nameProperty"
          :shared-key="sharedKey"
          :is-disabled="isDisabled"
          :is-readonly="isReadonly"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :left-icon="leftIcon"
          :right-icon="rightIcon"
          @on-blur-field="emitOnBlurField"
          @on-input-field="emitOnInputField"
        />
      </div>
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
import Vue, { PropType } from 'vue'
import { IconDefinition } from '@fortawesome/fontawesome-common-types/index'

// import components/common
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import fieldUnitBase from '~/mixins/common/field_unit_base'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001',
  components: {
    BasicField0001,
  },
  mixins: [everyChild, fieldUnitBase],
  props: {
    fieldModifiers: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    placeholder: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    maxlength: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    leftIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
    rightIcon: {
      type: Object as PropType<IconDefinition>,
      required: false,
      default: () => null,
    },
  },
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
  .basicFieldUnit0001__fieldWrapper {
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

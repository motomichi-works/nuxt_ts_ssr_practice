<template>
  <div :data-selector="identifierStr" class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <Heading0001
        :identifiers="[identifierStr, 'Heading0001']"
        text="styleguides/index.vue"
        :modifier-classes="['heading-0001--lv-1']"
        :tag-name="'h1'"
      />
    </div>
    <div class="l-contents-type-0001__body">
      <component
        :is="component.name"
        v-for="component in components"
        :key="component.identifiers.join('_')"
        :identifiers="component.identifiers"
        :constraints-base-of-all="constraintsBaseOfAll"
        :field-values="fieldValues"
        :realtime-errors="realtimeErrors"
        @on-input-field="onInputField"
        @on-change-field="onChangeField"
        @on-blur-field="onBlurField"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// settings
import { namespace } from '~/settings/pages/styleguides/index'

// store, store types
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// import components/pages
import Badge0001Container from '~/components/pages/styleguides/badge_0001_container/index.vue'
import BasicField0001Container from '~/components/pages/styleguides/basic_field_0001_container/index.vue'
import BasicFieldUnit0001Container from '~/components/pages/styleguides/basic_field_unit_0001_container/index.vue'
import FieldErrorMessages0001Container from '~/components/pages/styleguides/field_error_messages_0001_container/index.vue'
import FieldHeading0001Container from '~/components/pages/styleguides/field_heading_0001_container/index.vue'
import FontAwesome5Container from '~/components/pages/styleguides/font_awesome_5_container/index.vue'
import Heading0001Container from '~/components/pages/styleguides/heading_0001_container/index.vue'
import SelectField0001Container from '~/components/pages/styleguides/select_field_0001_container/index.vue'
import SelectFieldUnit0001Container from '~/components/pages/styleguides/select_field_unit_0001_container/index.vue'

// utils
import {
  constraintsBaseOfAll,
  ConstraintsBaseOfAll,
} from '~/utils/validator/constraints_base_of_all'
import validateSingle from '~/utils/validate_single'

// define types
type ArgsOfOnInputField = {
  key: string
  value: string
  eventType: 'input'
  validatorNames: string[]
}
type ArgsOfOnChangeField = {
  key: string
  value: string
  eventType: 'change'
  validatorNames: string[]
}
type ArgsOfOnBlurField = {
  key: string
  value: string
  eventType: 'blur'
  validatorNames: string[]
}
type ArgsOfChangeRealtimeErrors = {
  key: string
  value: string[]
}
type ArgsOfChangeFieldValue = {
  key: string
  value: string
}

// Vue.extend
export default Vue.extend({
  components: {
    Heading0001,
    Badge0001Container,
    BasicField0001Container,
    BasicFieldUnit0001Container,
    FieldErrorMessages0001Container,
    FieldHeading0001Container,
    FontAwesome5Container,
    Heading0001Container,
    SelectField0001Container,
    SelectFieldUnit0001Container,
  },
  computed: {
    identifierStr() {
      return 'Contents'
    },
    constraintsBaseOfAll(): ConstraintsBaseOfAll {
      return constraintsBaseOfAll
    },
    fieldValues(): FieldValues {
      return this.$store.getters[`${namespace}/fieldValues`]
    },
    realtimeErrors(): RealtimeErrors {
      return this.$store.getters[`${namespace}/realtimeErrors`]
    },
    components() {
      const componentNames = [
        'Badge0001Container',
        'BasicField0001Container',
        'BasicFieldUnit0001Container',
        'FieldErrorMessages0001Container',
        'FieldHeading0001Container',
        'FontAwesome5Container',
        'Heading0001Container',
        'SelectField0001Container',
        'SelectFieldUnit0001Container',
      ] as const

      const components = componentNames.map((name) => {
        return { name, identifiers: [name] }
      })

      return components
    },
  },
  methods: {
    onInputField(payload: ArgsOfOnInputField) {
      const validationResult = validateSingle(
        payload,
        this.constraintsBaseOfAll,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onChangeField(payload: ArgsOfOnChangeField) {
      const validationResult = validateSingle(
        payload,
        this.constraintsBaseOfAll,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      const validationResult = validateSingle(
        payload,
        this.constraintsBaseOfAll,
        this.fieldValues
      )
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },

    changeRealtimeErrors(args: ArgsOfChangeRealtimeErrors): void {
      this.$store.commit(`${namespace}/changeRealtimeErrors`, args)
    },
    changeFieldValue(args: ArgsOfChangeFieldValue): void {
      this.$store.commit(`${namespace}/changeFieldValue`, args)
    },
  },
})
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l_contents_type_0001';
</style>

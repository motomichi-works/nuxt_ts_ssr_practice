<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">BasicFieldUnit0001</h2>
    </div>
    <div class="mod-container-0001__body">
      <BasicFieldUnit0001
        :identifiers="[...identifiers, 'EmailFieldUnit']"
        :validator-names="['customEmail']"
        :value="fieldValues['styleguides[email]']"
        :name-property="'styleguides[email]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder="'プレースホルダー'"
        :maxlength="'100'"
        :heading-text="'メールアドレス'"
        :is-required="true"
        :realtime-errors="realtimeErrors['styleguides[email]']"
        @on-blur-field="onBlurField"
        @on-input-field="onInputField"
      />
      <BasicFieldUnit0001
        :identifiers="[...identifiers, 'NameKanaFieldUnit']"
        :validator-names="['katakana']"
        :value="fieldValues['styleguides[name_kana]']"
        :name-property="'styleguides[name_kana]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder="'プレースホルダー'"
        :maxlength="'100'"
        :heading-text="'お名前（カナ）'"
        :is-required="true"
        :realtime-errors="realtimeErrors['styleguides[name_kana]']"
        @on-blur-field="onBlurField"
        @on-input-field="onInputField"
      />
    </div>
  </section>
</template>
<script lang="ts">
import validate from 'validate.js'
import Vue, { PropType } from 'vue'
// mixins
import formBase from '~/mixins/form_base'

import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

import constraintsBase, {
  Constraints,
} from '~/utils/validator/pages/styleguides/index/constraints'

import BasicFieldUnit0001, {
  ArgsOfOnInputField,
  ArgsOfOnBlurField,
} from '~/components/common/basic-field-unit-0001/index.vue'

const cloneDeep = require('lodash.clonedeep')

type ArgsOfChangeRealtimeErrors = {
  key: string
  value: string[]
}

type ArgsOfChangeFieldValue = {
  key: string
  value: string
}

type ArgsOfValidateSingle = {
  key: string
  value: string
  eventType: 'input' | 'blur'
  validatorNames: string[]
}

export default Vue.extend({
  name: 'BasicFieldUnit0001Container',
  components: {
    BasicFieldUnit0001,
  },
  mixins: [formBase],
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('_')
    },
    constraints(): Constraints {
      const constraintsWithOptions = this.addOptionsToConstraints(
        constraintsBase
      )
      return constraintsWithOptions
    },
    fieldValues() {
      return this.$store.getters['styleguides/fieldValues'] as FieldValues
    },
    realtimeErrors() {
      return this.$store.getters['styleguides/realtimeErrors'] as RealtimeErrors
    },
  },
  methods: {
    addOptionsToConstraints(args: Constraints): Constraints {
      const constraints: Constraints = cloneDeep(args)
      const fieldValues = this.fieldValues as FieldValues
      const constraintsKeys = Object.keys(constraints)

      constraintsKeys.forEach((constraintsKey) => {
        const validadorNames = Object.keys(constraints[constraintsKey])
        validadorNames.forEach((validadorName) => {
          constraints[constraintsKey][validadorName].prevValues = fieldValues
        })
      })

      return constraints
    },
    onInputField(payload: ArgsOfOnInputField) {
      const validationResult = this.validateSingle(payload)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    onBlurField(payload: ArgsOfOnBlurField) {
      const validationResult = this.validateSingle(payload)
      // eslint-disable-next-line no-console
      // console.log('validationResult: ', validationResult)

      this.changeRealtimeErrors({
        key: payload.key,
        value: validationResult,
      })
      this.changeFieldValue(payload)
    },
    validateSingle(args: ArgsOfValidateSingle): string[] {
      const constraintsKey = args.key
      const constraint = this.constraints[constraintsKey]

      args.validatorNames.forEach((validatorName) => {
        constraint[validatorName].eventType = args.eventType
      })

      const result = validate.single(
        args.value,
        this.constraints[constraintsKey]
      )

      return result ?? []
    },
    changeRealtimeErrors(args: ArgsOfChangeRealtimeErrors): void {
      this.$store.commit('styleguides/changeRealtimeErrors', args)
    },
    changeFieldValue(args: ArgsOfChangeFieldValue): void {
      this.$store.commit('styleguides/changeFieldValue', args)
    },
  },
})
</script>
<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

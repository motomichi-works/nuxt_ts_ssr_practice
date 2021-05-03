<template>
  <div class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">
        styleguides/index.vue
      </h1>
    </div>
    <div class="l-contents-type-0001__body">
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">badge-0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <div>
            <Badge0001 text="必須" />
          </div>
          <div>
            <Badge0001
              text="任意"
              :modifier-classes="['badge-0001--bg-color-gray']"
            />
          </div>
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">field-heading-0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <FieldHeading0001 text="h2見出し" />
          <FieldHeading0001 text="h3見出し" level="h3" />
          <FieldHeading0001 text="h2見出し" :is-required="false" />
          <FieldHeading0001 text="h2見出し" :is-required="false" level="h3" />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">fontawesome5</h2>
        </div>
        <div class="mod-container-0001__body">
          <fa :icon="fa.search" />
          <fa :icon="fa.searchPlus" />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">BasicField0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <BasicField0001
            :module-ids="['basicField0001Container', 'basicFieldA']"
            :validator-names="['customEmail']"
            :value="''"
            :name-property="'hoge'"
            :is-disabled="false"
            :is-readonly="false"
            :placeholder="'プレースホルダー'"
            :maxlength="'10'"
          />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">FieldErrorMessages0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <FieldErrorMessages0001
            :error-messages="[
              'エラーメッセージサンプル1',
              'エラーメッセージサンプル2',
            ]"
          />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">BasicFieldUnit0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <BasicFieldUnit0001
            :module-ids="['basicFieldUnit0001Container', 'emailFieldUnit']"
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
            :module-ids="['basicFieldUnit0001Container', 'nameKanaFieldUnit']"
            :validator-names="['customEmail']"
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
    </div>
  </div>
</template>

<script lang="ts">
import validate from 'validate.js'
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

import { customEmail } from '~/utils/validator/constraintFunctions'

import Badge0001 from '~/components/common/badge-0001/index.vue'
import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import BasicFieldUnit0001, {
  ArgsOfOnInputField,
  ArgsOfOnBlurField,
} from '~/components/common/basic-field-unit-0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

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
  components: {
    Badge0001,
    BasicField0001,
    BasicFieldUnit0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  computed: {
    constraints() {
      const fieldValues = this.fieldValues as FieldValues

      return {
        'styleguides[email]': customEmail('メールアドレス', fieldValues),
        'styleguides[name_kana]': customEmail('メールアドレス', fieldValues),
      } as any
    },
    fieldValues() {
      return this.$store.getters['styleguides/fieldValues'] as FieldValues
    },
    realtimeErrors() {
      return this.$store.getters['styleguides/realtimeErrors'] as RealtimeErrors
    },
    fa() {
      return {
        search: faSearch,
        searchPlus: faSearchPlus,
      }
    },
  },
  methods: {
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
// layouts
@import '~/assets/scss/layouts/l-contents-type-0001';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

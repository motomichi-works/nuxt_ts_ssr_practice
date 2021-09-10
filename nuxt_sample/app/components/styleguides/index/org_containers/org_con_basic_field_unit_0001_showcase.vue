<template>
  <OrgPreShared0001
    :identifier="identifier"
    org-heading-text="BasicFieldUnit0001"
  >
    <BasicFieldUnit0001
      :identifier="`${identifier}/BasicFieldUnitEmail`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :is-tainted-obj="isTaintedObj"
      :combination-field="null"
      :items="[
        {
          field: {
            name: 'styleguides[basic_field_unit_0001_email]',
            sharedKey: 'styleguides[basic_field_unit_0001_email]',
            type: 'text',
            realtimeErrors:
              realtimeErrorsObj['styleguides[basic_field_unit_0001_email]'],
            placeholder: 'placeholder@example.com',
            maxlength: '100',
            leftIcon: fa.search,
            rightIcon: fa.search,
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: 'サンプルテキスト',
        },
      ]"
      :descriptions="['例: placeholder@example.com']"
      :heading-text="'メールアドレス'"
      :badge-type="'required'"
      @blur-field="$_emitBlurField"
      @input-field="$_emitInputField"
    />
    <BasicFieldUnit0001
      :identifier="`${identifier}/BasicFieldUnitFullNameKana`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :is-tainted-obj="isTaintedObj"
      :combination-field="{
        name: 'styleguides[basic_field_unit_0001_full_name_kana]',
        sharedKey: 'styleguides[basic_field_unit_0001_full_name_kana]',
        combinationSharedKeys: [
          'styleguides[basic_field_unit_0001_family_name_kana]',
          'styleguides[basic_field_unit_0001_given_name_kana]',
        ],
        realtimeErrors:
          realtimeErrorsObj[
            'styleguides[basic_field_unit_0001_full_name_kana]'
          ],
      }"
      :items="[
        {
          field: {
            name: 'styleguides[basic_field_unit_0001_family_name_kana]',
            sharedKey: 'styleguides[basic_field_unit_0001_family_name_kana]',
            type: 'text',
            realtimeErrors:
              realtimeErrorsObj[
                'styleguides[basic_field_unit_0001_family_name_kana]'
              ],
            placeholder: 'ミョウジ',
            maxlength: '100',
            leftIcon: null,
            rightIcon: null,
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: null,
        },
        {
          field: {
            name: 'styleguides[basic_field_unit_0001_given_name_kana]',
            sharedKey: 'styleguides[basic_field_unit_0001_given_name_kana]',
            type: 'text',
            realtimeErrors:
              realtimeErrorsObj[
                'styleguides[basic_field_unit_0001_given_name_kana]'
              ],
            placeholder: 'ナマエ',
            maxlength: '100',
            leftIcon: null,
            rightIcon: null,
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: null,
        },
      ]"
      :descriptions="['全角カナで入力してください。']"
      :heading-text="'お名前（カナ）'"
      :badge-type="'required'"
      @blur-field="$_emitBlurField"
      @input-field="$_emitInputField"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import BasicFieldUnit0001 from '~/components/common/molecules_and_atoms/basic_field_unit_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgConBasicFieldUnit0001Showcase',
  components: {
    OrgPreShared0001,
    BasicFieldUnit0001,
  },
  mixins: [everyChild, containingTheField],
  computed: {
    fa() {
      return {
        search: faSearch,
      }
    },
  },
})
</script>
<style lang="scss" scoped></style>

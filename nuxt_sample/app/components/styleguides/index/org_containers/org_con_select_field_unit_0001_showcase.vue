<template>
  <OrgPreShared0001
    :identifier="identifier"
    org-heading-text="SelectFieldUnit0001"
  >
    <SelectFieldUnit0001
      :identifier="`${identifier}/SelectFieldUnit0001A`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :is-tainted-obj="isTaintedObj"
      :combination-field="null"
      :items="[
        {
          field: {
            name: 'styleguides[select_field_unit_0001_a]',
            sharedKey: 'styleguides[select_field_unit_0001_a]',
            realtimeErrors:
              realtimeErrorsObj['styleguides[select_field_unit_0001_a]'],
            options: [
              { label: '選択してください', value: '' },
              { label: 'SelectFieldUnitAの選択肢1', value: 'value1' },
              { label: 'SelectFieldUnitAの選択肢2', value: 'value2' },
            ],
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: 'サンプルテキスト',
        },
      ]"
      :descriptions="['説明文1', '説明文2']"
      :heading-text="'セレクトフィールドユニット0001A'"
      :badge-type="'required'"
      @blur-field="$_emitBlurField"
      @change-field="$_emitChangeField"
    />
    <SelectFieldUnit0001
      :identifier="`${identifier}/SelectFieldUnit0001B`"
      :namespace="namespace"
      :field-value-obj="fieldValueObj"
      :is-tainted-obj="isTaintedObj"
      :combination-field="{
        name: 'styleguides[select_field_unit_0001_b_combination_sample]',
        sharedKey: 'styleguides[select_field_unit_0001_b_combination_sample]',
        combinationSharedKeys: [
          'styleguides[select_field_unit_0001_b_01]',
          'styleguides[select_field_unit_0001_b_02]',
        ],
        realtimeErrors:
          realtimeErrorsObj[
            'styleguides[select_field_unit_0001_b_combination_sample]'
          ],
      }"
      :items="[
        {
          field: {
            name: 'styleguides[select_field_unit_0001_b_01]',
            sharedKey: 'styleguides[select_field_unit_0001_b_01]',
            realtimeErrors:
              realtimeErrorsObj['styleguides[select_field_unit_0001_b_01]'],
            options: [
              { label: '選択してください', value: '' },
              { label: 'SelectFieldUnitB01の選択肢1', value: 'value1' },
              { label: 'SelectFieldUnitB01の選択肢2', value: 'value2' },
            ],
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: 'サンプルテキスト',
        },
        {
          field: {
            name: 'styleguides[select_field_unit_0001_b_02]',
            sharedKey: 'styleguides[select_field_unit_0001_b_02]',
            realtimeErrors:
              realtimeErrorsObj['styleguides[select_field_unit_0001_b_02]'],
            options: [
              { label: '選択してください', value: '' },
              { label: 'SelectFieldUnitB02の選択肢1', value: 'value1' },
              { label: 'SelectFieldUnitB02の選択肢2', value: 'value2' },
            ],
            fieldModifiers: [],
            isDisabled: false,
            isReadonly: false,
          },
          plainText: 'サンプルテキスト',
        },
      ]"
      :descriptions="['説明文1', '説明文2']"
      :heading-text="'セレクトフィールドユニット0001B'"
      :badge-type="'required'"
      @blur-field="$_emitBlurField"
      @change-field="$_emitChangeField"
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
import SelectFieldUnit0001 from '~/components/common/molecules_and_atoms/select_field_unit_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { containingTheField } from '~/mixins/common/org_containers/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'OrgConSelectFieldUnit0001Showcase',
  components: {
    OrgPreShared0001,
    SelectFieldUnit0001,
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

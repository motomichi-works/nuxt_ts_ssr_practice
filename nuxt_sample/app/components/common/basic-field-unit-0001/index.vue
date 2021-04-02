<template>
  <div class="basic-field-unit-0001">
    <div class="basic-field-unit-0001__heading-wrapper">
      <FieldHeading0001 text="h2見出し" />
    </div>
    <div class="basic-field-unit-0001__body">
      <div class="basic-field-unit-0001__field-wrapper">
        <BasicField0001
          :module-names="[...moduleNames, 'basicField000101']"
          :name-property="'hoge'"
          :is-disabled="false"
          :is-readonly="false"
          :placeholder="'プレースホルダー'"
          :maxlength="'10'"
        />
      </div>
      <ul class="basic-field-unit-0001__hint-group">
        <li class="basic-field-unit-0001__hint-item">ほげほげほげ</li>
        <li class="basic-field-unit-0001__hint-item">ふがふがふが</li>
      </ul>
    </div>
    <div class="basic-field-unit-0001__error-messages-wrapper">
      <FieldErrorMessages0001
        :error-messages="[
          'エラーメッセージサンプル',
          'エラーメッセージサンプル',
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

export default Vue.extend({
  name: 'BasicFieldUnit0001',
  components: {
    BasicField0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  props: {
    moduleNames: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/basic-field-unit-0001';
</style>

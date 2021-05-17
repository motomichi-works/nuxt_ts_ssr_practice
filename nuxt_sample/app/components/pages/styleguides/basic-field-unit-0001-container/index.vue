<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="BasicFieldUnit0001"
      />
    </div>
    <div class="container-0001__body">
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
// import node_modules
import Vue from 'vue'

// import components/common
import BasicFieldUnit0001 from '~/components/common/basic-field-unit-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'
import formBase from '~/mixins/form_base'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001Container',
  components: {
    BasicFieldUnit0001,
    Heading0001,
  },
  mixins: [base, formBase],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container-0001';
</style>

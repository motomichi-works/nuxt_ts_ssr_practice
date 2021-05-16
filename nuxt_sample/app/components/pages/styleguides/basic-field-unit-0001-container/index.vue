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
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import formBase from '~/mixins/form_base'

// components
import BasicFieldUnit0001 from '~/components/common/basic-field-unit-0001/index.vue'

// Vue.extend
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

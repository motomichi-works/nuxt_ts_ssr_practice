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
        :identifiers="[...identifiers, 'BasicFieldUnit0001Email']"
        :validator-names="['customEmail']"
        :value="fieldValues['styleguides[basic_field_unit_0001_email]']"
        :name-property="'styleguides[basic_field_unit_0001_email]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder="'placeholder@example.com'"
        :maxlength="'100'"
        :left-icon="fa.search"
        :right-icon="fa.search"
        :descriptions="['例: placeholder@example.com']"
        :heading-text="'メールアドレス'"
        :is-required="true"
        :realtime-errors="
          realtimeErrors['styleguides[basic_field_unit_0001_email]']
        "
        @on-blur-field="emitOnBlurField"
        @on-input-field="emitOnInputField"
      />
      <BasicFieldUnit0001
        :identifiers="[...identifiers, 'BasicFieldUnit0001NameKana']"
        :validator-names="['katakana']"
        :value="fieldValues['styleguides[basic_field_unit_0001_name_kana]']"
        :name-property="'styleguides[basic_field_unit_0001_name_kana]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder="'サンプル タロウ'"
        :maxlength="'100'"
        :left-icon="fa.search"
        :right-icon="fa.search"
        :descriptions="['例: サンプル タロウ']"
        :heading-text="'お名前（カナ）'"
        :is-required="true"
        :realtime-errors="
          realtimeErrors['styleguides[basic_field_unit_0001_name_kana]']
        "
        @on-blur-field="emitOnBlurField"
        @on-input-field="emitOnInputField"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import components/common
import BasicFieldUnit0001 from '~/components/common/basic_field_unit_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicFieldUnit0001Container',
  components: {
    BasicFieldUnit0001,
    Heading0001,
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
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

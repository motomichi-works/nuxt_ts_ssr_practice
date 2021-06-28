<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="BasicField0001"
      />
    </div>
    <div class="container-0001__body">
      <BasicField0001
        :identifiers="[...identifiers, 'basicField0001A']"
        :modifiers="['basic-field-0001--size-md']"
        :validator-names="['presence']"
        :value="fieldValues['styleguides[basic_field_0001_a]']"
        :name-property="'styleguides[basic_field_0001_a]'"
        :is-disabled="false"
        :is-readonly="false"
        :placeholder="'プレースホルダー'"
        :maxlength="'100'"
        :left-icon="fa.search"
        :right-icon="fa.search"
        :has-realtime-errors="realtimeErrors.length > 0"
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
import BasicField0001 from '~/components/common/basic_field_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import containingTheField from '~/mixins/pages/styleguides/index/containing_the_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001Container',
  components: {
    BasicField0001,
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

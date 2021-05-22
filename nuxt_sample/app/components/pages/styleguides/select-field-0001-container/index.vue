<template>
  <section :data-selector="identifierStr" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'Heading0001']"
        text="SelectField0001"
      />
    </div>
    <div class="container-0001__body">
      <SelectField0001
        :identifiers="[...identifiers, 'selectFieldA']"
        :modifiers="['select-field-0001--size-md']"
        :validator-names="['customEmail']"
        :value="''"
        :name-property="'select_field_name'"
        :is-disabled="false"
        :is-readonly="false"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import SelectField0001 from '~/components/common/select-field-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'SelectField0001Container',
  components: {
    SelectField0001,
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container-0001';
</style>

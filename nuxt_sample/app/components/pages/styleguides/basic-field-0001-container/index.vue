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
        :identifiers="[...identifiers, 'basicFieldA']"
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
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import Heading0001 from '~/components/common/heading-0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001Container',
  components: {
    BasicField0001,
    Heading0001,
  },
  mixins: [base],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container-0001';
</style>

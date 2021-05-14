<template>
  <section :data-selector="identifierStr" class="mod-container-0001">
    <div class="mod-container-0001__heading-wrapper">
      <h2 class="mod-heading-0001">BasicField0001</h2>
    </div>
    <div class="mod-container-0001__body">
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
import Vue, { PropType } from 'vue'

import BasicField0001 from '~/components/common/basic-field-0001/index.vue'

export default Vue.extend({
  name: 'BasicField0001Container',
  components: {
    BasicField0001,
  },
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  computed: {
    identifierStr() {
      return this.identifiers.join('/')
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

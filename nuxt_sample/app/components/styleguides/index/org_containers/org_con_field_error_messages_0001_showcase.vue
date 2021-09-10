<template>
  <OrgPreShared0001
    :identifier="identifier"
    org-heading-text="FieldErrorMessages0001"
  >
    <FieldErrorMessages0001
      :identifier="`${identifier}/FieldErrorMessages`"
      :error-messages="[
        'エラーメッセージサンプル1',
        'エラーメッセージサンプル2',
      ]"
    />
  </OrgPreShared0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreShared0001 from '~/components/common/org_presentationals/org_pre_shared_0001.vue'

// import components/molecules_and_atoms
import FieldErrorMessages0001 from '~/components/common/molecules_and_atoms/field_error_messages_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConFieldErrorMessages0001Showcase',
  components: {
    OrgPreShared0001,
    FieldErrorMessages0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>

<template>
  <OrgPreGeneralPurpose0001
    :identifiers="[...identifiers, 'OrgPresentational']"
    org-presentational-heading-text="FieldErrorMessages0001"
  >
    <FieldErrorMessages0001
      :identifiers="[...identifiers, 'fieldErrorMessages']"
      :error-messages="[
        'エラーメッセージサンプル1',
        'エラーメッセージサンプル2',
      ]"
    />
  </OrgPreGeneralPurpose0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPreGeneralPurpose0001 from '~/components/common/org_presentationals/org_pre_general_purpose_0001.vue'

// import components/molecules_and_atoms
import FieldErrorMessages0001 from '~/components/common/molecules_and_atoms/field_error_messages_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgConFieldErrorMessages0001Showcase',
  components: {
    OrgPreGeneralPurpose0001,
    FieldErrorMessages0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>

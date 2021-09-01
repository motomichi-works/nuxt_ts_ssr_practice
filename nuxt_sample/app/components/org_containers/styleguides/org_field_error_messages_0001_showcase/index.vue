<template>
  <OrgPresentational0001
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
  </OrgPresentational0001>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/org_presentationals
import OrgPresentational0001 from '~/components/org_presentationals/org_presentational_0001/index.vue'

// import components/molecules_and_atoms
import FieldErrorMessages0001 from '~/components/molecules_and_atoms/shared/field_error_messages_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFieldErrorMessages0001Showcase',
  components: {
    OrgPresentational0001,
    FieldErrorMessages0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped></style>

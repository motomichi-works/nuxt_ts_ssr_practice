<template>
  <div :data-joined-identifiers="joinedIdentifiers" class="l-bodyInner0001">
    <Nuxt />
  </div>
</template>

<script lang="ts">
// mixins
import everyLayout from '~/mixins/common/every_layout'

export default {
  mixins: [everyLayout],
}
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l_body_inner_0001.scss';
</style>

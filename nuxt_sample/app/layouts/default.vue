<template>
  <div :data-identifier="identifier" class="layoutTypeDefault">
    <Nuxt />
  </div>
</template>

<script lang="ts">
// mixins
import { everyLayout } from '~/mixins/common/layouts/every_layout'

export default {
  mixins: [everyLayout],
}
</script>

<style lang="scss" scoped>
.layoutTypeDefault {
  display: block;
}
</style>

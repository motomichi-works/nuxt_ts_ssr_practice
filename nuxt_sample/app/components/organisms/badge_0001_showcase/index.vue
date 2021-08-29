<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="Badge0001"
      />
    </div>
    <div class="container-0001__body">
      <Badge0001 :identifiers="[...identifiers, 'badge']" text="必須" />
      <Badge0001
        :identifiers="[...identifiers, 'badgeA']"
        text="任意"
        :modifier-classes="['badge0001--bgColorGray']"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import Badge0001 from '~/components/common/badge_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001Showcase',
  components: {
    Badge0001,
    Heading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

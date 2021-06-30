<template>
  <section :data-selector="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="Heading0001"
      />
    </div>
    <div class="container-0001__body">
      <Heading0001
        :identifiers="[...identifiers, 'headingLv1']"
        text="Lv1の見出し"
        :modifier-classes="['heading0001--Lv1']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'headingLv2']"
        text="Lv2の見出し"
        :modifier-classes="['heading0001--Lv2']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'headingLv3']"
        text="Lv3の見出し"
        :modifier-classes="['heading0001--Lv3']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'headingLv4']"
        text="Lv4の見出し"
        :modifier-classes="['heading0001--Lv4']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'headingLv5']"
        text="Lv5の見出し"
        :modifier-classes="['heading0001--Lv5']"
        :tag-name="'h2'"
      />
      <Heading0001
        :identifiers="[...identifiers, 'headingLv6']"
        text="Lv6の見出し"
        :modifier-classes="['heading0001--Lv6']"
        :tag-name="'h2'"
      />
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Heading0001Container',
  components: {
    Heading0001,
  },
  mixins: [everyChild],
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

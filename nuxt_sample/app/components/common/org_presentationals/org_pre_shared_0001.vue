<template>
  <section :data-identifier="identifier" class="orgPreShared0001">
    <div class="orgPreShared0001__headingWrapper">
      <Heading0001
        :identifier="`${identifier}/OrgPreHeading`"
        :text="orgHeadingText"
      />
    </div>
    <div class="orgPreShared0001__body">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import Heading0001 from '~/components/common/molecules_and_atoms/heading_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgPreShared0001',
  components: {
    Heading0001,
  },
  mixins: [everyChild],
  props: {
    orgHeadingText: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.orgPreShared0001 {
  padding: 1px 16px;
  background-color: #ffffff;
  // .orgPreShared0001のpadding-topを補完する初期値
  > :first-child {
    margin-top: 15px;
  }
  // .orgPreShared0001のpadding-bottomを補完する初期値
  > :last-child {
    margin-bottom: 39px;
  }
  .orgPreShared0001__headingWrapper {
  }
  .orgPreShared0001__body {
    margin-top: 24px;
  }

  // 隣接兄弟要素セレクタによるマージン
  .orgPreShared0001 + & {
    margin-top: 48px;
  }
}
</style>

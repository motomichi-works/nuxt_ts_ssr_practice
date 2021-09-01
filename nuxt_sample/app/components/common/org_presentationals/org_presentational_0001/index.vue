<template>
  <section
    :data-joined-identifiers="joinedIdentifiers"
    class="orgPresentational0001"
  >
    <div class="orgPresentational0001__headingWrapper">
      <Heading0001
        :identifiers="[...identifiers, 'OrgPresentationalHeading']"
        :text="orgPresentationalHeadingText"
      />
    </div>
    <div class="orgPresentational0001__body">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import Heading0001 from '~/components/common/molecules_and_atoms/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgPresentational0001',
  components: {
    Heading0001,
  },
  mixins: [everyChild],
  props: {
    orgPresentationalHeadingText: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.orgPresentational0001 {
  padding: 1px 16px;
  background-color: #ffffff;
  // .orgPresentational0001のpadding-topを補完する初期値
  > :first-child {
    margin-top: 15px;
  }
  // .orgPresentational0001のpadding-bottomを補完する初期値
  > :last-child {
    margin-bottom: 39px;
  }
  .orgPresentational0001__headingWrapper {
  }
  .orgPresentational0001__body {
    margin-top: 24px;
  }

  // 隣接兄弟要素セレクタによるマージン
  .orgPresentational0001 + & {
    margin-top: 48px;
  }
}
</style>

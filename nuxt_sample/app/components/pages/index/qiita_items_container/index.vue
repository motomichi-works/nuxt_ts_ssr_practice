<template>
  <section :data-joined-identifiers="joinedIdentifiers" class="container-0001">
    <div class="container-0001__heading-wrapper">
      <Heading0001
        :identifiers="[...identifiers, 'heading']"
        text="qiitaのAPIから取得したitem情報のサンプル"
      />
    </div>
    <div class="container-0001__body">
      <ul v-if="qiitaItems.length > 0">
        <li
          v-for="(item, index) in qiitaItems"
          :key="`item.created_at__${index}`"
        >
          <p v-if="item.created_at">
            {{ item.created_at }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/common
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyChild from '~/mixins/common/every_child'

// Vue.extend
export default Vue.extend({
  name: 'Badge0001Container',
  components: {
    Heading0001,
  },
  mixins: [everyChild],
  props: {
    qiitaItems: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>
<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/container_0001';
</style>

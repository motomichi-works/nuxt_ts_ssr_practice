<template>
  <div :data-selector="identifierStr" class="field-heading-0001">
    <div class="field-heading-0001__badge-wrapper">
      <Badge0001
        :identifiers="[...identifiers, 'Badge']"
        :text="propsForBadge.text"
        :modifier-classes="propsForBadge.modifierClasses"
      />
    </div>
    <component :is="tagName" class="field-heading-0001__text">
      {{ text }}
    </component>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/common
import Badge0001 from '~/components/common/badge_0001/index.vue'

// mixins
import base from '~/mixins/base'

// Vue.extend
export default Vue.extend({
  name: 'FieldHeading0001',
  components: {
    Badge0001,
  },
  mixins: [base],
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    isRequired: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    tagName: {
      type: String as PropType<string>,
      default: 'h2',
    },
  },
  computed: {
    propsForBadge() {
      if (!this.isRequired) {
        return {
          text: '任意',
          modifierClasses: ['badge-0001--bg-color-gray'],
        }
      }

      return {
        text: '必須',
        modifierClasses: [],
      }
    },
  },
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/field_heading_0001';
</style>

<template>
  <div class="field-heading-0001">
    <div class="field-heading-0001__badge-wrapper">
      <Badge0001
        :identifiers="[...identifiers, 'Badge']"
        :text="propsForBadge.text"
        :modifier-classes="propsForBadge.modifierClasses"
      />
    </div>
    <component :is="level" class="field-heading-0001__text">
      {{ text }}
    </component>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Badge0001 from '~/components/common/badge-0001/index.vue'

export default Vue.extend({
  name: 'FieldHeading0001',
  components: {
    Badge0001,
  },
  props: {
    identifiers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    text: {
      type: String as PropType<string>,
      required: true,
    },
    isRequired: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    level: {
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
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// modules
@import '~/assets/scss/modules/field-heading-0001';
</style>

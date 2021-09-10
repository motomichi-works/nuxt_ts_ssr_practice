<template>
  <div :data-identifier="identifier" class="fieldHeading0001">
    <div class="fieldHeading0001__badgeWrapper">
      <Badge0001
        :identifier="`${identifier}/Badge`"
        :text="propsForBadge.text"
        :modifier-classes="propsForBadge.modifierClasses"
      />
    </div>
    <component :is="tagName" class="fieldHeading0001__text">
      {{ text }}
    </component>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/molecules_and_atoms
import Badge0001 from '~/components/common/molecules_and_atoms/badge_0001.vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'FieldHeading0001',
  components: {
    Badge0001,
  },
  mixins: [everyChild],
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    badgeType: {
      type: String as PropType<'required' | 'notRequired'>,
      required: false,
      default: 'required',
    },
    tagName: {
      type: String as PropType<string>,
      default: 'h2',
    },
  },
  computed: {
    propsForBadge() {
      if (this.badgeType === 'notRequired') {
        return {
          text: '任意',
          modifierClasses: ['badge0001--bgColorGray'],
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
.fieldHeading0001 {
  display: flex;
  .fieldHeading0001__badgeWrapper {
    & + .fieldHeading0001__text {
      margin-left: 8px;
    }
  }
  .fieldHeading0001__text {
    font-size: 16px;
    line-height: 26px;
  }
}
</style>

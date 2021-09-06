<template>
  <ul class="list0002">
    <li
      v-for="(innerItems, lv1Index) in items"
      :key="`${JSON.stringify(innerItems)}${lv1Index}`"
      class="list0002__item"
    >
      <template v-for="(element, lv2Index) in innerItems">
        <NuxtLink
          v-if="element.tagName === 'NuxtLink'"
          :key="`${JSON.stringify(innerItems)}${lv2Index}`"
          :class="element.className"
          :to="element.to"
          v-text="element.text"
        />
        <a
          v-else-if="element.tagName === 'a'"
          :key="`${JSON.stringify(innerItems)}${lv2Index}`"
          :class="element.className"
          :href="element.href"
          :target="element.isTargetBlank ? '_blank' : false"
          :rel="element.isTargetBlank ? 'noopener' : false"
          v-text="element.text"
        />
        <component
          :is="element.tagName"
          v-else
          :key="`${JSON.stringify(innerItems)}${lv2Index}`"
          :class="element.className"
          v-text="element.text"
        />
      </template>
    </li>
  </ul>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// types
type InnerItem =
  | {
      tagName: 'NuxtLink'
      text: string
      className: string
      to: string
    }
  | {
      tagName: 'a'
      text: string
      className: string
      href: string
      isTargetBlank: boolean
    }
  | {
      tagName: 'div' | 'span'
      text: string
      className: string
    }

type InnerItems = InnerItem[]

// Vue.extend
export default Vue.extend({
  name: 'List0002',
  mixins: [everyChild],
  props: {
    items: {
      type: Array as PropType<InnerItems[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.list0002 {
  font-size: 16px;
  .list0002__item {
    padding-left: 1em;
    &::before {
      content: '・';
      margin-left: -1em;
    }
  }
  .list0002__item + .list0002__item {
    margin-top: 0.25em;
  }
}
</style>

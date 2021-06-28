<template>
  <div :data-selector="identifierStr" :class="classes">
    <i v-if="!isReadonly" class="select-field-0001__icon-wrapper">
      <div class="select-field-0001__icon"></div>
    </i>
    <select
      v-if="!isReadonly"
      v-model="bindValue"
      type="text"
      :disabled="isDisabled"
      :name="nameProperty"
      class="select-field-0001__field"
      @blur="onBlur($event)"
    >
      <option
        v-for="item in options"
        :key="`${item.value}_${item.label}`"
        :value="item.value"
        v-text="item.label"
      />
    </select>
    <div
      v-if="isReadonly"
      class="select-field-0001__field select-field-0001__field--readonly"
    >
      <span class="select-field-0001__readonly-label" v-text="selectedLabel" />
      <input type="hidden" :value="bindValue" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import selectFieldRadioField from '~/mixins/common/select_field_radio_field'

// Vue.extend
export default Vue.extend({
  name: 'SelectField0001',
  mixins: [everyChild, selectFieldRadioField],
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/select_field_0001';
</style>

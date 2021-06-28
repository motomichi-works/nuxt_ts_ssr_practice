<template>
  <div :data-selector="identifierStr" :class="classes">
    <div v-if="isVisibleLeftIcon" class="basic-field-0001__icon-wrapper">
      <fa :icon="leftIcon" />
    </div>
    <input
      v-model="bindValue"
      type="text"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :name="nameProperty"
      :placeholder="placeholder"
      :maxlength="maxlength"
      class="basic-field-0001__field"
      @blur="onBlur($event)"
    />
    <div v-if="isVisibleRightIcon" class="basic-field-0001__icon-wrapper">
      <fa :icon="rightIcon" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import everyChild from '~/mixins/common/every_child'
import freeInputField from '~/mixins/common/free_input_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001',
  mixins: [everyChild, freeInputField],
})
</script>

<style lang="scss" scoped>
// modules
@import '~/assets/scss/modules/basic_field_0001';
</style>

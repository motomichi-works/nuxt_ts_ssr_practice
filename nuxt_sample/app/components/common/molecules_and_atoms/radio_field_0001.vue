<template>
  <div :data-identifier="identifier" :class="classes">
    <ul v-if="!isReadonly" class="radioField0001__group">
      <li
        v-for="item in options"
        :key="`${item.value}_${item.label}`"
        class="radioField0001__item"
      >
        <input
          :id="`${name}_${item.value}`"
          v-model="bindValue"
          class="radioField0001__field"
          :name="name"
          type="radio"
          :disabled="isDisabled"
          :value="item.value"
          @blur="$_handleBlur($event)"
        />
        <label
          :for="`${name}_${item.value}`"
          class="radioField0001__label"
          v-text="item.label"
        />
      </li>
    </ul>
    <div v-if="isReadonly" class="radioField0001__readonlyGroup">
      <span class="radioField0001__readonlyLabel" v-text="selectedLabel" />
      <input type="hidden" :value="bindValue" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { selectFieldOrRadioField } from '~/mixins/common/molecules_and_atoms/select_field_or_radio_field'

// Vue.extend
export default Vue.extend({
  name: 'RadioField0001',
  mixins: [everyChild, selectFieldOrRadioField],
})
</script>

<style lang="scss" scoped>
.radioField0001 {
  .radioField0001__group {
  }
  .radioField0001__item {
    position: relative;
  }
  .radioField0001__item + .radioField0001__item {
    margin-top: 12px;
  }
  .radioField0001__field {
    position: absolute;
    z-index: -4;
  }
  .radioField0001__label {
    width: 100%;
    display: block;
    background: #ffffff;
    font-size: 16px;
    line-height: 26px;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    border-color: #444444;
    padding: 9px 0 9px 44px;
    z-index: -3;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      display: block;
      border-radius: 50%;
      transform: translateY(-50%);
    }
    &::before {
      left: 12px;
      height: 20px;
      width: 20px;
      border-style: solid;
      border-width: 2px;
      border-color: #aaaaaa;
    }
    &::after {
      left: 18px;
      height: 12px;
      width: 12px;
    }
  }
  .radioField0001__label:hover {
    border-color: #aaaaaa;
    &::before {
      border-color: #ffa726;
    }
  }
  .radioField0001__field:checked + .radioField0001__label {
    &::after {
      background-color: #ffa726;
    }
  }
}
</style>

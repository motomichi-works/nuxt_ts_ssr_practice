<template>
  <div :data-identifier="identifier" :class="classes">
    <i v-if="!isReadonly" class="selectField0001__iconWrapper">
      <div class="selectField0001__icon"></div>
    </i>
    <select
      v-if="!isReadonly"
      v-model="bindValue"
      type="text"
      :disabled="isDisabled"
      :name="name"
      class="selectField0001__field"
      @blur="$_handleBlur($event)"
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
      class="selectField0001__field selectField0001__field--readonly"
    >
      <span class="selectField0001__readonlyLabel" v-text="selectedLabel" />
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
  name: 'SelectField0001',
  mixins: [everyChild, selectFieldOrRadioField],
})
</script>

<style lang="scss" scoped>
.selectField0001 {
  position: relative;
  font-size: 16px;

  .selectField0001__iconWrapper {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    color: #222222;
    pointer-events: none;
    left: 16px;
  }
  .selectField0001__icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #444444 transparent transparent transparent;
    border-width: 9.6px 8px 0 8px;
  }
  .selectField0001__field {
    appearance: none;
    display: block;
    width: 100%;
    border-style: solid;
    border-width: 2px;
    border-color: #444444;
    padding: 0 20px;
    box-sizing: border-box;
    background: #ffffff;
    color: #222222;
    border-radius: 4px;
    height: 44px;
    padding-left: 44px;
    font-size: 16px;
    &::placeholder {
      color: #cccccc;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 6px 0 #0000ff inset;
    }
    &[disabled] {
      // NOTE: !importantは原則として使用禁止です。ボタンとフィールドのdisabled、readonlyにだけ使用しています。
      background: #eeeeee !important;
      border-color: #cccccc !important;
      color: #cccccc;
      cursor: default;
    }
    &.selectField0001__field--readonly {
      border-color: transparent;
      background: none;
      color: #222222;
      padding-left: 20px !important;
    }
  }

  .selectField0001__readonlyLabel {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: text;
  }

  &.selectField0001--disabled {
    i.fa {
      color: #cccccc;
    }
  }

  &.selectField0001--invalid {
    .selectField0001__field {
      border-color: #ff0000;
      background: #ffeeee;
    }
  }

  &.selectField0001--sizeXl {
    font-size: 24px;
    .selectField0001__iconWrapper {
      left: 26px;
    }
    .selectField0001__icon {
      border-width: 14.4px 12px 0 12px;
    }
    .selectField0001__field {
      height: 80px;
      padding-left: 72px;
      font-size: 24px;
    }
  }
  &.selectField0001--sizeLg {
    font-size: 20px;
    .selectField0001__iconWrapper {
      left: 22px;
    }
    .selectField0001__icon {
      border-width: 12px 10px 0 10px;
    }
    .selectField0001__field {
      height: 58px;
      padding-left: 60px;
      font-size: 20px;
    }
  }
  // &.selectField0001--sizeMd {
  //   font-size: 16px;
  //   .selectField0001__iconWrapper {
  //     left: 16px;
  //   }
  //   .selectField0001__icon {
  //     border-width: 9.6px 8px 0 8px;
  //   }
  //   .selectField0001__field {
  //     height: 44px;
  //     padding-left: 44px;
  //     font-size: 16px;
  //   }
  // }
  &.selectField0001--sizeSm {
    font-size: 13px;
    .selectField0001__iconWrapper {
      left: 13px;
    }
    .selectField0001__icon {
      border-width: 7.2px 6px 0 6px;
    }
    .selectField0001__field {
      height: 30px;
      padding-left: 34px;
      font-size: 13px;
    }
  }
  &.selectField0001--sizeXs {
    font-size: 10px;
    .selectField0001__iconWrapper {
      left: 10px;
    }
    .selectField0001__icon {
      border-width: 6px 5px 0 5px;
    }
    .selectField0001__field {
      height: 20px;
      padding-left: 26px;
      font-size: 10px;
    }
  }
}
</style>

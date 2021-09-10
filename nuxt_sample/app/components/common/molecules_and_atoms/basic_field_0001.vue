<template>
  <div :data-identifier="identifier" :class="classes">
    <template v-if="type === 'textarea'">
      <textarea
        v-model="bindValue"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        class="basicField0001__field"
        @blur="$_handleBlur($event)"
      ></textarea>
    </template>
    <template v-else>
      <div v-if="isVisibleLeftIcon" class="basicField0001__iconWrapper">
        <FontAwesomeIconWrapper
          :identifier="`${identifier}/FontAwesomeIconWrapperLeft`"
          :icon="leftIcon"
        />
      </div>
      <input
        v-model="bindValue"
        :type="type"
        :disabled="isDisabled"
        :readonly="isReadonly"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        class="basicField0001__field"
        @blur="$_handleBlur($event)"
      />
      <div v-if="isVisibleRightIcon" class="basicField0001__iconWrapper">
        <FontAwesomeIconWrapper
          :identifier="`${identifier}/FontAwesomeIconWrapperRight`"
          :icon="rightIcon"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'
import { basicField } from '~/mixins/common/molecules_and_atoms/basic_field'

// Vue.extend
export default Vue.extend({
  name: 'BasicField0001',
  mixins: [everyChild, basicField],
})
</script>

<style lang="scss" scoped>
.basicField0001 {
  position: relative;
  font-size: 16px;

  &.basicField0001--iconAbsoluteLeft {
    .basicField0001__field {
      padding-left: 44px;
    }
  }
  &.basicField0001--iconAbsoluteRight {
    .basicField0001__field {
      padding-right: 44px;
    }
  }

  .basicField0001__iconWrapper {
    &:first-child {
      left: 16px;
    }
    &:last-child {
      right: 16px;
    }
    &:last-child,
    &:first-child {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      top: 0;
      color: #222222;
    }
  }
  .basicField0001__field {
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
    font-size: 16px;
    &::placeholder {
      color: #aaaaaa;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 6px 0 #0000ff inset;
    }
    &[readonly] {
      border-color: transparent;
      background: none;
      color: #222222;
      &:focus {
        box-shadow: none;
      }
    }
    &[disabled] {
      // NOTE: !importantは原則として使用禁止です。ボタンとフィールドのdisabled、readonlyにだけ使用しています。
      background: #eeeeee !important;
      border-color: #cccccc !important;
      color: #cccccc;
      cursor: default;
    }
  }
  textarea.basicField0001__field {
    display: block;
    resize: none;
    padding-top: 1em;
    padding-bottom: 1em;
    height: 200px;
  }
  &.basicField0001--disabled {
    i.fa {
      color: #cccccc;
    }
  }

  &.basicField0001--invalid {
    .basicField0001__field {
      border-color: #ff0000;
      background: #ffeeee;
    }
  }

  &.basicField0001--sizeXl {
    font-size: 24px;
    .basicField0001__iconWrapper {
      &:first-child {
        left: 26px;
      }
      &:last-child {
        right: 26px;
      }
    }
    .basicField0001__field {
      height: 80px;
      font-size: 24px;
    }
    &.basicField0001--iconAbsoluteLeft {
      .basicField0001__field {
        padding-left: 72px;
      }
    }
    &.basicField0001--iconAbsoluteRight {
      .basicField0001__field {
        padding-right: 72px;
      }
    }
  }
  &.basicField0001--sizeLg {
    font-size: 20px;
    .basicField0001__iconWrapper {
      &:first-child {
        left: 22px;
      }
      &:last-child {
        right: 22px;
      }
    }
    .basicField0001__field {
      height: 58px;
      font-size: 20px;
    }
    &.basicField0001--iconAbsoluteLeft {
      .basicField0001__field {
        padding-left: 60px;
      }
    }
    &.basicField0001--iconAbsoluteRight {
      .basicField0001__field {
        padding-right: 60px;
      }
    }
  }
  // &.basicField0001--sizeMd {
  //   font-size: 16px;
  //   .basicField0001__iconWrapper {
  //     &:first-child {
  //       left: 16px;
  //     }
  //     &:last-child {
  //       right: 16px;
  //     }
  //   }
  //   .basicField0001__field {
  //     height: 44px;
  //     font-size: 16px;
  //   }
  //   &.basicField0001--iconAbsoluteLeft {
  //     .basicField0001__field {
  //       padding-left: 44px;
  //     }
  //   }
  //   &.basicField0001--iconAbsoluteRight {
  //     .basicField0001__field {
  //       padding-right: 44px;
  //     }
  //   }
  // }
  &.basicField0001--sizeSm {
    font-size: 13px;
    .basicField0001__iconWrapper {
      &:first-child {
        left: 13px;
      }
      &:last-child {
        right: 13px;
      }
    }
    .basicField0001__field {
      height: 30px;
      font-size: 13px;
    }
    &.basicField0001--iconAbsoluteLeft {
      .basicField0001__field {
        padding-left: 34px;
      }
    }
    &.basicField0001--iconAbsoluteRight {
      .basicField0001__field {
        padding-right: 34px;
      }
    }
  }
  &.basicField0001--sizeXs {
    font-size: 10px;
    .basicField0001__iconWrapper {
      &:first-child {
        left: 10px;
      }
      &:last-child {
        right: 10px;
      }
    }
    .basicField0001__field {
      height: 20px;
      font-size: 10px;
    }
    &.basicField0001--iconAbsoluteLeft {
      .basicField0001__field {
        padding-left: 26px;
      }
    }
    &.basicField0001--iconAbsoluteRight {
      .basicField0001__field {
        padding-right: 26px;
      }
    }
  }

  // iconをabsoluteで左に配置するクラス
  &.basicField0001--iconAbsoluteLeft {
    i.fa:first-child {
      position: absolute;
      top: 50%;
      left: 20px;
      margin-top: -0.5em;
    }
  }

  // iconをabsoluteで右に配置するクラス
  &.basicField0001--iconAbsoluteRight {
    i.fa:last-child {
      position: absolute;
      top: 50%;
      right: 20px;
      margin-top: -0.5em;
    }
  }

  i.fa {
    position: absolute;
    color: #222222;
  }
}
</style>

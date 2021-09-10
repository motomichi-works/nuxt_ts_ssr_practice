<template>
  <header :data-identifier="identifier" class="orgPreHeader0001">
    <div class="orgPreHeader0001__inner">
      <div class="orgPreHeader0001__logoArea">
        <NuxtLink to="/" class="orgPreHeader0001__logo">ロゴ</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import { everyChild } from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgPreHeader0001',
  mixins: [everyChild],
})
</script>

<style lang="scss" scoped>
.orgPreHeader0001 {
  padding: 12px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
  .orgPreHeader0001__inner {
    width: 1200px;
    margin: 0 auto;
    padding: 0 8px;
    box-sizing: border-box;
    @media #{$g__is-lg} {
      width: 100%;
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .orgPreHeader0001__logoArea {
    float: left;
  }
  .orgPreHeader0001__logo {
    color: #222222;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    padding: 4px;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

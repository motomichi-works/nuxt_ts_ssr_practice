<template>
  <footer :data-joined-identifiers="joinedIdentifiers" class="footer0001">
    <div class="footer0001__copyArea">
      <NuxtLink to="/" class="footer0001__copy">
        &copy;MotomichiWorks
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// mixins
import everyChild from '~/mixins/common/unclassifiable/every_child'

// Vue.extend
export default Vue.extend({
  name: 'OrgFooter0001',
  mixins: [everyChild],
})
</script>

<style lang="scss" scoped>
.footer0001 {
  padding: 8px 0;
  background-color: #222222;
  .footer0001__copyArea {
    width: 1200px;
    margin: 0 auto;
    padding: 0 8px;
    box-sizing: border-box;
    text-align: center;
    color: #ffffff;
    @media #{$g__is-lg} {
      width: 100%;
    }
  }
  .footer0001__copy {
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
  }
}
</style>

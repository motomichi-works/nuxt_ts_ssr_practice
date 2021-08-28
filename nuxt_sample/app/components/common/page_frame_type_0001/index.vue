<template>
  <div :data-joined-identifiers="joinedIdentifiers" class="pageFrameType0001">
    <div class="pageFrameType0001__headerWrapper">
      <Header0001 :identifiers="[...identifiers, 'Header0001']" />
    </div>
    <div class="pageFrameType0001__contentsWrapper">
      <div class="pageFrameType0001__headingWrapper">
        <Heading0001
          :identifiers="[...identifiers, 'Heading0001']"
          text="styleguides/index.vue"
          :modifier-classes="['heading0001--Lv1']"
          :tag-name="'h1'"
        />
      </div>
      <div class="pageFrameType0001__body">
        <slot />
      </div>
    </div>
    <div class="pageFrameType0001__footerWrapper">
      <Footer0001 :identifiers="[...identifiers, 'Footer0001']" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// import components/common
import Footer0001 from '~/components/common/footer_0001/index.vue'
import Header0001 from '~/components/common/header_0001/index.vue'
import Heading0001 from '~/components/common/heading_0001/index.vue'

// mixins
import everyPageFrame from '~/mixins/common/every_page_frame'

// Vue.extend
export default Vue.extend({
  name: 'PageFrameType0001',
  components: {
    Footer0001,
    Header0001,
    Heading0001,
  },
  mixins: [everyPageFrame],
})
</script>

<style lang="scss" scoped>
.pageFrameType0001 {
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f7f7f7;
  @media #{$g__is-md} {
    min-height: 0;
  }
  .pageFrameType0001__headerWrapper {
  }
  .pageFrameType0001__contentsWrapper {
    padding: 1px 8px calc(41px + 80px);
    // .pageFrameType0001__contentsWrapperのpadding-topを補完する初期値
    > :first-child {
      margin-top: 39px;
    }
  }
  .pageFrameType0001__footerWrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .pageFrameType0001__headingWrapper {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    box-sizing: border-box;
    @media #{$g__is-lg} {
      width: 100%;
    }
  }
  .pageFrameType0001__body {
    width: 1200px;
    margin-top: 32px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    box-sizing: border-box;
    @media #{$g__is-lg} {
      width: 100%;
    }
  }
}
</style>

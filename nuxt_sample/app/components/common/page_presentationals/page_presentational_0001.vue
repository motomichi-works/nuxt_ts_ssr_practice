<template>
  <div
    :data-joined-identifiers="joinedIdentifiers"
    class="pagePresentational0001"
  >
    <div class="pagePresentational0001__headerWrapper">
      <OrgConHeader0001 :identifiers="['OrgHeader0001']" />
    </div>
    <div class="pagePresentational0001__contentsWrapper">
      <div class="pagePresentational0001__headingWrapper">
        <OrgConPageHeading0001
          :identifiers="['OrgPageHeading0001']"
          :page-heading-text="pageHeadingText"
        />
      </div>
      <div class="pagePresentational0001__body">
        <slot />
      </div>
    </div>
    <div class="pagePresentational0001__footerWrapper">
      <OrgConFooter0001 :identifiers="['OrgFooter0001']" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/orgs
import OrgConFooter0001 from '~/components/common/org_containers/org_con_footer_0001.vue'
import OrgConHeader0001 from '~/components/common/org_containers/org_con_header_0001.vue'
import OrgConPageHeading0001 from '~/components/common/org_containers/org_con_page_heading_0001.vue'

// mixins
import { everyPagePresentational } from '~/mixins/common/page_presentationals/every_page_presentational'

// Vue.extend
export default Vue.extend({
  name: 'PagePresentational0001',
  components: {
    OrgConFooter0001,
    OrgConHeader0001,
    OrgConPageHeading0001,
  },
  mixins: [everyPagePresentational],
  props: {
    pageHeadingText: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.pagePresentational0001 {
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f7f7f7;
  @media #{$g__is-md} {
    min-height: 0;
  }
  .pagePresentational0001__headerWrapper {
  }
  .pagePresentational0001__contentsWrapper {
    padding: 1px 8px calc(41px + 80px);
    // .pagePresentational0001__contentsWrapperのpadding-topを補完する初期値
    > :first-child {
      margin-top: 39px;
    }
  }
  .pagePresentational0001__footerWrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .pagePresentational0001__headingWrapper {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 8px;
    box-sizing: border-box;
    @media #{$g__is-lg} {
      width: 100%;
    }
  }
  .pagePresentational0001__body {
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

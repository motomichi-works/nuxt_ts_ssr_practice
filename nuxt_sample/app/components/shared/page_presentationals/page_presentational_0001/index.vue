<template>
  <div
    :data-joined-identifiers="joinedIdentifiers"
    class="pagePresentational0001"
  >
    <div class="pagePresentational0001__headerWrapper">
      <OrgHeader0001 :identifiers="['OrgHeader0001']" />
    </div>
    <div class="pagePresentational0001__contentsWrapper">
      <div class="pagePresentational0001__headingWrapper">
        <OrgPageHeading0001
          :identifiers="['OrgPageHeading']"
          :page-heading-text="pageHeadingText"
        />
      </div>
      <div class="pagePresentational0001__body">
        <slot />
      </div>
    </div>
    <div class="pagePresentational0001__footerWrapper">
      <OrgFooter0001 :identifiers="['OrgFooter0001']" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue, { PropType } from 'vue'

// import components/orgs
import OrgFooter0001 from '~/components/shared/org_containers/org_footer_0001/index.vue'
import OrgHeader0001 from '~/components/shared/org_containers/org_header_0001/index.vue'
import OrgPageHeading0001 from '~/components/shared/org_containers/org_page_heading_0001/index.vue'

// mixins
import everyPagePresentational from '~/mixins/common/every_page_presentational'

// Vue.extend
export default Vue.extend({
  name: 'PagePresentational0001',
  components: {
    OrgFooter0001,
    OrgHeader0001,
    OrgPageHeading0001,
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

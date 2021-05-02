<template>
  <div class="l-contents-type-0001">
    <div class="l-contents-type-0001__heading-wrapper">
      <h1 class="mod-heading-0001 mod-heading-0001--lv-1">
        styleguides/index.vue
      </h1>
    </div>
    <div class="l-contents-type-0001__body">
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">badge-0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <div>
            <Badge0001 text="必須" />
          </div>
          <div>
            <Badge0001
              text="任意"
              :modifier-classes="['badge-0001--bg-color-gray']"
            />
          </div>
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">field-heading-0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <FieldHeading0001 text="h2見出し" />
          <FieldHeading0001 text="h3見出し" level="h3" />
          <FieldHeading0001 text="h2見出し" :is-required="false" />
          <FieldHeading0001 text="h2見出し" :is-required="false" level="h3" />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">fontawesome5</h2>
        </div>
        <div class="mod-container-0001__body">
          <fa :icon="fa.search" />
          <fa :icon="fa.searchPlus" />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">BasicField0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <BasicField0001
            :module-ids="['basicField0001Container', 'basicFieldA']"
            component-id="styleguides[basic_field_a]"
            :value="''"
            :name-property="'hoge'"
            :is-disabled="false"
            :is-readonly="false"
            :placeholder="'プレースホルダー'"
            :maxlength="'10'"
          />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">FieldErrorMessages0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <FieldErrorMessages0001
            :error-messages="[
              'エラーメッセージサンプル1',
              'エラーメッセージサンプル2',
            ]"
          />
        </div>
      </section>
      <section class="mod-container-0001">
        <div class="mod-container-0001__heading-wrapper">
          <h2 class="mod-heading-0001">BasicFieldUnit0001</h2>
        </div>
        <div class="mod-container-0001__body">
          <BasicFieldUnit0001
            :module-ids="['basicFieldUnit0001Container', 'emailFieldUnit']"
            component-id="styleguides[email]"
            :value="fieldValues['styleguides[email]']"
            heading-text="メールアドレス"
            :realtime-errors="realtimeErrors['styleguides[email]']"
            @on-blur-field="onBlurField"
            @on-input-field="onInputField"
          />
          <BasicFieldUnit0001
            :module-ids="['basicFieldUnit0001Container', 'nameKanaFieldUnit']"
            component-id="styleguides[name_kana]"
            :value="fieldValues['styleguides[name_kana]']"
            heading-text="お名前（カナ）"
            :realtime-errors="realtimeErrors['styleguides[name_kana]']"
            @on-blur-field="onBlurField"
            @on-input-field="onInputField"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
// import validate from 'validate.js'
import Vue from 'vue'
import { faSearch, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FieldValues, RealtimeErrors } from '~/store/styleguides/index'

// import constraints from '~/utils/validator/pages/styleguides/index/constraints'

import Badge0001 from '~/components/common/badge-0001/index.vue'
import BasicField0001 from '~/components/common/basic-field-0001/index.vue'
import BasicFieldUnit0001, {
  PayloadType,
} from '~/components/common/basic-field-unit-0001/index.vue'
import FieldErrorMessages0001 from '~/components/common/field-error-messages-0001/index.vue'
import FieldHeading0001 from '~/components/common/field-heading-0001/index.vue'

export default Vue.extend({
  components: {
    Badge0001,
    BasicField0001,
    BasicFieldUnit0001,
    FieldErrorMessages0001,
    FieldHeading0001,
  },
  computed: {
    fieldValues() {
      return this.$store.getters['styleguides/fieldValues'] as FieldValues
    },
    realtimeErrors() {
      return this.$store.getters['styleguides/realtimeErrors'] as RealtimeErrors
    },
    fa() {
      return {
        search: faSearch,
        searchPlus: faSearchPlus,
      }
    },
  },
  methods: {
    changeFieldValue(payload: PayloadType) {
      // eslint-disable-next-line no-console
      console.log('changeFieldValue payload: ', payload)
      this.$store.commit('styleguides/changeFieldValue', payload)
    },
    onBlurField(payload: PayloadType) {
      // eslint-disable-next-line no-console
      console.log('page onBlurField payload: ', payload)
      this.changeFieldValue(payload)
    },
    onInputField(payload: PayloadType) {
      // eslint-disable-next-line no-console
      console.log('page onInputField payload: ', payload)
      this.changeFieldValue(payload)
    },
    // ...mapMutations(MODULE_NAME, ['changeRealtimeErrors']),
    // validateAll(fieldValues: any) {
    //   return validate(fieldValues, constraints) ?? {}
    // },
  },
})
</script>

<style lang="scss" scoped>
// base
@import '~/assets/scss/base/global-variables/media-queries/media-queries.scss';
// layouts
@import '~/assets/scss/layouts/l-contents-type-0001';
// modules
@import '~/assets/scss/modules/mod-container-0001';
@import '~/assets/scss/modules/mod-heading-0001';
</style>

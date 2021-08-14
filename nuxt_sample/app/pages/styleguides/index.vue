<template>
  <div :data-joined-identifiers="joinedIdentifiers" class="l-contentsType0001">
    <div class="l-contentsType0001__headerWrapper">
      <Header0001 :identifiers="[...identifiers, 'Header0001']" />
    </div>
    <div class="l-contentsType0001__contentsWrapper">
      <div class="l-contentsType0001__headingWrapper">
        <Heading0001
          :identifiers="[...identifiers, 'Heading0001']"
          text="styleguides/index.vue"
          :modifier-classes="['heading0001--Lv1']"
          :tag-name="'h1'"
        />
      </div>
      <div class="l-contentsType0001__body">
        <component
          :is="component.name"
          v-for="component in components"
          :key="component.identifiers.join('/')"
          :identifiers="component.identifiers"
          :namespace="namespace"
          :field-value-obj="fieldValueObj"
          :realtime-errors-obj="realtimeErrorsObj"
          :is-tainted-obj="isTaintedObj"
          @on-input-field="onInputField"
          @change-field="onChangeOrBlurField"
          @blur-field="onChangeOrBlurField"
        >
        </component>
      </div>
    </div>
    <div class="l-contentsType0001__footerWrapper">
      <Footer0001 :identifiers="[...identifiers, 'Footer0001']" />
    </div>
  </div>
</template>

<script lang="ts">
// import node_modules
import Vue from 'vue'

// settings
import { namespace } from '~/settings/pages/styleguides/index'

// store, store types
import {
  FieldValueObj,
  RealtimeErrorsObj,
  IsTaintedObj,
} from '~/store/styleguides/index'

// import components/pages
import Badge0001Container from '~/components/pages/styleguides/badge_0001_container/index.vue'
import BasicField0001Container from '~/components/pages/styleguides/basic_field_0001_container/index.vue'
import BasicFieldUnit0001Container from '~/components/pages/styleguides/basic_field_unit_0001_container/index.vue'
import FieldErrorMessages0001Container from '~/components/pages/styleguides/field_error_messages_0001_container/index.vue'
import FieldHeading0001Container from '~/components/pages/styleguides/field_heading_0001_container/index.vue'
import FontAwesome5Container from '~/components/pages/styleguides/font_awesome_5_container/index.vue'
import Heading0001Container from '~/components/pages/styleguides/heading_0001_container/index.vue'
import SelectField0001Container from '~/components/pages/styleguides/select_field_0001_container/index.vue'
import SelectFieldUnit0001Container from '~/components/pages/styleguides/select_field_unit_0001_container/index.vue'

// mixins
import everyPage from '~/mixins/common/every_page'
import mappedChangeFieldValue from '~/mixins/common/methods/mapped_change_field_value'
import mappedChangeRealtimeErrors from '~/mixins/common/methods/mapped_change_realtime_errors'
import mappedChangeIsTainted from '~/mixins/common/methods/mapped_change_is_tainted'
import onInputField from '~/mixins/common/methods/on_input_field'
import onChangeOrBlurField from '~/mixins/common/methods/on_change_or_blur_field'

// Vue.extend
export default Vue.extend({
  components: {
    Badge0001Container,
    BasicField0001Container,
    BasicFieldUnit0001Container,
    FieldErrorMessages0001Container,
    FieldHeading0001Container,
    FontAwesome5Container,
    Heading0001Container,
    SelectField0001Container,
    SelectFieldUnit0001Container,
  },
  mixins: [
    everyPage,
    mappedChangeFieldValue,
    mappedChangeRealtimeErrors,
    mappedChangeIsTainted,
    onInputField,
    onChangeOrBlurField,
  ],
  computed: {
    namespace() {
      return namespace
    },
    fieldValueObj(): FieldValueObj {
      return this.$store.getters[`${this.namespace}/fieldValueObj`]
    },
    realtimeErrorsObj(): RealtimeErrorsObj {
      return this.$store.getters[`${this.namespace}/realtimeErrorsObj`]
    },
    isTaintedObj(): IsTaintedObj {
      return this.$store.getters[`${this.namespace}/isTaintedObj`]
    },
    components() {
      const componentNames = [
        'Badge0001Container',
        'BasicField0001Container',
        'BasicFieldUnit0001Container',
        'FieldErrorMessages0001Container',
        'FieldHeading0001Container',
        'FontAwesome5Container',
        'Heading0001Container',
        'SelectField0001Container',
        'SelectFieldUnit0001Container',
      ] as const

      const components = componentNames.map((name) => {
        return { name, identifiers: [name] }
      })

      return components
    },
  },
})
</script>

<style lang="scss" scoped>
// layouts
@import '~/assets/scss/layouts/l_contents_type_0001';
</style>

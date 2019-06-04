import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'

import '../../src/components'
import '../../src/components/icon/components'

export default ({
 Vue,
 options,
 router
}) => {
 Vue.use(Vant)
 Vue.use(VueHighlightJS, {
    languages: {
      css,
      javascript,
      vue
    }
  })
}
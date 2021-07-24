import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})

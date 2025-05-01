import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
            background: colors.blueGrey.darken4,     // #263238
            primary: colors.indigo.darken1,          // #3949AB
            secondary: colors.deepPurple.lighten4,   // #D1C4E9
            success: colors.teal.darken1,            // #43A047
            warning: colors.orange.accent2,          // #FFAB40
            error: colors.red.accent4,               // #D50000
        },
      },
    },
  },
})
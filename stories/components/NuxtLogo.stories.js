import NuxtLogo from '@/components/NuxtLogo.vue'

export default {
  title: 'Nuxt logo',
}

const Template = (args, { argTypes }) => ({
  components: { NuxtLogo },
  template: `
  <v-app>
    <v-main>
      <v-continaer>
        <NuxtLogo />
      </v-continaer>
    </v-main>
  </v-app>
  `
})


export const Default = Template.bind({})

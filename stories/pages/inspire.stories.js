import Inspire from '@/pages/inspire.vue'

export default {
  title: 'Inspire page',
  component: { Inspire },
  // parameters: { layout: 'fullscreen' }
}

const Template = (args, { argTypes }) => ({
  components: { Inspire },
  template: `
  <v-app>
    <v-main>
      <v-continaer>
        <Inspire />
      </v-continaer>
    </v-main>
  </v-app>
  `
})

export const Default = Template.bind({})

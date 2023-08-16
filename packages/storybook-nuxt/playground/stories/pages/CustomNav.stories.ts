import type { Meta, StoryObj } from '@storybook-nuxt/framework';
import { useRouter } from 'vue-router'



import  MyNuxtPage  from '~/components/MyNuxtPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Pages/Home ',
  component: MyNuxtPage,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof MyNuxtPage>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const NavPage : Story = {
  args: {  },
  render (args: any) {
    return({
        
        components: { MyNuxtPage  },
        setup() {
            useRouter().push('/')
            return { args  }
        },
        template: '<div><MyNuxtPage /></div>',
    })
    },
}


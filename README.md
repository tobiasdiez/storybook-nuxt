# Storybook for Nuxt framework <!-- omit in toc -->

![sb-nuxt (1)](https://github.com/storybook-vue/nuxt/assets/711292/0a4d0712-cd9a-454d-956f-3e4fbaace436)


Storybook package for nuxt framework zero config. seamless integratio supporting all Nuxt fancy features 



https://github.com/storybook-vue/nuxt/assets/711292/e66a1899-ab7c-42dd-b358-59e22ff0f609



## Supported Features

👉 [Nuxt Modules](#nextjss-image-component)

👉 [Nuxt Plugins](#nextjs-font-optimization)

👉 [All in-built Nuxt Components](#nuxt-components)

👉 [Sass/Scss](#sassscss)

👉 [Css/Sass/Scss Modules](#csssassscss-modules)

👉 [ JSX ](#styled-jsx)

👉 [Postcss](#postcss)

👉 [Auto Imports](#auto-imports)

👉 [Runtime Config](#runtime-config)

👉 [Composables](#composables)

👉 [Typescript](#typescript) (already supported out of the box by Storybook)

## Requirements

- [Nuxt](https://nuxt.com/) >= 3.x
- [Storybook](https://storybook.js.org/) >= 7.x

## Getting Started

### In a project without Storybook

Follow the prompts after running this command in your Nuxt project's root directory:

```bash
npx storybook@latest init
```

[More on getting started with Storybook](https://storybook.js.org/docs/vue3/get-started/install)

#### Automatic migration

When running the `upgrade` command above, you should get a prompt asking you to migrate to `@storybook/nextjs`, which should handle everything for you. In case that auto-migration does not work for your project, refer to the manual migration below.



Update your `main.js` to change the framework property:

```js
// .storybook/main.js
export default {
  // ...
  framework: {
    name: '@storybook-vue/nuxt', // Add this
    options: {},
  },
};
```

## Documentation

In progress

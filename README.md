# vue-component-library

Library of Vue components adhering to eLIPSE design system. This is in the form of a node module, however the version on npm is not the most recent update stored on GitHub, so please look below for using the most recent version in development.

## Installation (when not doing development work)
```bash
npm install @uq-elipse/vue-component-library
```

## Installation (when doing development work)
First, create your test Vue app
```bash
mkdir ~/Desktop/my-project
cd ~/Desktop/my-project
vue create hello-world
```

Clone the repo/node module
```bash
cd ~/Desktop
git clone https://github.com/UQ-eLIPSE/vue-component-library.git
```

Run `npm link` inside the module’s root folder:
```bash
cd ~/Desktop/vue-component-library
npm link
```

In your test Vue app, run npm link <module_name>
```bash
cd ~/Desktop/my-project/hello-world
npm link @uq-elipse/vue-component-library
```

For more information on npm link, see: https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af

## Usage
```bash
import Vue from 'vue'
import VueComponentLibrary from '@uq-elipse/vue-component-library'

Vue.use(VueComponentLibrary)
```

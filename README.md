# vue3-form


## install
```shell
npm i vue3-form-render --save
```
`vue3 form render` depend on [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
to render from items.so before we use `vue3 form render` we need to install `Ant Design of Vue` and import it to our project:
```js
import { createApp } from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.mount('#app');
```

## easy demo

```vue
<template>
  <div>
    <formRender
      :schema="schema"
      :formData="formData"
      @on-change="change"
      @on-validate="validate"
    />
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue';

// render index
import FormRender from 'vue3-form-render';
// form render style
import 'vue3-form-render/lib/vue3-form-render.css';

export default {
  name: 'App',
  setup() {
    const state = reactive({
      schema: {
        type: 'object',
        properties: {
          string: {
            title: 'string',
            type: 'string',
            maxLength: 4,
            'ui:options': {
              placeholder: 'enter more than 4 characters',
            },
          }
        },
      },
      formData: {
        string: 'aaa'
      },
    });

    const change = (v) => {
      state.formData = v;
      console.log(v);
    }
    const validate = (v) => {
      console.log(v);
    }

    return {
      ...toRefs(state),
      change,
      validate,
    }
  },
  components: {
    FormRender,
  }
}
</script>

```
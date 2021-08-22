<template>
  <div>sssss</div>
</template>


<script>
import { reactive, toRefs } from "vue";

export default {
  name: "App",
  props: {
    schemaProps: Object,
    formDataProps: Object,
  },
  setup({ schemaProps, formDataProps }) {
    // eslint-disable-line
  },
};
</script>

<style lang="less">
.demo-preview {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  .preview {
    flex: 1;
    border: 1px solid #ddd;
  }
}
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  flex: 1;
  margin-left: 20px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
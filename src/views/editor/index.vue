<template>
  <div class="editor">
    <quill-editor theme="snow" :options="editorOption" />
  </div>
</template>

<script>
// import { useRouter, useRoute } from 'vue-router'
// import { reactive, ref, toRefs, getCurrentInstance } from 'vue'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      editorOption: {
        //  富文本编辑器配置
        modules: {
          toolbar: [['image']]
        },
        theme: 'snow'
      }
    }
  },
  computed: {},
  methods: {
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    }
  }
}
</script>
<style>
.editor .ql-toolbar.ql-snow {
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 0 auto;
}
</style>

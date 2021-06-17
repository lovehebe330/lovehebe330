declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'eruda'

declare module 'vue-quill-editor'

declare module 'vue-html5-editor'
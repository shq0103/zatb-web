<template>
  <!-- quill-editor -->
  <quill-editor
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  ></quill-editor>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import VueQuillEditor, { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      name: "register-modules-example",
      content: ``,
      editorOption: {
        modules: {
          toolbar: [
            [{ size: ["small", false, "large"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ header: 1 }, { header: 2 }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: "black",
          //     border: "none",
          //     color: "white"
          //   },
          //   modules: ["Resize", "DisplaySize", "Toolbar"]
          // }
        }
      }
    };
  },
  mounted() {},
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    }
  },
  watch: {
    content: function() {
      this.$emit("change", this.content);
    }
  }
};
</script>

<style>
.quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 15rem;
  padding-bottom: 1rem;
}
</style>

<style scoped>
.quill-code {
  height: auto;
  border: none;
}
</style>

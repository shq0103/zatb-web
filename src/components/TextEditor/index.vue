<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
    <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "editor",
  props: {
    menu: {
      default: [
        "head",
        "bold",
        "fontSize",
        "fontName",
        "italic",
        "underline",
        "strikeThrough",
        "foreColor",
        "backColor",
        "link",
        "list",
        "justify",
        "quote",
        "emoticon",
        "image",
        "table",
        "video",
        "code",
        "undo",
        "redo"
      ]
    }
  },
  data() {
    return {
      editorContent: ""
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.menus = this.menu;
    editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style>
.w-e-text {
  overflow-y: auto;
}
</style>

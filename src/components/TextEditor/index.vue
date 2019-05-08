<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "editor",

  props: {
    contents: "",
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
      editorContent: "",
      editor: null,
      info_: null
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.menus = this.menu;
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    this.editor.customConfig.onchange = html => {
      this.info_ = html; // 绑定当前逐渐地值
      this.$emit("on-change", this.info_); // 将内容同步到父组件中
    };
    this.editor.create();
  },
  watch: {
    contents(newOne, oldOne) {
      this.editor.txt.html(newOne);
    }
  }
};
</script>

<style>
.w-e-text {
  overflow-y: auto;
}
</style>

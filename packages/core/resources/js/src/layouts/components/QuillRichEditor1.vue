<template>
  <quill-editor
    class="editor"
    :id="id"
    ref="myQuillEditor"
    :value="value"
    :options="editorOption"
    @change="onEditorChange"
  />
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { quillEditor } from "vue-quill-editor";
import Quill from "quill";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

import debounce from "lodash/debounce";
export default {
  props: {
    value: {
      type: String,
    },
    id: {
      type: String,
      default: "editor",
    },
  },
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {
        modules: {
          imageDrop: true,
          imageResize: {},
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
        },
      },
    };
  },
  methods: {
    onEditorChange: debounce(function (value) {
      this.$emit("input", value.html);
    }, 466),

  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  destroyed() {},
  mounted() {},
};
</script>
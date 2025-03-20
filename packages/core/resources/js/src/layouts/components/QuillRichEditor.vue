 <template>
  <div>
    <div ref="editor"></div>
  </div>
</template>
<style lang="scss">
.ql-tabletool:after {
  content: "Table";
  font-size: 14px;
}

.ql-newlinetool:after {
  content: "New Line";
  font-size: 14px;
  margin-left: '10px';
}
</style>
 <script>
import Quill from "quill";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
import QuillBetterTable from "quill-better-table";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);
import htmlEditButton from "quill-html-edit-button";

Quill.register(
  {
    "modules/better-table": QuillBetterTable,
    "modules/htmlEditButton": htmlEditButton,
  },
  true
);

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill-better-table/dist/quill-better-table.css";
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
  data() {
    return {
      quill: null,
      _content: "",
      editorOption: {
        theme: "snow",
        placeholder: "Compose an epic...",
        modules: {
          imageDrop: true,
          imageResize: {},
          htmlEditButton: {},
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
            ["tabletool"],
            ['newlinetool']
          ],
          table: false, // disable table module
          "better-table": {
            operationMenu: {
              items: {
                unmergeCells: {
                  text: "Another unmerge cells name",
                },
              },
            },
          },
          keyboard: {
            bindings: QuillBetterTable.keyboardBindings,
          },
        },
      },
    };
  },
  mounted() {
    this.initializeQuill();
  },
  beforeDestroy() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    initializeQuill() {
      this.quill = new Quill(this.$refs.editor, this.editorOption);
      if (this.value || this.content) {
        this.editor.clipboard.dangerouslyPasteHTML(this.value || this.content);
      }

      this.quill.on("text-change", (delta, oldDelta, source) => {
        let html = this.$refs.editor.children[0].innerHTML;
        const quill = this.quill;
        const text = this.quill.getText();
        if (html === "<p><br></p>") html = "";
        this._content = html;
        this.$emit("input", this._content);
        this.$emit("change", { html, text, quill });
      });

      var toolbar = this.quill.getModule("toolbar");
      toolbar.addHandler("tabletool", function () {});
      // toolbar.addHandler("newlinetool", function () {});

      let context = this;
      var customButton = document.querySelector(".ql-tabletool");
      customButton.addEventListener("click", function () {
        let tableModule = context.quill.getModule("better-table");
        tableModule.insertTable(3, 3);
      });

      //  var newlinetool1 = document.querySelector(".ql-newlinetool");
      // newlinetool1.addEventListener("click", function () {
      //   //  context.quill.clipboard.dangerouslyPasteHTML(
      //   //     "<p><br/>aasdfsadfsadf<br/></p>"
      //   //   );

      //   // setTimeout(() =>  quill.setSelection(quill.getSelection().index + 10, 0), 0)


      // });
    },
  },
  watch: {
    // Watch content change
    content(newVal, oldVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.clipboard.dangerouslyPasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText("");
        }
      }
    },
    // Watch content change
    value(newVal, oldVal) {
      if (this.quill) {
        if (newVal && newVal !== this._content) {
          this._content = newVal;
          this.quill.clipboard.dangerouslyPasteHTML(newVal);
        } else if (!newVal) {
          this.quill.setText("");
        }
      }
    },
    // Watch disabled change
    disabled(newVal, oldVal) {
      if (this.quill) {
        this.quill.enable(!newVal);
      }
    },
  },
};
</script>
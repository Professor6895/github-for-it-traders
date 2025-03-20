<template>
  <div class="vx-row">
    <div class="vx-col md:w-3/12 w-full mb-2 rounded-lg">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col md:w-9/12 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-4">
            <!-- <label class="mb-2 inline-block">Script/Style before head tag</label> -->
            <label class="mb-2 inline-block">{{ $t('script_before_head') }}</label>
            
            <prism-editor
              class="my-editor"
              v-model="custom_scripts.before_head"
              line-numbers
              :highlight="highlighter"
            ></prism-editor>
            <!-- <vs-textarea v-model="custom_scripts.before_head" rows="5" /> -->
          </div>

          <div class="vx-col w-full mb-4">
            <label class="mb-2 inline-block">Script before body end</label>
            <!-- <vs-textarea v-model="custom_scripts.before_body" rows="5" /> -->
             <prism-editor
              class="my-editor"
              v-model="custom_scripts.before_body"
              line-numbers
              :highlight="highlighter"
            ></prism-editor>
          </div>

          <div class="vx-col w-full mb-4">
            <label class="mb-2 inline-block">Google Map Embeded Code</label>
             <prism-editor
              class="my-editor"
              v-model="custom_scripts.g_map"
              line-numbers
              :highlight="highlighter"
            ></prism-editor>
            <!-- <vs-textarea v-model="custom_scripts.g_map" rows="5" /> -->
          </div>
        </div>
        <vs-button color="success" type="filled" size="small" @click="saveCustomScripts">Submit</vs-button>
      </vx-card>
    </div>
  </div>
</template>

<style scoped>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #f3f3f3;
    padding: 5px;
    height: 300px;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
<script>
import SettingSidebar from "./Sidebar";
import _ from "lodash";
import { renderServerErrors } from "@/utils.js";
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import "vue-prism-editor/dist/prismeditor.min.css";
import store from "@/store/store";
export default {
  data() {
    return {
      custom_scripts: {},
    };
  },
  components: {
    "settings-sidebar": SettingSidebar,
    PrismEditor,
  },
  computed: {
    state() {
      return this.$store.state.settings;
    },
  },
  mounted() {
    this.initComponent();
  },
  watch: {
    state: {
      deep: true,
      handler() {
        this.initComponent();
      },
    },
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },

    initComponent() {
      if (
        _.has(this.$store.state, "settings.dashboard_settings.custom_scripts")
      ) {
        this.custom_scripts = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.custom_scripts
        );
      }
    },

    async saveCustomScripts() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let paylod = {
          _method: "PATCH",
          settings: this.custom_scripts,
        };

        let response = await this.$http.post(
          `/api/admin/settings/custom_scripts/update-settings`,
          paylod
        );
        console.log(response.data);
        if (response.data.success) {
          store.dispatch("settings/fetchSettings", { once: false });
          this.successNotification(response.data.message);
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>
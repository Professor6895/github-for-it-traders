<template>
  <div>
    <vx-card>
      <div class="vx-row">
        <div class="vx-col md:w-1/2">
          <vs-select
            label="Import Type"
            name="active_module"
            v-model="active_module"
            class="w-full"
          >
            <vs-select-item
              :key="module.slug"
              :value="module"
              :text="module.name"
              v-for="module in import_modules"
            />
          </vs-select>
        </div>
      </div>
    </vx-card>
    <div v-if="Object.keys(active_module).length">
      <component v-bind:is="getComponentName()" class="mt-3" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active_module: {},
      import_modules: [],
    };
  },
  mounted() {
    this.getImportModules();
  },
  methods: {
    async getImportModules() {
      let response = await this.$http.get("/api/admin/get-import-modules");
      this.import_modules = response.data.data;
    },

    getComponentName() {
      try {
        if (Object.keys(this.active_module).length) {
          // return require(`./../../../../../${this.active_module.module}/resources/js/src/views/DataImport/${this.active_module.component}`)
          //   .default;
          return require(`./modules/${this.active_module.module}/${this.active_module.component}`)
            .default;
        }
      } catch (error) {}
    },
  },
};
</script>
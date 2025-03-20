<template>
  <div>
    <vs-popup title="Class Detail" :active.sync="attribute_popup" class="popup-lg">
      <form action data-vv-scope="class-attribute">
        <div id="loading--container" class="vs-con-loading__container">
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-input
                class="w-full"
                name="name"
                label="Attribute Name"
                v-validate="'required'"
                v-model="attribute.name"
              />
              <p>
                <span
                  class="text-danger text-sm"
                  v-if="errors.has('class-attribute.name')"
                >{{ errors.first('class-attribute.name') }}</span>
              </p>
            </div>
            <div class="vx-col w-full mb-4">
              <vs-select
                label="Type"
                name="type"
                v-model="attribute.type"
                class="w-full"
                v-validate="'required'"
              >
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="item,index in [{text: 'Text', value: 'text'}, {text: 'Option', value: 'option'}]"
                />
              </vs-select>
              <p>
                <span
                  class="text-danger text-sm"
                  v-if="errors.has('class-attribute.type')"
                >{{ errors.first('class-attribute.type') }}</span>
              </p>
            </div>

            <div class="vx-col w-full mb-4" v-if="attribute.type == 'option'">
              <label for class="vs-input--label">Options</label>
              <input-tag v-model="attribute.values"></input-tag>
            </div>

            <div class="vx-col w-1/2 mb-4" v-if="attribute.type == 'option'">
              <label for class="vs-input--label">Use for variant</label>
              <vs-switch
                vs-value="1"
                icon-pack="feather"
                vs-icon-on="icon-check-circle"
                vs-icon-off="icon-slash"
                v-model="attribute.use_for_variant"
              >
                <span slot="on">Yes</span>
                <span slot="off">No</span>
              </vs-switch>
            </div>
            <div class="vx-col w-1/2 mb-4" v-if="attribute.type == 'option'">
              <label for class="vs-input--label">Use in fitler</label>
              <vs-switch
                vs-value="1"
                icon-pack="feather"
                vs-icon-on="icon-check-circle"
                vs-icon-off="icon-slash"
                v-model="attribute.use_in_filter"
              >
                <span slot="on">Yes</span>
                <span slot="off">No</span>
              </vs-switch>
            </div>
          </div>
          <vs-button class="mr-3 mt-5" @click="saveAttribute">Submit</vs-button>
        </div>
      </form>
    </vs-popup>

    <vs-table :data="attributes" max-items="40" pagination>
      <template slot="header">
        <vs-button
          color="primary"
          class="mb-3"
          @click="attribute_popup = true"
          size="small"
          type="border"
        >Add Attribute</vs-button>
        <!-- </router-link> -->
      </template>
      <template slot="thead">
        <vs-th sort-key="name">Name</vs-th>
        <vs-th>Values</vs-th>
        <vs-th>Usable for variants?</vs-th>
        <vs-th>Usable in filter?</vs-th>

        <vs-th>Actions</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td>{{ tr.name }}</vs-td>
          <vs-td>{{ (tr.values) ? tr.values.join(', ') : '--'}}</vs-td>
          <vs-td>
            <vs-icon
              :icon="tr.use_for_variant ? 'toggle_on':'toggle_off'"
              class="icon-large"
              :class="tr.use_for_variant ? 'text-success':'text-danger'"
            ></vs-icon>
          </vs-td>
             <vs-td>
            <vs-icon
              :icon="tr.use_in_filter ? 'toggle_on':'toggle_off'"
              class="icon-large"
              :class="tr.use_in_filter ? 'text-success':'text-danger'"
            ></vs-icon>
          </vs-td>
          <vs-td>
            <vs-button
              class="table-action--buttons"
              radius
              color="warning"
              @click="editAttribute(tr)"
              type="filled"
              size="small"
              icon="create"
            ></vs-button>
            <vs-button
              class="table-action--buttons"
              radius
              size="small"
              color="danger"
              type="filled"
              @click="deleteAttribute(tr.id)"
              icon="delete"
            ></vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import InputTag from "vue-input-tag";
export default {
  props: ["classId"],
  data() {
    return {
      loading_attributes: false,
      attributes: [],
      attribute: {
        type: "text",
        values: [],
      },
      attribute_popup: false,
    };
  },
  components: {
    "input-tag": InputTag,
  },
  mounted() {
    this.fetchClassAttributes();
  },
  methods: {
    // CLASS ATTRIBUTES
    async fetchClassAttributes() {
      this.loading_attributes = true;
      try {
        let response = await this.$http.get(
          `/api/admin/product-class/${this.classId}/attributes`
        );
        this.attributes = response.data.data;
      } catch (error) {
        this.errorNotification(
          "Something went wrong while fetching attributes!! Please retry"
        );
      } finally {
        this.loading = false;
      }
    },

    async saveAttribute() {
      let result = await this.$validator.validateAll("class-attribute");
      if (!result) {
        return;
      }

      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.attribute.name,
          type: this.attribute.type,
          values: this.attribute.values,
          use_for_variant: this.attribute.use_for_variant,
          use_in_filter: this.attribute.use_in_filter,
        };

        let url = `/api/admin/product-class/${this.classId}/attribute`;
        if (this.attribute.id) {
          url = `/api/admin/product-class/${this.classId}/attribute/${this.attribute.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchClassAttributes();
          this.attribute_popup = false;
        } else {
          this.errorNotification(response.data.message);
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
    editAttribute(attr) {
      this.attribute = _.cloneDeep(attr);
      this.attribute_popup = true;
    },

    deleteAttribute(attribute_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete this attribute?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/product-class/${this.classId}/attribute/${attribute_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchClassAttributes();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    attribute_popup(val) {
      if (!val) {
        this.attribute = { type: "text", values: [] };
        this.errors.clear();
      }
    },
  },
};
</script>

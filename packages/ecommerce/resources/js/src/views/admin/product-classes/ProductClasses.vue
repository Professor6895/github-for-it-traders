<template>
  <div>
    <vs-popup title="Class Detail" :active.sync="class_popup" class="popup-lg">
      <form action data-vv-scope="product-class">
        <div id="loading--container" class="vs-con-loading__container">
          <vs-input
            class="w-full"
            name="name"
            label="Class Name"
            v-validate="'required'"
            v-model="class_.name"
          />
          <p>
            <span
              class="text-danger text-sm"
              v-if="errors.has('product-class.name')"
            >{{ errors.first('product-class.name') }}</span>
          </p>

          <vs-button class="mr-3 mt-5" @click="saveClass">Submit</vs-button>
        </div>
      </form>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <div class="vx-row" v-else>
      <div class="vx-col w-full mb-4 md:w-2/5">
        <vx-card class="card-padding-5">
          <vs-table :data="classes_" max-items="40" pagination v-model="selected_class">
            >
            <template slot="header">
              <vs-button
                color="primary"
                class="mb-3"
                @click="class_popup = true"
                size="small"
                type="border"
              >Add Product Class</vs-button>
              <!-- </router-link> -->
            </template>
            <template slot="thead">
              <vs-th sort-key="name">Name</vs-th>
              <vs-th>Actions</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>{{ tr.name }}</vs-td>

                <vs-td>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    color="warning"
                    type="filled"
                    size="small"
                    @click="editClass(tr)"
                    icon="create"
                  ></vs-button>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    size="small"
                    color="danger"
                    type="filled"
                    @click="deleteClass(tr.id)"
                    icon="delete"
                  ></vs-button>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </div>

      <div class="vx-col w-full md:w-3/5">
        <vx-card title="Attributes">
          <div v-if="!Object.keys(selected_class).length">
            <div class="text-center" style="padding: 80px 0px">
              <h3>Please select product class first!!</h3>
            </div>
          </div>

          <div v-else>
            <ProductAttributes :class-id="selected_class.id" :key="`class-${selected_class.id}-attr`"/>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAttributes from "./ProductAttributes";
export default {
  data() {
    return {
      loading: true,
      classes_: [],
      //ADD AND EDIT
      class_popup: false,
      class_: {},
      selected_class: {},
    };
  },
  components: {
    ProductAttributes,
  },
  mounted() {
    this.fetchClasses();
  },
  methods: { 
    // CLASSES
    async fetchClasses() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/product-classes");
        this.classes_ = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveClass() {
      let result = await this.$validator.validateAll("product-class");
      if (!result) {
        return;
      }

      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.class_.name,
        };

        let url = `/api/admin/product-classes`;
        if (this.class_.id) {
          url = `/api/admin/product-classes/${this.class_.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchClasses();
          this.class_popup = false;
        }
      } catch (error) {
        console.log(error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    editClass(class__) {
      this.class_ = _.cloneDeep(class__);
      this.class_popup = true;
    },

    deleteClass(class_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete this product class?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/product-classes/${class_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchClasses();
            this.selected_class={}
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    class_popup(val) {
      if (!val) {
        this.class_ = {};
        this.errors.clear();
      }
    }
  },
};
</script>
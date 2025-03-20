<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-4">
      <vx-card>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-select
              class="mb-3 w-full md:w-1/3"
              v-model="selected_class"
              label="Select an Attribute Class"
            >
              <vs-select-item
                :key="`$class-${item.id}`"
                :value="item"
                :text="item.name"
                v-for="item in attribute_classes"
              />
            </vs-select>
          </div>
        </div>

        <div class="vx-row">
          <div
            class="vx-col w-full text-center"
            v-if="!Object.keys(selected_class).length"
            style="padding: 50px 0px"
          >
            <h4>Please select attribute class first!</h4>
          </div>
          <div v-else class="vx-col w-full mt-4">
            <vs-table :data="selected_class.attributes" :hoverFlat="true">
              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <strong>{{ tr.name }}</strong>
                  </vs-td>
                  <vs-td>
                    <vs-textarea
                      v-if="tr.type == 'text'"
                      class="w-full md:w-1/3 inputx"
                      v-model="product_attributes[tr.name]"
                      :placeholder="tr.name"
                    />
                    <vs-select
                      class="w-full md:w-1/3"
                      v-else
                      v-model="product_attributes[tr.name]"
                      label="Select an option"
                    >
                      <vs-select-item
                        :key="`${tr.name}-${item}`"
                        :value="item"
                        :text="item"
                        v-for="item in tr.values"
                      />
                    </vs-select>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>

            <vs-button
              type="relief"
              class="mt-4"
              @click="saveAttribute"
              color="primary"
              >Save</vs-button
            >
          </div>
        </div>
      </vx-card>
    </div>
    <div class="vx-col w-full mb-4">
      <vs-button type="relief" color="primary" @click="$emit('prevTabPlease')"
        >Prev</vs-button
      >
      <vs-button type="relief" color="primary" @click="$emit('nextTabPlease')"
        >Next</vs-button
      >
    </div>
  </div>
</template>
<script>
import _ from "lodash";
import vSelect from "vue-select";
export default {
  props: ["productId", "productAttributes", "isadmin"],
  data() {
    return {
      attribute_classes: [],
      selected_class: {},
      product_attributes: {},
    };
  },
  async mounted() {
    if (this.productAttributes)
      this.product_attributes = _.cloneDeep(
        this.productAttributes.product_attributes
      );
    await this.getAttributeClasses();
  },
  components: {
    "v-select": vSelect,
  },
  methods: {
    // async fetchProductAttribute() {
    //   try {
    //     let response = await this.$http.get(
    //       `/api/admin/product-classes/get-dropdown?attributes=true`
    //     );
    //     this.attribute_classes = response.data.data;
    //   } catch (error) {
    //     this.errorNotification("Something went wrong!! Please retry");
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    async getAttributeClasses() {
      try {
        let url = `/api/admin/product-classes/get-dropdown?attributes=true`;
        if (!this.isadmin) {
          url = `/api/vendor/product-classes/get-dropdown?attributes=true`;
        }

        let response = await this.$http.get(url);
        this.attribute_classes = response.data.data;
        if (this.productAttributes) {
          let attribute__class = _.find(this.attribute_classes, {
            id: this.productAttributes.attribute_class_id,
          });
          this.selected_class = attribute__class;
        }
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveAttribute() {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let selected_attributes = this.selected_class.attributes;
        let product_attributes__ = {};
        for (let attr in selected_attributes) {
          if (this.product_attributes[selected_attributes[attr].name]) {
            product_attributes__[selected_attributes[attr].name] =
              this.product_attributes[selected_attributes[attr].name];
          }
        }

        let params = {
          product_attributes: product_attributes__,
          attribute_class_id: this.selected_class.id,
          _method: "PATCH",
        };
        let url = `/api/admin/products/${this.productId}/save-attributes`
        if(!this.isadmin) {
         url = `/api/vendor/products/${this.productId}/save-attributes`
        }
        let response = await this.$http.post(url, params);
        if (response.data.success)
          this.successNotification(response.data.message);
        this.$emit("refreshProduct");
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>
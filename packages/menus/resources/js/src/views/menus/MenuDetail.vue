<template>
  <div class="vx-row vs-con-loading__container" id="loading--container">
    <div class="vx-col md:w-1/3 w-full">
      <vx-card title="Menu Configuration" class="mb-4">
        <form action data-vv-scope="menu-item">
          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-input
                name="name"
                class="w-full"
                label="Name"
                v-model="menu_item.name"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('menu-item.name')"
              >{{ errors.first('menu-item.name') }}</span>
            </div>

            <div class="vx-col w-full mt-4">
              <vs-input
                name="link"
                class="w-full"
                label="Link"
                v-model="menu_item.link"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('menu-item.link')"
              >{{ errors.first('menu-item.link') }}</span>
            </div>

            <div class="vx-col w-full mt-4">
              <vs-checkbox v-model="menu_item.open_new_tab">Open in new tab</vs-checkbox>
            </div>

            <div class="vx-col w-full">
              <vs-button
                class="mt-4 float-right"
                type="border"
                size="small"
                @click="addItemToMenu"
              >Add >></vs-button>
            </div>
          </div>
        </form>
      </vx-card>
    </div>
    <div class="vx-col md:w-2/3 w-full">
      <vx-card class="mb-4">
        <form data-vv-scope="menu">
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-input
                name="title"
                class="w-full"
                label="Titles"
                v-model="menu.title"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('menu.title')"
              >{{ errors.first('menu.title') }}</span>
            </div>

            <div class="vx-col w-full">
              <div class="menu-builder--area p-4">
                <vue-nestable v-model="menu.menu_items">
                  <div slot="placeholder">
                    <div class="text-center mt-10 mb-10">
                      <b>This list is empty</b>
                      <p>You can add items using form on left side.</p>
                    </div>
                  </div>
                  <vue-nestable-handle slot-scope="{ item }" :item="item">
                    <vs-icon icon="menu" class="nestable--handler-icon mr-2" />
                    {{ item.name }}
                    <small v-if="item.open_new_tab">(New Tab)</small>
                    <vs-icon
                      color="danger"
                      icon="delete"
                      @click="removeMenuItem(item)"
                      class="float-right text-xl cursor-pointer"
                    />
                    <vs-icon
                      color="warning"
                      icon="edit"
                      class="float-right mr-3 text-xl cursor-pointer"
                      @click="editMenuItem(item)"
                    />
                  </vue-nestable-handle>
                </vue-nestable>
              </div>
            </div>
          </div>
        </form>
        <div class="flex justify-between flex-row-reverse">
          <vs-button class="mt-4 float-right" size="small" type="border" @click="saveMenu">Save</vs-button>
        </div>
        <!-- </vx-card> -->
      </vx-card>
    </div>

    <vs-popup title="Menu Item" :active.sync="menuItemPopup">
      <!--  SECTION POPUP -->
      <form action data-vv-scope="menu-item-update">
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-input
              name="name"
              class="w-full"
              label="Name"
              v-model="menu_item_update.name"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('menu-item-update.name')"
            >{{ errors.first('menu-item-update.name') }}</span>
          </div>

          <div class="vx-col w-full mt-4">
            <vs-input
              name="link"
              class="w-full"
              label="Link"
              v-model="menu_item_update.link"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('menu-item-update.link')"
            >{{ errors.first('menu-item-update.link') }}</span>
          </div>

          <div class="vx-col w-full mt-4">
            <vs-checkbox v-model="menu_item_update.open_new_tab">Open in new tab</vs-checkbox>
          </div>

          <div class="vx-col w-full">
            <vs-button
              class="mt-4 float-right"
              type="border"
              size="small"
              @click="menuItemPopup = false"
            >Done</vs-button>
          </div>
        </div>
      </form>
    </vs-popup>
  </div>
</template>
<style lang="scss" scoped>
.menu-builder--area {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 10px;
}
</style>
<script>
import { VueNestable, VueNestableHandle } from "vue-nestable";
import _ from "lodash";
export default {
  data() {
    return {
      menuItemPopup: false,
      menu: {
        menu_items: [],
      },
      menu_item: {},
      menu_item_update: {},
    };
  },
  components: {
    VueNestable,
    VueNestableHandle,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchMenu();
  },
  methods: {
    async fetchMenu() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/menus/${this.id}`);
        if (response.data.success) {
          this.menu = response.data.data;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async addItemToMenu() {
      let result = await this.$validator.validateAll("menu-item");
      if (!result) {
        return;
      }
      let item = _.cloneDeep(this.menu_item);
      item["id"] = "_" + Math.random().toString(36).substr(2, 9);
      item["children"] = [];
      this.menu.menu_items.push(item);
      this.menu_item = {};
    },

    removeMenuItem(item) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete menu item?",
        accept: () => {
          let menu_items = this.menu.menu_items;
          let context = this;
          menu_items.map(function (menu_item, index) {
            if (menu_item.id === item.id) {
              menu_items.splice(index, 1);
            } else {
              menu_item = context.removeFromTree(menu_item, item.id);
            }
          });
        },
      });
    },

    removeFromTree(parent, idToRemove) {
      let context = this;
      parent.children = parent.children
        .filter(function (child) {
          return child.id !== idToRemove;
        })
        .map(function (child) {
          return context.removeFromTree(child, idToRemove);
        });
      return parent;
    },
    editMenuItem(item) {
      this.menu_item_update = item;
      this.menuItemPopup = true;
    },

    async saveMenu() {
      let result = await this.$validator.validateAll("menu");
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          title: this.menu.title,
          menu_items: this.menu.menu_items,
        };

        let url = "/api/admin/menus";
        if (this.id) {
          url = `/api/admin/menus/${this.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success === true) {
          this.successNotification(response.data.message);
          if (!this.id) {
            return this.$router.push({
              name: "admin-menus",
            });
          }
        } else {
          this.errorNotification(response.data.message);
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
  watch: {
    menuItemPopup(val) {
      if (!val) {
        this.menu_item_update = {};
      }
    },
  },
};
</script>


<template>
  <div>
    <div v-if="shippingAddressesCount > 0"
      class="
        modal
        fade
        bd-example-modal-lg
        theme-modal
        add-shippingaddress-modal
      "
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content p-5">
          <div class="modal-body auth--modal-content">
            <div class="theme-form">
              <div class="row check-out">
                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                  <label>First Name</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="address.first_name"
                    name="first_name"
                    required
                  />
                </div>
                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                  <label>Last Name</label>
                  <input
                    class="form-control"
                    type="text"
                    name="last_name"
                    v-model="address.last_name"
                    required
                  />
                </div>
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                  <label class="field-label">Contact Number</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="address.contact_number"
                    name="contact_number"
                    required
                  />
                </div>

                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                  <label class="field-label">Province</label>
                  <select
                    name="province"
                    class="form-control"
                    v-model="address.province"
                    required
                  >
                    <option value>Select Province</option>
                    <option
                      :value="province.id"
                      v-for="province in addresses"
                      :key="`province${province.id}`"
                    >
                      {{ province.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                  <label class="field-label">District</label>
                  <select
                    v-model="address.district"
                    name="district"
                    class="form-control"
                    required
                  >
                    <option value>Select District</option>
                    <option
                      :value="district.name"
                      v-for="district in districts"
                      :key="`district${district.name}`"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                </div>

                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                  <label class="field-label">City</label>
                  <input
                    class="form-control"
                    type="text"
                    v-model="address.city"
                    name="city"
                    required
                  />
                </div>
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                  <label class="field-label">Landmark</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="address.landmark"
                    name="landmark"
                    required
                  />
                </div>

                <div class="col-sm-12">
                  <button
                    class="btn-outline-primary-2 btn btn-sm"
                    @click="saveAddress"
                    :disabled="saving_address"
                  >
                    {{ saving_address ? "Saving Address..." : "Save Address" }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mb-3 p-4"
      style="background: #f6f6f6"
      v-if="shippingAddressesCount == 0"
    >
      <div class="theme-form">
        <div class="row check-out">
          <div class="form-group col-md-6 col-sm-6 col-xs-12">
            <label>First Name</label>
            <input
              class="form-control"
              type="text"
              v-model="address.first_name"
              name="first_name"
              required
            />
          </div>
          <div class="form-group col-md-6 col-sm-6 col-xs-12">
            <label>Last Name</label>
            <input
              class="form-control"
              type="text"
              name="last_name"
              v-model="address.last_name"
              required
            />
          </div>
          <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label class="field-label">Contact Number</label>
            <input
              class="form-control"
              type="text"
              v-model="address.contact_number"
              name="contact_number"
              required
            />
          </div>

          <div class="form-group col-md-6 col-sm-6 col-xs-12">
            <label class="field-label">Province</label>
            <select
              name="province"
              class="form-control"
              v-model="address.province"
              required
            >
              <option value>Select Province</option>
              <option
                :value="province.id"
                v-for="province in addresses"
                :key="`province${province.id}`"
              >
                {{ province.name }}
              </option>
            </select>
          </div>
          <div class="form-group col-md-6 col-sm-6 col-xs-12">
            <label class="field-label">District</label>
            <select
              v-model="address.district"
              name="district"
              class="form-control"
              required
            >
              <option value>Select District</option>
              <option
                :value="district.name"
                v-for="district in districts"
                :key="`district${district.name}`"
              >
                {{ district.name }}
              </option>
            </select>
          </div>

          <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label class="field-label">City</label>
            <input
              class="form-control"
              type="text"
              v-model="address.city"
              name="city"
              required
            />
          </div>
          <div class="form-group col-md-12 col-sm-12 col-xs-12">
            <label class="field-label">Landmark</label>
            <textarea
              type="text"
              class="form-control"
              v-model="address.landmark"
              name="landmark"
              required
            />
          </div>

          <div class="col-sm-12">
            <button
              class="btn-outline-primary-2 btn btn-sm"
              @click="saveAddress"
              :disabled="saving_address"
            >
              {{ saving_address ? "Saving Address..." : "Save Address" }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="text-center">
        <button class="address-add-button" @click="openAddressModal">
          <i class="icon-plus"></i>
        </button>
        <p class="font-18 mt-3">Add new Address</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["shippingAddressesCount"],
  data() {
    "";
    return {
      addresses: [],
      address: {
        province: null,
        district: null,
      },
      saving_address: false,
    };
  },
  computed: {
    districts() {
      if (this.addresses.length) {
        let address_ = this.addresses.filter(
          (province) => province.id === this.address.province
        );
        if (address_.length) {
          return address_[0].districts;
        }
      }
      return [];
    },
  },
  mounted() {
    this.getLocalAddresses();
  },
  methods: {
    openAddressModal() {
      $(".add-shippingaddress-modal").modal("show");
    },

    async getLocalAddresses() {
      try {
        let response = await axios.get("/api/local-addresses");
        this.addresses = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async saveAddress() {
      try {
        this.saving_address = true;
        let response = await axios.post(
          "/api/save-shipping-address",
          this.address
        );
        if (response.data.success) {
          this.address = {};
          location.reload();
        }
      } catch (error) {
      } finally {
        this.saving_address = false;
      }
    },
  },
};
</script>
<template>
  <div>
    <vx-card id="loading--container" class="vs-con-loading__container">
      <div slot="no-body" class="tabs-container px-6 pt-6">
        <vs-tabs class="tab-action-btn-fill-conatiner">
          <vs-tab label="Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <UserInformation />
            </div>
          </vs-tab>
          <vs-tab label="Business Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <BusinessInformation />
            </div>
          </vs-tab>
          <vs-tab label="Bank Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <BankInformation />
            </div>
          </vs-tab>
          <vs-tab label="Security" icon="vpn_key">
            <div class="tab-text">
              <UserSecurity />
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </vx-card>
  </div>
</template>
<script>
import UserInformation from "./Information";
import UserSecurity from "./Security";
import BusinessInformation from "./BusinessInformation";
import BankInformation from "./BankInformation";

export default {
  components: {
    UserInformation,
    UserSecurity,
    BusinessInformation,
    BankInformation
  },
};
</script>
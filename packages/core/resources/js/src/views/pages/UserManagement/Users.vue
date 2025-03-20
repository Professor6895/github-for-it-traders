<template>
  <div>
     <vx-card id="loading--container" class="vs-con-loading__container">
      <div slot="no-body" class="tabs-container px-6 pt-6">
        <vs-tabs class="tab-action-btn-fill-conatiner">
         <vs-tab label="Customers" icon="people">
            <div class="tab-text">
              <UsersList />
            </div>
          </vs-tab>
          <vs-tab label="Staffs" icon-pack="feather" icon="icon-info" v-if="checkPermission('admins-view')">
            <div class="tab-text">
              <AdminList />
            </div>
          </vs-tab>
        </vs-tabs>
      </div>
    </vx-card>
  </div>
</template>
<script>
import AdminList from "./AdminUsers";
import UsersList from "./UsersList"

export default {
  components: {
    AdminList,
    UsersList
  }
};
</script>
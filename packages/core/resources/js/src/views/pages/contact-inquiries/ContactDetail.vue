<template>
  <div>
    <vx-card class="sm:w-3/5 card-padding-5 vs-con-loading__container" id="loading--container">
      <div class="contact--detail-div mb-4">
        <table class="contact--table">
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>{{ contact.name }}</td>
            </tr>
            <tr>
              <td>
                <strong>Email Address</strong>
              </td>
              <td>{{ contact.email }}</td>
            </tr>
            <tr>
              <td>
                <strong>Contact Number</strong>
              </td>
              <td>{{ contact.contact }}</td>
            </tr>
            <tr>
              <td>
                <strong>Subject</strong>
              </td>
              <td>{{ contact.subject }}</td>
            </tr>
            <tr>
              <td>
                <strong>Message</strong>
              </td>
              <td>{{ contact.message }}</td>
            </tr>
            <tr>
              <td>
                <strong>Status</strong>
              </td>
              <td>{{ contact.replied_at ? 'Replied': 'Not Replied' }}</td>
            </tr>
            <tr v-if="contact.replied_at">
              <td>
                <strong>Replied At</strong>
              </td>
              <td>{{ contact.replied_at | date_format('MMMM Do YYYY, h:mm a') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />

      <div class="vx-col w-full mt-4" v-if="checkPermission('contacts-reply')">
        <div v-if="contact.replied_at">
          <p>
            <strong>Reply</strong>
          </p>
          <div v-html="contact.reply" class="reply--area mt-2"></div>
        </div>
        <div v-else>
          <p>
            <strong>Write a reply</strong>
          </p>
          <br />
          <q-editor v-model="contact.reply"></q-editor>
          <span class="text-danger text-sm" v-if="errors.has('reply')">{{ errors.first('reply') }}</span>
          <div class="vx-col w-full mt-3">
            <vs-button type="relief" color="primary" @click="sendReply">Send Reply</vs-button>
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<style lang="scss" scoped>
.contact--detail-div {
  overflow-x: scroll;
}
.contact--table {
  width: 100%;

  border: 1px solid #f8f8f8;
  border-collapse: collapse;
  th {
    border: 1px solid #f8f8f8;
  }
  td {
    padding: 13px 20px;
    min-width: 200px;
    border: 1px solid #f8f8f8;
  }

  tbody {
    tr:nth-of-type(odd) {
      background-color: #f9f9f9;
    }
  }
}
.reply--area {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
<script>
import { renderServerErrors } from "@/utils.js";

export default {
  data() {
    return {
      id: null,
      contact: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchContactDetail();
  },
  methods: {
    async fetchContactDetail() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/admin/contact-inquiries/${this.id}/detail`
        );
        if (response.data.success) {
          this.contact = response.data.data;
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

    async sendReply() {
      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let params = { reply: this.contact.reply };
        let response = await this.$http.post(
          `/api/admin/contact-inquiries/${this.id}/send-reply`,
          params
        );

        this.fetchContactDetail();
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
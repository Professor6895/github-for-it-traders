<template></template>
<script>
export default {
  mounted() {
    let userRole = this.$store.state.AppActiveUser.userRole;
    let path = `/${userRole}/login`;
    // If JWT login
    this.$acl.change("admin");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    this.$router.push({ path: path }).catch(() => {});
  },
};
</script>
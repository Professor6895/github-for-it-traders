<template> 
  <img :src="logo" alt="">
</template>
<script>
export default {
    computed: {
        logo() {
            return _.get(this.$store, 'state.settings.dashboard_settings.core.logo', '')
        }
    }
}
</script>

import store from "./store/store";

const systemMixins = {
    methods: {
        successNotification(text, title = null, position = null) {
            this.$vs.notify({
                title: title ? title : "Success",
                position: position ? position : "top-right",
                text: text,
                color: "success"
            });
        },
        errorNotification(text, title = null, position = null) {
            this.$vs.notify({
                title: title ? title : "Error",
                position: position ? position : "top-right",
                text: text,
                color: "danger"
            });
        },
        checkPermission(permisson) {
            if (!permisson) {
                return true;
            }
            let permissons = store.state.AppActiveUser.permissions;
            return (permissons.includes(permisson)) ? true : false;
        }
    }
};

export {
    systemMixins,
}

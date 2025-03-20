import Vue from "vue"
import { AclInstaller, AclCreate, AclRule } from "vue-acl"
import router from "@/router"

Vue.use(AclInstaller)
let initialRole = "admin"
let userInfo = JSON.parse(localStorage.getItem("userInfo"))
if(userInfo && userInfo.userRole) initialRole = userInfo.userRole

export default new AclCreate({
  initial: initialRole,
  notfound: "/pages/not-authorized",
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule("admin").generate(),
    editor: new AclRule("editor").generate(),
    teacher: new AclRule("teacher").generate(),
    artist:new AclRule("artist").generate(),
    vendor: new AclRule("vendor").generate(),
    public: new AclRule("public").or("admin").or("editor").or("teacher").or("artist").or('vendor').generate(),
  }
})

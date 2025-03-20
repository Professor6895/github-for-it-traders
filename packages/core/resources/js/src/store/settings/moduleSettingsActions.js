/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import Vue from "vue";
import store from "./../store";
import _ from "lodash";
export default {
  fetchSettings({ commit, state }, { next, once }) {
    if(once) {
      if(store.state.settings.dashboard_settings === null) {
        return Vue.axios.get("/api/settings/application-settings").then(function(response) {
          commit("SET_SETTINGS", response.data);
          if (next) {
            next();
          }
        });  
      } else {
        if(next) {
          next
        }
      }
    }else {
      return Vue.axios.get("/api/settings/application-settings").then(function(response) {
        commit("SET_SETTINGS", response.data);
        if (next) {
          next();
        }
      });
    }
  },
};

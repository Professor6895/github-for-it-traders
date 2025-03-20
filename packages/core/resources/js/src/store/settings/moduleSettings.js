/*=========================================================================================
  File Name: moduleAuth.js
  Description: Auth Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleSettingsState'
import mutations from './moduleSettingsMutations'
import actions from './moduleSettingsActions'
import getters from './moduleSettingsGetters'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

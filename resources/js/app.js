// window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';

Vue.component('fm-preview', require('./components/Preview'));
Vue.component('fm-files', require('./components/Files'));

Vue.prototype.$http = require('axios');

window.fmBroadcast = new Vue();
window.fmApp = new Vue({

    el: '#filemanager',

});

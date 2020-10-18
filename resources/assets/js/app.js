// import Vue from 'vue';
// import App from '../../js/components/App';
//
// export function createApp() {
//     return new Vue({
//         render: h => h(App)
//     });
// }


import App from '../../js/components/App';
import Vue from 'vue';

export default new Vue({
    render: h => h(App)
});

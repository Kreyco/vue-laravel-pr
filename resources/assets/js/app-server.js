// import { createApp } from './app';
// import renderVueComponentToString from 'vue-server-renderer/basic';
//
// renderVueComponentToString(createApp(), (err, res) => {
//     if (err) {
//         throw new Error(err);
//     }
//
//     // dispatch(html);
//     print(res);
// });

import app from './app'


renderVueComponentToString(app, (err, res) => {
    print(res);
});

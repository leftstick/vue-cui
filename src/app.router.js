import Vue from 'vue';
import Router from 'vue-router';
import doc from './doc/doc.vue';
Vue.use(Router);
export function createRouter(){
    return new Router({
        mode:'history',
        routes: [
            {
                path: '*',
                name: 'doc',
                component:  doc
            }
        ]
    })
};

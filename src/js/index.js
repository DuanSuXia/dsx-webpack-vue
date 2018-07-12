/*入口文件*/
require("../html/index.html");
require("../assets/css/common.scss");
require("../assets/css/index.scss");
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import resourceUse from "./module/resourceUse.vue"
//使用resource
Vue.use(VueResource);
//使用ElementUI
Vue.use(ElementUI);
Vue.use(resourceUse);
/**
 * @description 启动App
 * @returns {{name: string}}
 * @constructor
 */
    //App启动
let App = new Vue({
        el: '#App',
        data(){
            return {
                'name': 'index'
            }
        },
        mounted(){
        },
        components: {
            'resource-use': resourceUse
        }
    });

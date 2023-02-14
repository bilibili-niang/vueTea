import {Indicator} from "mint-ui";
import axios from "axios";

export default {
    common: {
        methods: 'GET',
        data: {},
        params: {}
    },
    $axios(options = {}) {

        options.mehods = options.methods || this.common.methods;
        options.data = options.data || this.common.data;
        options.params = options.params || this.common.params;
        //请求前显示加载中
        Indicator.open('Loading...');
        return axios(options)
            .then(res => {
                let data = res.data.data;
                return new Promise((res, rej) => {
                    if (!res) return rej();
                    //结束,close
                    setTimeout(() => {
                        Indicator.close();
                    }, 500)
                    res(data);
                })
            })
    }

}
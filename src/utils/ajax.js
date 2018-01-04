import axios from 'axios'

class Ajax {
    constructor(param){
        this.type = param.type || '';
        this.headers = {'Content-Type': 'application/json;charset=UTF-8','Accept':'*/*'} || {};
        this.responseType = param.responseType || 'json';
        this.baseURL = "";
        this.url = param.url || '';
        this.paramater = param.paramater || {};
        this.transformRequest = () => {};
        this.transformResponse = () => {};
        this.success = (res) => {param.success(res)};
        this.error = (error) => {param.error(error)};
        //请求时的拦截
        axios.interceptors.request.use((config) => {
            // 发送请求之前做一些处理
            console.log("请求成功");
            return config;
        }, function (error) {
            // 当请求异常时做一些处理
            console.log("请求失败，请联系管理员");
            return Promise.reject(error);
        });

        // 响应时拦截
        axios.interceptors.response.use((response) => {
            // 返回响应时做一些处理
            this.success(response.request.response);
            return response;
        }, function (error) {
            // 当响应异常时做一些处理
            this.error(error);
        });
        axios({
            method: this.type,
            headers: this.headers,
            responseType: this.responseType,
            baseURL: this.baseURL,
            url: this.url,
            data: {
                app: "daijj",
                version: "v2.0",
                payload: this.paramater
            },
            transformRequest: this.transformRequest,
            transformResponse: this.transformResponse
        });
    }
}
export default (param) => {
    new Ajax(param);
}
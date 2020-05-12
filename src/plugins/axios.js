"use strict";

import Vue from "vue";
import axios from "axios";
import router from "@/router";

const { BASE_URL } = process.env;

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// axios.defaults.transformRequest = data => {
//   return stringify(data);
// };

let config = {
  baseURL: BASE_URL || "",
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

/**
 * 请求失败后的错误统一处理，当然还有更多状态码判断，根据自己业务需求去扩展即可
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // 跳转登录页
      router.replace({ path: `${BASE_URL}login` });
      break;
    // 403 token过期
    case 403:
      if (router.currentRoute.name !== "login")
        // 如果不需要自动刷新token，可以在这里移除本地存储中的token，跳转登录页
        router.replace({ path: `${BASE_URL}login` });
      break;
    // 404请求不存在
    case 404:
      // 提示资源不存在
      console.log("资源不存在");
      break;
    default:
      console.log(other);
  }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data;
  },
  function(error) {
    errorHandle(error.response.status, error.response.data);
    // Do something with response error
    return Promise.reject(error.response);
  }
);

// 处理get请求
export const Get = (url, params, config = {}) =>
  _axios.get(url, { ...config, params });
// 处理delete请求，为了防止和关键词delete冲突，方法名定义为deletes
export const Delete = (url, params, config = {}) =>
  _axios.delete(url, { ...config, params });
// 处理post请求
export const Post = (url, params, config = {}) =>
  _axios.post(url, params, config);
// 处理put请求
export const Put = (url, params, config = {}) =>
  _axios.put(url, params, config);

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;

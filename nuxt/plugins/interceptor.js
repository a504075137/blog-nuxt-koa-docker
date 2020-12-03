
export default function ({ $axios, store }, inject) {
  // 监听请求
  const baseURL = process.dev ? process.env.baseURL.development : process.env.baseURL.production
  $axios.defaults.baseURL = baseURL;

  $axios.onRequest(config => {
    // config.headers.Authorization = 'xxx'
    return config;
  })
}

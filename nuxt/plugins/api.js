
class Api {
  constructor($axios) {
    this.$axios = $axios
  }
  getData(url, params) {
    return this.$axios.$get(url, { params })
  }
  postData(url, params) {
    return this.$axios.$post(url, params)
  }

  getAllArticle(params) {
    return this.getData("api/article", params)
  }
  searchOneContent(params) {
    return this.getData("api/article/searchOne", params)
  }

}


export default function ({ $axios, store }, inject) {

  inject('api', new Api($axios))
}

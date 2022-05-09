<template>
  <section class="AxiosTestFullPost"></section>
</template>

<script>
import axios from "axios";
import qs from 'qs'
export default {
  name: "AxiosTestFullPost",
  data() {
    return {};
  },
  components: {},
  watch: {},
  created() {
    let result = axios({
      method: "POST",
      url: "http://www.liulongbin.top:3006/api/post",
      //headers: {Accept: 'application/json, text/plain, */*', Content-Type: 'application/json'}
      //data: "{\"name\":\"zs\",\"age\":20}"
      data: {
        name: "zs",
        age: 20
      }

      // headers: {Accept: 'application/json, text/plain, */*', Content-Type: 'application/x-www-form-urlencoded'}
      // data:qs.stringify({name: "zs",age: 20})  //data: "name=zs&age=20"
    });
    result.then(res => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style></style>

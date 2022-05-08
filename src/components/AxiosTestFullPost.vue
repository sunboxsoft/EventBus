<template>
  <section class="AxiosTestFullPost"></section>
</template>

<script>
import axios from "axios";
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
      data: {
        name: "zs",
        age: 20
      }
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

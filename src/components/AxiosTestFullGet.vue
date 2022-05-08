<template>
  <section class="AxiosTestFullGet">AxiosTestFullGet</section>
</template>

<script>
import axios from "axios";
export default {
  name: "AxiosTestFullGet",
  data() {
    return {};
  },
  components: {},
  watch: {},
  created() {
    let result = axios({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/getbooks",
      params:{
          id:1
      }
    });
    result.then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>

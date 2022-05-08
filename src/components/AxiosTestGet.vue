<template>
  <section class="AxiosTestGet">AxiosTestGet</section>
</template>

<script>
import axios from "axios";
export default {
  name: "AxiosTestGet",
  data() {
    return {};
  },
  components: {},
  async created() {
    // axios
    //   .get("http://www.liulongbin.top:3006/api/getbooks", { params: { id: 1 } })
    //   .then((res) => {
    //     console.log(res, "AAAAAAAAAAAAAA");
    //   });

    //  this.getData();

    let { data: res } = await axios.get(
      "http://www.liulongbin.top:3006/api/getbooks",
      {
        params: { id: 1 },
      }
    );
    console.log(res.data,res,' async created() {');
  },
  watch: {},
  mounted() {},
  methods: {
    async getData() {
      let { data: res } = await axios.get(
        "http://www.liulongbin.top:3006/api/getbooks",
        {
          params: { id: 1 },
        }
      );
      console.log(res.data);
    },
  },
};
</script>

<style>
</style>

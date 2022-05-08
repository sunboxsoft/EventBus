<template>
  <section class="MockJsTest">
    <div ref="box">
      MockJsTest
      <ul>
        <li v-for="item in list" :key="item.id">
          <h3>{{ item.title }}</h3>
          <img :src="item.small" :alt="item.title" />
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import Mock from "mockjs";
export default {
  name: "MockJsTest",
  data() {
    return {
      list: []
    };
  },
  components: {},
  watch: {},
  created() {
    let Random = Mock.Random;
    // console.log(Random.now("yyyy-MM-dd HH:mm:ss SS"));

    // let img = Random.dataImage("200x100", "标题");
    // console.log(img, "AAAAAAAAAA");

    // this.$nextTick(() => {
    //   this.$refs.box.style.background = Random.color();
    // });
    // console.log(Random.url('http', '01357.com'))

    // let obj = Mock.mock({
    //   "key|1-10": "★"
    // });
    // console.log(obj);

    // obj = Mock.mock({
    //   "NameArray|1-10": [
    //     {
    //       name: "@increment(100)",
    //       guid: "@guid",
    //       id: "@increment"
    //     }
    //   ]
    // });
    // console.log(obj.NameArray);

    const { MovieList } = Mock.mock({
      "MovieList|10-30": [
        {
          id: "@increment()",
          title: "@ctitle()",
          longTime: "@natural(60,100)",
          price: "@float(15,200m0,2)",
          update: "@date(yyyy-MM-dd)",
          small: "@dataImage('200x100', 'Hello Mock.js!')",
          info: "@cparagraph(2)"
        }
      ]
    });
    this.list = MovieList;
    // console.log(MovieList);
  },
  mounted() {},
  methods: {
    handleDelete() {
      this.$emit("handleDelete");
    }
  }
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
ul > li {
  flex: 25%;
  flex-grow: 0;
}
</style>

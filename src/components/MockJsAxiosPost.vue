<template>
  <!-- 
    水木清华 讲义
    https://blog.csdn.net/dongqian911/article/details/115136566 
    -->
  <section class="MockJsAxiosPost">
    <ul>
      <li @click="handleShow(item)" v-for="item in list" :key="item.id">
        <img :src="item.small" alt="" srcset="" />
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
    <modal-test
      v-if="show"
      :isShow.sync="show"
      @handleDelete="handleDelete"
      :currentInfo="currentInfo"
    ></modal-test>
  </section>
</template>

<script>
import axios from "axios";
import Mock from "mockjs";
import ModalTest from "@/components/modules/ModalTest";
export default {
  name: "MockJsAxiosPost",
  data() {
    return {
      show: false,
      currentInfo: {},
      MovieList: [],
      list: []
    };
  },
  components: {
    ModalTest
  },
  watch: {},
  created() {
    const { MovieList1 } = Mock.mock({
      "MovieList1|10-30": [
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
    this.MovieList = MovieList1;
    console.log(this.MovieList, this.MovieList.length);
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      // Mock.mock("http://bufantec.com/api/douban/movie/top250?id=1", "get", () => {
      //   return "被我拦截了，嘎嘎";
      // });
      // //   http://bufantec.com/api/douban/movie/top250
      // // 第一种方式
      // axios({
      //   method: "GET",
      //   url: "http://bufantec.com/api/douban/movie/top250",
      //   params:{
      //       id:1
      //   }
      // }).then(res => {
      //   console.log(res);
      // });

      // 第二种方法  别忘记 async  created() {
      // let { data: res } = await axios.get("http://bufantec.com/api/douban/movie/top250",{params: { id: 1 }});
      // console.log(res.data,'let { data: res } = await axios.get(')
      // 因为下面axios有params参数，用正则拦截
      Mock.mock(
        /http:\/\/bufantec\.com\/api\/douban\/movie\/top250/,
        "post",
        params => {
        //   console.log(params);
          let limit = this.getParams("limit", params);
          let start = this.getParams("start", params);
          // 如果start超过最大页，返回最大页
        //   console.log(this.MovieList.length);
          start =
            Math.ceil(this.MovieList.length / limit) >= start
              ? start
              : Math.ceil(this.MovieList.length / limit);
          // console.log(MovieList.length/limit,limit,start)

          let startIndex = (start - 1) * limit; //开始记录
          let endIndex = start * limit; //结束记录
          let newMovieList = this.MovieList.slice(startIndex, endIndex);
          // console.log(MovieList,limit, start, "limitAAAAAAAAAA");
          // console.log(newMovieList)
          return {
            status: 200,
            total: this.MovieList.length,
            list: newMovieList
          };
        }
      );
      //   http://bufantec.com/api/douban/movie/top250
      // 第一种方式
      axios({
        method: "POST",
        url: "http://bufantec.com/api/douban/movie/top250",
        data: {
          limit: 5,
          start: 30
        }
      }).then(({ data: res }) => {
        this.list = res.list;
      });
    },
    // 解析 参数
    getParams(key, { body: b }) {
      return JSON.parse(b)[key];
    },
    handleShow(item) {
      this.currentInfo = item;
      this.show = true;
    },
    handleDelete() {
      let index = this.MovieList.findIndex(
        item => item.id == this.currentInfo.id
      );

      console.log(this.currentInfo, index, "delete");
      this.MovieList.splice(index, 1);
      this.show = false;
      this.init();
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

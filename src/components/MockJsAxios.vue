<template>
  <!-- 
    水木清华 讲义
    https://blog.csdn.net/dongqian911/article/details/115136566 
    -->
  <section class="MockJsAxios">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.small" alt="" srcset="" />
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import Mock from "mockjs";
export default {
  name: "MockJsAxios",
  data() {
    return {
      list: []
    };
  },
  components: {},
  watch: {},
  created() {
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

    // 因为下面axios有params参数，用正则拦截
    Mock.mock(
      /http:\/\/bufantec\.com\/api\/douban\/movie\/top250/,
      "get",
      params => {
        // console.log(params,'params')
        // limit：每页记录数     start:当前页
        let limit = this.getParams("limit", params);
        let start = this.getParams("start", params);
        // 如果start超过最大页，返回最大页
        start= Math.ceil(MovieList.length/limit)>=start?start:Math.ceil(MovieList.length/limit)
        // console.log(MovieList.length/limit,limit,start)

        let startIndex = (start - 1) * limit; //开始记录
        let endIndex = start * limit; //结束记录
        let newMovieList = MovieList.slice(startIndex,endIndex);      
        // console.log(MovieList,limit, start, "limitAAAAAAAAAA");
        // console.log(newMovieList)
        return {
          status: 200,
          total: MovieList.length,
          list: newMovieList
        };
      }
    );
    //   http://bufantec.com/api/douban/movie/top250
    // 第一种方式
    axios({
      method: "GET",
      url: "http://bufantec.com/api/douban/movie/top250",
      params: {
        limit: 5,
        start: 30
      }
    }).then(({ data: res }) => {
      this.list = res.list;
    });
  },
  mounted() {},
  methods: {
    // 解析 参数
    getParams(key, { url }) {
      url = url.slice(url.indexOf("?") + 1);
      let arr = url.split("&");
      for (let i = 0; i < arr.length; i++) {
        let obj = arr[i].split("=");
        if (obj[0] == key) {
          return obj[1];
        }
      }
    }
  }
};
</script>

<style>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
ul>li{
    flex: 25%;
    flex-grow: 0;
}
</style>

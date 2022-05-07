<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" ref="code" @blur="LoseFocus"/><button @click="$refs.code.focus()">获取焦点</button>
    <div class="content">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Right from "./modules/Right.vue";
import Left from "./modules/Left.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: { Right, Left },
  methods:{
    LoseFocus(e){
      console.log('失去焦点时触发',e.target.value)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.content {
  display: flex;
  height: 30vh;
}
.Left {
  flex: 1;
  background-color: pink;
}
.Right {
  flex: 1;
  background-color: skyblue;
}
</style>

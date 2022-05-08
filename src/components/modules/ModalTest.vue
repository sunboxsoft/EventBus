<template>
  <section @click.self="handleClick" class="ModalTest">
    <div class="box">
      <!-- {{ isShow }}{{ currentInfo }} -->
      <template v-if="isEdit">
        <div>
          <h3><input v-model="currentInfo.title" type="text" /></h3>
        </div>
        <div><img :src="currentInfo.small" alt="" srcset="" /></div>
        <div>
          <textarea
            rows="10"
            placeholder="多行文本框"
            cols="40"
            v-model="currentInfo.info"
          ></textarea>
        </div>
      </template>
      <template v-else>
        <div>
          <h3>{{ currentInfo.title }}</h3>
        </div>
        <div><img :src="currentInfo.small" alt="" srcset="" /></div>
        <div>{{ currentInfo.info }}</div>
      </template>

      <template v-if="isEdit">
        <button @click="isEdit = false">保存</button>
      </template>
      <template v-else>
        <button @click="handleEdit">编辑</button>
        <button @click="handleDelete">删除</button>
      </template>
      <button @click="handleClose">关闭</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModalTest",
  props: ["isShow", "currentInfo"],
  data() {
    return {
      isEdit: false
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleClick() {
      console.log("AAAAAAAAAAAA");
    },
    handleEdit() {
      this.isEdit = true;
    },
    handleClose() {
       this.$emit("update:isShow", !this.isShow);
    },
    handleDelete() {
      this.$emit("handleDelete");
    }
  }
};
</script>

<style>
.ModalTest {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(137, 207, 235, 0.8);
  display: flex;
}
.box {
  width: 500px;
  height: 500px;
  margin: auto;
  background: pink;
}
</style>

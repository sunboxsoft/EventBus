<template>
  <section class="Left">
    Left
    <button @click="sendMsg()">发射</button>
  </section>
</template>

<script>
import bus from  './EventBus'
export default {
 name: 'Left',
  data() {
    return {
        msg:'hello vue.js'
    }
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
      sendMsg(){
          bus.$emit('share',this.msg)
      }
  }
}
</script>

<style>

</style>

<template>
  <section class="Right">
    Right  {{msgFromLeft}}
  </section>
</template>

<script>
import bus from  './EventBus'
export default {
 name: 'Right',
  data() {
    return {
        msgFromLeft:''
    }
  },
  components: {},
  watch: {},
  created(){
      bus.$on('share',val=>{
          this.msgFromLeft= val
      })
  },
  mounted() {},
  methods: {}
}
</script>

<style>

</style>

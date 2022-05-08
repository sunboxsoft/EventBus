<template>
  <section class="AxiosTestPost">
    
  </section>
</template>

<script>
import axios from 'axios'
export default {
 name: 'AxiosTestPost',
  data() {
    return {

    }
  },
  components: {},
  watch: {},
// created(){
//     axios.post('http://www.liulongbin.top:3006/api/post',{name:'zs',gender:'女'}).then(result=>{
//         const {data:res}= result
//         console.log(result,res,'const {data:res}= res')
//     })
// },
 async created(){
    let {data:res}=await  axios.post('http://www.liulongbin.top:3006/api/post',{name:'zs',gender:'女'})
    console.log(res,' async created(){')
  },
  mounted() {},
  methods: {}
}
</script>

<style>

</style>

<template>
  <section class="AxiosTestPost">
    
  </section>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
 name: 'AxiosTestPost',
  data() {
    return {

    }
  },
  components: {},
  watch: {},

//Content-Type: application/json; charset=utf-8
// created(){
//     axios.post('http://www.liulongbin.top:3006/api/post',{name:'zs',gender:'女'}).then(result=>{
//         const {data:res}= result
//         console.log(result,res,'const {data:res}= res')
//     })
// },

//Content-Type: application/json; charset=utf-8
 async created(){
    let {data:res}=await  axios.post('http://www.liulongbin.top:3006/api/post',{name:'zs',gender:'女'})
    console.log(res,' async created(){')
  },

//  Accept: application/json, text/plain, */*
//  async created(){
//     let data = new URLSearchParams()
//     data.append('name','zs')
//     data.append('gender','女1')
//     let {data:res}=await  axios.post('http://www.liulongbin.top:3006/api/post',data)
//     console.log(res,' async created(){')
//   },

 //Content-Type: application/json; charset=utf-8
//  async created(){
//     console.log(qs.stringify({name:'zs',gender:'女1qs11'}))
//     let {data:res}=await  axios.post('http://www.liulongbin.top:3006/api/post',qs.stringify({name:'zs',gender:'女1qs11'}))
//     console.log(res,' async created(){')
//   },
  mounted() {},
  methods: {}
}
</script>

<style>

</style>

<template>
  <div>
      <div id="screen">{{message}}</div>
      <div>
          <div>
              <div>평균시간 : {{}}</div>
              <button @click="onReset">리셋</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            result:[],
            state:'',
            message:'클릭해서 시작하세요.'
        }
    },
        methods:{
            
        }
    }

</script>

<style>

</style>